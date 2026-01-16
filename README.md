# Deveonex Website

A professional business website built with Next.js, featuring a responsive design and contact form integration with Resend for email delivery.

## Features

- Modern, responsive design with dark theme
- Professional business layout with multiple sections (About, Services, Team, Portfolio, Blog, Contact)
- Fully functional contact form with email integration via Resend
- Optimized for performance and SEO
- Built with Next.js App Router

## Tech Stack

- Next.js 16.1.2 (App Router)
- React 19.2.3
- TypeScript
- Tailwind CSS
- Resend (for email delivery)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Add your Resend API key and contact email to `.env.local`:
```bash
RESEND_API_KEY=your_actual_resend_api_key
CONTACT_EMAIL=your_actual_email@example.com
EMAIL_FROM=your_sender_email@example.com  # Optional, defaults to onboarding@resend.dev
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form

The contact form is available in two places:
- Homepage: Scroll down to the Contact section
- Dedicated page: `/contact`

Both forms send emails using the Resend API with the following features:
- Server-side validation
- Secure handling of API keys via environment variables
- Reply-to functionality
- Responsive design

### Troubleshooting

If you're experiencing issues with the contact form:

1. **Verify your Resend API key**:
   - Go to your [Resend dashboard](https://resend.com/dashboard)
   - Make sure your API key is active and correct
   - Check that you're using the secret API key (starts with `re_`)

2. **Domain verification**:
   - If using a custom domain in the `EMAIL_FROM` field, make sure it's verified in Resend
   - For testing, use the default `onboarding@resend.dev` domain

3. **Test environment variables**:
   - Visit `/api/env-test` to check if your environment variables are loaded properly

4. **Check server logs**:
   - Look at the server console for detailed error messages
   - Errors will provide specific information about what's failing

## Building for Production

To build the application for production:

```bash
npm run build
```

Then run the production server:

```bash
npm start
```

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

When deploying to Vercel, make sure to set the environment variables in your project settings:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `EMAIL_FROM` (optional)

### Deploy on GitHub Pages

For GitHub Pages deployment, you'll need to make some adjustments:

1. Install the GitHub Pages plugin:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  }
}
```

3. Configure your Next.js export settings in `next.config.ts`:
```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

Note: For static export, the contact form won't work as it requires server-side processing. For a full-featured deployment with contact form, use Vercel, Netlify, or another platform that supports serverless functions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
