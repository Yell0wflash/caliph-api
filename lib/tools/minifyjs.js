const { minify } = require("uglify-js");


module.exports = (function(codes) {
if (!codes) throw `Kode Tidak Boleh Kosong`;
let { code } = minify(codes);
if (!code) return { status: 400, message: 'Kode tersebut bukan javascript' };
return { status: 200, result: { code } }
}).bind()