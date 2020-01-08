const pipelineGet = require('./modules/get-pipelines');


pipelineGet({workspace: 'adihealth', username: 'DenisKhaidarshin', password: 'rduERwAm3g2THnBtee3a', repository: 'msk'})
    .then((response) => {
        console.log('response', response);
    })
    .catch((e) => {
        console.error(e);
    });
