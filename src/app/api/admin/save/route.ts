import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'hakinz2024';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';

// Save to GitHub (for production)
async function saveToGitHub(filePath: string, content: string, message: string) {
  if (!GITHUB_TOKEN || !GITHUB_REPO) {
    return { success: false, error: 'GitHub not configured' };
  }

  try {
    // Get current file SHA
    const getUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`;
    const getRes = await fetch(getUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    let sha: string | undefined;
    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    // Update file
    const updateUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${filePath}`;
    const updateRes = await fetch(updateUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(content).toString('base64'),
        sha,
        branch: GITHUB_BRANCH,
      }),
    });

    if (!updateRes.ok) {
      const error = await updateRes.json();
      console.error('GitHub error:', error);
      return { success: false, error: 'GitHub API error' };
    }

    return { success: true };
  } catch (error) {
    console.error('GitHub save error:', error);
    return { success: false, error: 'Failed to save to GitHub' };
  }
}

// Save locally (for development)
async function saveLocally(filePath: string, content: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    await writeFile(fullPath, content, 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Local save error:', error);
    return { success: false, error: 'Failed to save locally' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { password, file, content } = await request.json();

    // Verify password
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validate file
    const allowedFiles = ['site-content.json', 'projects.json'];
    if (!allowedFiles.includes(file)) {
      return NextResponse.json({ error: 'Invalid file' }, { status: 400 });
    }

    const filePath = `src/content/${file}`;
    const contentStr = JSON.stringify(content, null, 2);
    const commitMessage = `Update ${file} via admin panel`;

    // Try GitHub first (production), fall back to local (development)
    if (GITHUB_TOKEN && GITHUB_REPO) {
      const result = await saveToGitHub(filePath, contentStr, commitMessage);
      if (result.success) {
        return NextResponse.json({ 
          success: true, 
          message: 'Saved to GitHub! Site will rebuild automatically.',
          method: 'github'
        });
      }
    }

    // Fall back to local save
    const localResult = await saveLocally(filePath, contentStr);
    if (localResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Saved locally! Refresh to see changes.',
        method: 'local'
      });
    }

    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  } catch (error) {
    console.error('Save error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
