const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const octokit = new github.GitHub(token);
    const context = JSON.stringify(github.context)
  
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