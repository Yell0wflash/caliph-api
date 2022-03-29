module.exports = (function (html) {
response = `
<noscript>Please Enable Javascript To View This Page</noscript>
<script>
// Encrypt HTML By https://www.npmjs.com/package/caliph-api
document.write(unescape(${JSON.stringify(encodeURIComponent(html))}))
</script>
`.trim()
return response
}).bind()