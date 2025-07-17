const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

// Repository name
const repoName = 'Portfolio';

// Function to ensure .nojekyll file exists
async function ensureNoJekyll() {
  try {
    console.log('Creating .nojekyll file...');

    // Create .nojekyll file
    await fs.writeFile(path.join(__dirname, '../out/.nojekyll'), '');
    console.log('Created .nojekyll file');

  } catch (err) {
    console.error('Error creating .nojekyll file:', err);
  }
}

// Main function
async function main() {
  try {
    // Build the Next.js app with GitHub Pages configuration
    console.log('Building Next.js app for GitHub Pages...');
    execSync('npm run build', { stdio: 'inherit' });

    // Deploy to GitHub Pages
    console.log('Deploying to GitHub Pages...');
    execSync('npx gh-pages -d out', { stdio: 'inherit' });

    console.log('Deployment completed successfully!');
  } catch (err) {
    console.error('Error during deployment:', err);
    process.exit(1);
  }
}

// Run the script
ensureNoJekyll()
  .then(() => main())
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
