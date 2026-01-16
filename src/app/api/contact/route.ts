import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing API key' },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error('CONTACT_EMAIL is not set');
      return NextResponse.json(
        { error: 'Server configuration error: Missing contact email' },
        { status: 500 }
      );
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Email HTML template
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e40af, #7c3aed); padding: 20px; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">📬 New Contact Form Message</h2>
        </div>
        <div style="background: #f8fafc; padding: 20px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151; width: 100px;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1f2937;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #374151; vertical-align: top;">Message:</td>
              <td style="padding: 12px 0; color: #1f2937; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #e0e7ff; border-radius: 8px;">
            <p style="margin: 0; color: #4338ca; font-size: 14px;">
              This message was sent from your website contact form.
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: contactEmail,
      reply_to: email,
      subject: `New Contact Message from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email: ' + error.message },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}