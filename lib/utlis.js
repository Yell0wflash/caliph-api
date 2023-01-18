function getEncodedSnapApp(data) {
    return data.split('decodeURIComponent(escape(r))}(')[1]
        .split('))</script>')[0]
        .split(',')
        .map(v => v.replace(/"/g, '').trim());
}
exports.getEncodedSnapApp = getEncodedSnapApp;
function decodeSnapApp(...args) {
    // From reponse snap app
    function _0xe78c(d, e, f) {
        const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
        const h = g.slice(0, e);
        const i = g.slice(0, f);
        // @ts-ignore
        // eslint-disable-next-line array-callback-return
        let j = d.split('').reverse().reduce(function (a, b, c) {
            // eslint-disable-next-line no-return-assign
            if (h.indexOf(b) !== -1)
                return a += h.indexOf(b) * (Math.pow(e, c));
        }, 0);
        let k = '';
        while (j > 0) {
            k = i[j % f] + k;
            j = (j - (j % f)) / f;
        }
        return k || '0';
    }
    function _0xc60e(h, u, n, t, e, r) {
        r = '';
        for (let i = 0, len = h.length; i < len; i++) {
            let s = '';
            while (h[i] !== n[e]) {
                s += h[i];
                i++;
            }
            for (let j = 0; j < n.length; j++) {
                s = s.replace(new RegExp(n[j], 'g'), j.toString());
            }
            // @ts-ignore
            r += String.fromCharCode((_0xe78c(s, e, 10) - t));
        }
        return decodeURIComponent(encodeURIComponent(r));
    }
    // @ts-ignore
    return _0xc60e(...args);
}
exports.decodeSnapApp = decodeSnapApp;
function getDecodedSnapSave(data) {
    return data.split('"download-section").innerHTML = "')[1]
        .split('"; parent.document.getElementById("inputData").remove();')[0]
        .replace(/\\(\\)?/g, '');
}
exports.getDecodedSnapSave = getDecodedSnapSave;
function decryptSnapSave(data) {
    return getDecodedSnapSave(decodeSnapApp(...getEncodedSnapApp(data)));
}
exports.decryptSnapSave = decryptSnapSave;
function stringifyCookies(cookies) {
    return cookies.map(cookie => {
        const [name, _value] = cookie.split('=');
        const [value] = _value.split(';');
        return `${name}=${value}`;
    }).join('; ');
}
exports.stringifyCookies = stringifyCookies;
function parseCookies(cookieString) {
    const cookies = {};
    cookieString.split(';').forEach(cookie => {
        const [key, value] = cookie.split('=');
        cookies[key.trim()] = value.trim();
    });
    return cookies;
}
exports.parseCookies = parseCookies;
/**
 * @returns is a kilobyte
 */
function parseFileSize(size) {
  if (size < 1024) {
    return size + ' bytes';
  } else if (size >= 1024 && size < 1048576) {
    return (size / 1024).toFixed(2) + ' KB';
  } else if (size >= 1048576 && size < 1073741824) {
    return (size / 1048576).toFixed(2) + ' MB';
  } else if (size >= 1073741824 && size < 1099511627776) {
    return (size / 1073741824).toFixed(2) + ' GB';
  } else {
    return (size / 1099511627776).toFixed(2) + ' TB';
  }
}
exports.parseFileSize = parseFileSize;
