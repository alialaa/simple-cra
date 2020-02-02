const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('token');
    const title = core.getInput('title');
    const body = core.getInput('body');
    const assignees = core.getInput('assignees');
    const octokit = new github.GitHub(token);

    console.log(title, body, assignees.split("\n"))
    const response = await octokit.issues.create({
      // owner: github.context.repo.owner,
      // repo: github.context.repo.repo,
      ...github.context.repo,
      title,
      body,
      // assignees: assignees ? assignees.split("\n") : undefined
    });
    core.setOutput('issue', response.data)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();