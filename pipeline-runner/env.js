module.exports = {
    workspace: process.env.BB_WORKSPACE,
    repository: process.env.BB_REPOSITORY,
    customPipelineName: process.env.BB_CUSTOM_PIPELINE_NAME,
    username: process.env.BB_USERNAME,
    password: process.env.BB_APP_PASSWORD,
    branch: process.env.BB_GIT_BRANCH,
};