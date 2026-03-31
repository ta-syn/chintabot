---
description: How to deploy ChintaBot to Vercel
---

# Deploying ChintaBot

Follow these steps to deploy your polished AI game to the web:

1. **Push to GitHub**:
   - Ensure your code is committed: `git add . && git commit -m "UI Polish and PWA implementation"`
   - Create a new repository on GitHub and push your code.

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **"Add New"** -> **"Project"**.
   - Import your `chintabot` repository.

3. **Set Environment Variables**:
   - In the Vercel dashboard, go to your project **Settings** -> **Environment Variables**.
   - Add `GEMINI_API_KEY` with your Google Gemini API key.

4. **Deploy**:
   - Click **"Deploy"**. Vercel will automatically detect Next.js and build the project.

5. **Install as App**:
   - Once deployed, open the URL on your phone (Chrome on Android or Safari on iOS).
   - Use "Add to Home Screen" to install ChintaBot as a PWA with the new icon!
