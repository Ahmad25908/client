import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Check if environment variables are loaded
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  
  console.log('RESEND_API_KEY exists:', !!apiKey);
  console.log('CONTACT_EMAIL exists:', !!contactEmail);
  console.log('RESEND_API_KEY length:', apiKey ? apiKey.length : 0);
  
  return NextResponse.json({
    resendApiKeyExists: !!apiKey,
    contactEmailExists: !!contactEmail,
    resendApiKeyLength: apiKey ? apiKey.length : 0,
    resendApiKeyPrefix: apiKey ? apiKey.substring(0, 10) + '...' : 'N/A'
  });
}