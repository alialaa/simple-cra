const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  // throw(new Error('No'))
  core.setSecret(nameToGreet);

  core.debug('Getting Input');
  core.warning('nameToGreet was not set');
  core.error(`Error`);
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github, null, '\t')
  
  core.startGroup('Do some function')
  console.log(`The event payload: ${payload}`);
  console.log(`Hello`);
  core.endGroup()

  core.exportVariable('HELLO', time);
} catch (error) {
  core.setFailed(error.message);
}