# 🔧 Admin Panel Setup Guide

## Quick Start (Local Development)

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Go to admin panel:**
   ```
   http://localhost:9002/admin
   ```

3. **Login with default password:**
   ```
   hakinz2024
   ```

4. **Edit your content and save!**

---

## Production Setup (Vercel)

### Step 1: Create GitHub Token

1. Go to [GitHub Settings > Developer Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Admin"
4. Select scope: `repo` (full control)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Add Environment Variables to Vercel

Go to your Vercel project → Settings → Environment Variables

Add these:

| Name | Value |
|------|-------|
| `ADMIN_PASSWORD` | `your_secure_password` |
| `NEXT_PUBLIC_ADMIN_PASSWORD` | `your_secure_password` |
| `GITHUB_TOKEN` | `ghp_your_token_here` |
| `GITHUB_REPO` | `hakinz0110/your-repo-name` |
| `GITHUB_BRANCH` | `main` |

### Step 3: Deploy

Push your code to GitHub. Vercel will auto-deploy.

### Step 4: Access Admin

Go to `https://your-site.vercel.app/admin`

---

## How It Works

### Local Development
- Content saves directly to JSON files
- Images save to `public/uploads/`
- Changes appear immediately on refresh

### Production (Vercel)
- Content commits to GitHub via API
- Images commit to `public/uploads/` in repo
- Vercel auto-rebuilds site (takes ~1 min)

---

## Security Tips

1. **Change the default password!**
2. Use a strong, unique password
3. Keep your GitHub token secret
4. The admin panel is protected but not meant for public access

---

## Troubleshooting

**"Unauthorized" error:**
- Check your password in environment variables

**Changes not saving on Vercel:**
- Verify GITHUB_TOKEN has `repo` scope
- Check GITHUB_REPO format: `username/repo-name`

**Images not uploading:**
- Max file size is 5MB
- Allowed types: JPEG, PNG, GIF, WebP
