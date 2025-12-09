# 📝 Content Management

This folder contains all the editable content for your portfolio website. Simply edit the JSON files and push to GitHub — your site will automatically rebuild with the new content!

## Files

### `site-content.json`
Contains your personal information, social links, stats, about section, and skills.

**What you can edit:**
- `profile` - Your name, title, tagline, images, typing phrases, highlights
- `social` - Links to GitHub, LinkedIn, Twitter, WhatsApp
- `stats` - Years of experience, projects completed, clients, technologies
- `about` - Headline, paragraphs, and core principles
- `skills.coreSkills` - Skill bars with name, level (0-100), and color

### `projects.json`
Contains all your portfolio projects.

**Project fields:**
- `id` - Unique identifier (lowercase, no spaces)
- `slug` - URL-friendly version of the title
- `title` - Project name
- `category` - One of: "Web", "Mobile", "UI/UX", "VA"
- `description` - Short description (1-2 sentences)
- `longDescription` - Full project description
- `imageUrls` - Array of image URLs (leave empty `[]` for placeholder)
- `tags` - Array of technology tags
- `liveSiteUrl` - Link to live demo (optional)
- `sourceCodeUrl` - Link to source code (optional)

## How to Update

1. Edit the JSON file(s) in this folder
2. Save your changes
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Your site will automatically rebuild on Vercel/Firebase

## Adding a New Project

Add a new object to the `projects` array in `projects.json`:

```json
{
  "id": "my-new-project",
  "slug": "my-new-project",
  "title": "My New Project",
  "category": "Web",
  "description": "A brief description of the project.",
  "longDescription": "A detailed description...",
  "imageUrls": ["https://example.com/image.png"],
  "tags": ["React", "Node.js"],
  "liveSiteUrl": "https://myproject.com",
  "sourceCodeUrl": "https://github.com/username/repo"
}
```

## Adding Profile Images

1. Upload your image to Supabase Storage or any image hosting
2. Copy the public URL
3. Add it to the `profile.images` array in `site-content.json`:

```json
{
  "src": "https://your-image-url.com/image.png",
  "fallback": "https://placehold.co/500x500/2A2A2A/63B5FF?text=HT",
  "alt": "Description of the image"
}
```

## Tips

- Keep descriptions concise for mobile users
- Use high-quality images (recommended: 1200x675 for projects, 500x500 for profile)
- Test your changes locally with `npm run dev` before pushing
- The fallback image shows when the main image fails to load
