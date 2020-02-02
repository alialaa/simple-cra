const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const myToken = core.getInput('myToken');
    const octokit = new github.GitHub(myToken);
    const context = JSON.stringify(github.context, null, '\t')
  
    console.log(context);

    // const { data: pullRequest } = await octokit.issues.create({
    //   owner: 'octokit',
    //   repo: 'rest.js',
    //   pull_number: 123,
    //   mediaType: {
    //     format: 'diff'
    //   }
    // });

    // console.log(pullRequest);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();