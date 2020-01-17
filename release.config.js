module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/alialaa/simple-cra",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/github", {
            "assets": [
              {"path": "build", "label": "Build"},
              {"path": "coverage", "label": "Test Coverage"}
            ]
        }],
    ]
};
