// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-informational)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
      return "";
    } else {
    return `https://choosealicense.com/licenses/${license.toLowerCase()}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `## License
    This application is licensed under the terms of ${license} open source license. 
    Please refer to [${license} License] (${renderLicenseLink(license)}) for the full terms.`;
  }
 };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}



  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, email the developer at <${data.email}> or visit their [GitHub profile](http://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
