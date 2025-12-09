import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hakinz2024';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const password = formData.get('password') as string;
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'images';

    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: 'No file' }, { status: 400 });
    }

    // Validate
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File too large (max 5MB)' }, { status: 400 });
    }

    const timestamp = Date.now();
    const ext = file.name.split('.').pop();
    const filename = `${timestamp}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Try GitHub first, then local
    if (GITHUB_TOKEN && GITHUB_REPO) {
      const result = await uploadToGitHub(folder, filename, buffer);
      if (result.success) {
        return NextResponse.json({ success: true, url: result.url });
      }
    }

    // Local fallback
    const result = await uploadLocally(folder, filename, buffer);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}


async function uploadToGitHub(folder: string, filename: string, buffer: Buffer) {
  try {
    const filePath = `public/uploads/${folder}/${filename}`;
    const url = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;
    
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Upload image: ${filename}`,
        content: buffer.toString('base64'),
        branch: GITHUB_BRANCH,
      }),
    });

    if (res.ok) {
      return { success: true, url: `/uploads/${folder}/${filename}` };
    }
    return { success: false };
  } catch {
    return { success: false };
  }
}

async function uploadLocally(folder: string, filename: string, buffer: Buffer) {
  try {
    const dir = path.join(process.cwd(), 'public', 'uploads', folder);
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true });
    }
    await writeFile(path.join(dir, filename), buffer);
    return { success: true, url: `/uploads/${folder}/${filename}` };
  } catch {
    return { success: false, error: 'Local upload failed' };
  }
}
