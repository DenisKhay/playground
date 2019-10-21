#!/usr/bin/env node
const axios = require('axios');

const workspace = process.env.BB_WORKSPACE;
const repository = process.env.BB_REPOSITORY;
const customPipelineName = process.env.BB_CUSTOM_PIPELINE_NAME;

const username = process.env.BB_USERNAME;
const password = process.env.BB_APP_PASSWORD;

const url = `https://api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pipelines/`;

const payload = {
    target: {
        ref_type: 'branch',
        type: 'pipeline_ref_target',
        ref_name: 'master',
        selector: {
            type: 'custom',
            pattern: customPipelineName
        }
    }
};

axios.post(url, payload, { auth: { username, password } });