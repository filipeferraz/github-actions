module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/filipeferraz/github-actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
