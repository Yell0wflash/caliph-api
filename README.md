# caliph-api


# require
```js
const caliph_api = require('caliph-api')
```



# Binary

## Encrypt
```js
var result = caliph_api.binary.enc('hello world')
console.log(result)
```
### Result 
```1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100```


## Decrypt 
```js
var result = caliph_api.binary.dec('1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100')
console.log(result)
```

### result 
```hello world```
