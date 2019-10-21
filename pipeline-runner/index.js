#!/usr/bin/env node
const env = require('./env');
const axios = require('axios');

const {workspace, password, repository, customPipelineName, username, branch} = env;
const url = `https://api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pipelines/`;
const payload = {
    target: {
        ref_type: 'branch',
        type: 'pipeline_ref_target',
        ref_name: branch,
        selector: {
            type: 'custom',
            pattern: customPipelineName
        }
    }
};

axios.post(url, payload, {auth: {username, password}})
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });