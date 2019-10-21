#!/usr/bin/env node
const env = require('./env');
const axios = require('axios');

// https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/pipelines/%7Bpipeline_uuid%7D

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