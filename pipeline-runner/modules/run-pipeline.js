#!/usr/bin/env node
const axios = require('axios');

// https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/pipelines/%7Bpipeline_uuid%7D

/**
 *
 * @param {{
 *     workspace: string,
 *     password: string,
 *     repository: string,
 *     customPipelineName: string,
 *     userName: string,
 *     branch: string,
 *     variables?: {key: string, value: string, secured?: string}
 * }} env
 */
module.exports = (env) => {
    const {workspace, password, repository, customPipelineName, username, branch, variables = {}} = env;
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
        },
        variables,
    };

    return axios.post(url, payload, {auth: {username, password}});
};
