// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache-2.0") {
    return `[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "MPL-2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licences/MPL-2.0)`
  }
  else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licences/MIT)`
  }
  else {
    return "";
  }

};

//A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache-2.0") {
    return `[Apace-2.0 Link](https://opensource.org.licenses/Apache-2.0)`
  }
  else if (license === "MPL-2.0") {
    return `[MPL-2.0 Link](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === "MIT") {
    return `[MIT Link](https://opensource.org/licenses/MIT)`
  }
  else {
    return "";
  }
};

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = "No License") {
    return "";
  }
  else {
    return `# Licenses
    ${license}`
  }
};

// A function that generates the markdown for the README file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Credits](#credits)
  * [License](#licenses)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation_instructions}
  
  ## Usage
  ${data.usage_instructions}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.contributors}

  ## Licenses
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Questions
  - Github Page: ${data.github_user}
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
