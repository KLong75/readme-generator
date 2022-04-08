// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if else condition

  if(license == "MIT") {
    return "This is the MIT license badge"
  } else if (license == "Mozilla") {
    return "This is the Mozilla license badge"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "This is the license link"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}
    
## Installation



## License
${renderLicenseBadge(data.projectLicense)}


`;
};

module.exports = generateMarkdown;
