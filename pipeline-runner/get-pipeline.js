const axios = require('axios');
module.exports = (params) => {
    const {workspace, password, repository, username, pipelineUuid} = params;
    const url = `https://api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pipelines/${pipelineUuid}`;
    return axios.get(url, {auth: {username, password}})
};