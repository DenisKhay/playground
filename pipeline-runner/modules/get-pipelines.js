const axios = require('axios');
module.exports = (params) => {
    const {workspace, password, repository, username} = params;
    const url = `https://api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pipelines/?pagelen=10&sort=-created_on`;
    return axios.get(url, {auth: {username, password}})
};
