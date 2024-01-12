// packages/cli/scripts/validate-docs-links.js

// Import necessary modules and functions
const fs = require('fs');
const path = require('path');

// Define the function to update the documentation URL for the "SendInBlue" credentials
function updateSendInBlueDocsURL() {
  const filePath = path.join(__dirname, '../../docs/credentials.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Update the documentation URL for the "SendInBlue" credentials
  const updatedContent = fileContent.replace('https://old-docs.example.com/sendinblue', 'https://new-docs.example.com/sendinblue');

  // Write the updated content back to the file
  fs.writeFileSync(filePath, updatedContent, 'utf8');
}

// Call the function to update the documentation URL for the "SendInBlue" credentials
updateSendInBlueDocsURL();

module.exports = {
  updateSendInBlueDocsURL,
};
