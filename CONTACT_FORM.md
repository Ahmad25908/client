# Contact Form Implementation

This project includes a fully functional contact form that sends emails using the Resend API. Below are the details of the implementation:

## Files Created

### 1. Contact Page (`src/app/contact/page.tsx`)
- Professional contact form UI with Tailwind CSS
- Form validation for required fields
- Loading state during submission
- Success/error messaging
- Responsive design for all devices

### 2. API Route (`src/app/api/contact/route.ts`)
- Server-side email sending using Resend API
- Input validation for required fields and email format
- Secure handling of API keys via environment variables
- Proper error handling and response formatting

### 3. Environment Variables Example (`.env.example`)
- `RESEND_API_KEY`: Your Resend API key
- `CONTACT_EMAIL`: The email address to receive form submissions
- `EMAIL_FROM`: The sender email address (optional, defaults to onboarding@resend.dev)

## Setup Instructions

1. Install dependencies:
```bash
npm install resend
```

2. Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

3. Add your Resend API key and contact email to `.env.local`:
```bash
RESEND_API_KEY=your_actual_resend_api_key
CONTACT_EMAIL=your_actual_email@example.com
```

4. Sign up for a Resend account at [https://resend.com](https://resend.com) to get your API key.

## Security Features

- API key stored in environment variables and never exposed to the frontend
- Server-side validation of all inputs
- Proper error handling without exposing sensitive information
- Reply-to header set to user's email for easy response

## Usage

The contact form is accessible at `/contact` and follows these steps:
1. User fills out the form with their name, email, and message
2. Frontend validates required fields
3. Form data is sent to the API route
4. API validates data and sends email via Resend
5. User receives success or error feedback

## Deployment Notes

For Vercel deployment:
- Add environment variables in the Vercel dashboard
- The API route will work out of the box with serverless functions
- No database required - all processing happens server-side

## Customization

- Modify the email template in `src/app/api/contact/route.ts` to change the email appearance
- Adjust styling in `src/app/contact/page.tsx` to match your brand colors
- Add additional fields to both the form and API handler if needed