const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    var ansBad = "\n[![License: "+license+"](https://img.shields.io/badge/License-"+license+"-blue.svg)]";
    return ansBad;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    var ansLink = "(https://opensource.org/licenses/"+license+")";
    return ansLink;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    var ans = "";
    for(var i = 0; i < license.length; i++){
      ans+= "\n### "+license[i]+" License ("+license[i]+")";
      ans+=renderLicenseBadge(license[i]);
      ans+=renderLicenseLink(license[i]);
    }
    return ans;
  }else{
    return "";
  }
}

function renderLicenseTitle(license){
  if(license){
    var ans = "";
    for(var i = 0; i < license.length; i++){
      ans+=renderLicenseBadge(license[i]);
      ans+=renderLicenseLink(license[i]);
    }
    return ans;
  }else{
    return "";
  }
}

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./readmefiles/README.md', fileContent, err => {
          // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
          if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
          }

          // if everything went well, resolve the Promise and send the successful data to the `.then()` method
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let mark = `# ${data.title}
  ${renderLicenseTitle(data.license)}
  ### ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}

  ### License
  ${renderLicenseSection(data.license)}

  ### Contributing
  ${data.guidelines}

  ### Tests
  ${data.testInstructions}

  ### Questions
  gitHub Link: https://github.com/${data.github}

  Email: ${data.email}
`;
writeFile(mark);
}

module.exports = {generateMarkdown};