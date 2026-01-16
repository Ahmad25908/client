// Test script for contact API
// This is just for demonstration/testing purposes

console.log('Testing contact form functionality...');
console.log('1. Contact page is available at: http://localhost:3000/contact');
console.log('2. Form should have fields: Name, Email, Message (all required)');
console.log('3. On submit, data goes to: POST /api/contact');
console.log('4. API should validate inputs and send email via Resend');
console.log('5. Response should be handled with success/error messages');

console.log('\nTo test the functionality:');
console.log('- Fill out the form on the contact page');
console.log('- Submit with valid data');
console.log('- Check browser console for any errors');
console.log('- Check network tab to see API request/response');
console.log('- Verify email is received at configured CONTACT_EMAIL address');

console.log('\nRequired environment variables:');
console.log('- RESEND_API_KEY: Your Resend API key');
console.log('- CONTACT_EMAIL: Where form submissions should be sent');