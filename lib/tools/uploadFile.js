let FormData = require('form-data');
let type = require("file-type");
let fetch = require('node-fetch');
let cryp = require("crypto");

module.exports = async function uploadFile(buffer) {
let { ext } = await type.fromBuffer(buffer);
bodyForm = new FormData();
let randomfile = cryp.randomBytes(5).toString('hex');
bodyForm.append('file', buffer, randomfile+'.'+ext);
let response = await fetch('https://uploader.caliph.my.id/upload', { method: 'post', body: bodyForm, headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "content-type": `multipart/form-data; boundary=${bodyForm._boundary}`
            } });

return { status: response.status, creator: 'Caliph', result:(await response.json()).result;
} 
