const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const octokit = new github.GitHub(token);
  
    const response = await octokit.issues.create({
      // owner: github.context.repo.owner,
      // repo: github.context.repo.repo,
      ...github.context.repo,
      // title: 'New issue!',
      body: 'Hello Universe!',
      assignees: ["alialaa"]
    });

    console.log(response.data);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();