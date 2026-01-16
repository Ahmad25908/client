// Contact Form Test Utility
// This utility helps test the contact form functionality

// Sample test data
const testData = {
  name: "Test User",
  email: "test@example.com",
  message: "This is a test message from the contact form."
};

// Function to simulate form submission
async function testFormSubmission() {
  console.log("Testing contact form submission...");
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log("✅ Form submission successful!");
      console.log("Response:", result);
    } else {
      console.log("❌ Form submission failed!");
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.log("❌ Network error occurred:");
    console.log(error);
  }
}

// Run the test
testFormSubmission();

export { testFormSubmission, testData };