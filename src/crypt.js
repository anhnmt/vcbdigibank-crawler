var crypto = require("crypto");
var CryptoJS = require("crypto-js");

var publicKey =
    "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEAiEPragkOAc+PM2TqG1Xqh/+mqWP0dJge+VfJ/H75nwCchOMNG297SgRKx7M3\nrvwxUfTw602rZ1LiwLV+h16/tGj5BxuQCkfAj+QFp3P4A+Kar8spo1mW2i7MCshhtzF72SHJ\n9K1yH67RmrCZdHpYdezs5yb1FtccUkUUhpbTX9PBaKMhxmecJE1jORRiSCdRl+c54NHVAbxf\nGrDDMRFw3PFv9cCmLSvP8/7mI3ClmDz+e9PsxFDItaynaMogrJDOm3D4i3CF2YgVmGBNBWfy\na/0t88eCWfM34JJ87ufQuzi6Fs9n3XOeWXN8DNc02YD9/Ua7lKFxaFF9iQfZkB3ckwIDAQAB\n-----END RSA PUBLIC KEY-----";

var publicKeyData = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAjjmjr3nS9gaKJLNwptvZekmbrPR6icrxiFjhYNYQQ0DMWJzxslSX0uBIDDlI
6k23BbmhmxBoyCKZTXxzm8RMyMqy7Og3sCvmg7QGC7vHgrn7BG30kL3tqWS6uDa2VOEWD+k+
iw1uipFRpuFX52FsO+Y9y2DzYsA0qQuSgr3Dp5h7VoQByYygR4MVtv6pU2MnDf5lPJY+3pEC
FAwgluv8iszdqg9mtaszQj7anB0ywmpf0bRnrxuwb0HCIY8kXnpxiekSVnPXUxFQlkCb5maj
ADuZZS3hh+6Q9OaDY8lWyHU8/kOjfPX6sYVNuGwJ+Vq6XoTCho+as847DJZX1a3YlwIDAQAB
-----END RSA PUBLIC KEY-----
`;

var privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAjjmjr3nS9gaKJLNwptvZekmbrPR6icrxiFjhYNYQQ0DMWJzxslSX0uBI
DDlI6k23BbmhmxBoyCKZTXxzm8RMyMqy7Og3sCvmg7QGC7vHgrn7BG30kL3tqWS6uDa2VOEW
D+k+iw1uipFRpuFX52FsO+Y9y2DzYsA0qQuSgr3Dp5h7VoQByYygR4MVtv6pU2MnDf5lPJY+
3pECFAwgluv8iszdqg9mtaszQj7anB0ywmpf0bRnrxuwb0HCIY8kXnpxiekSVnPXUxFQlkCb
5majADuZZS3hh+6Q9OaDY8lWyHU8/kOjfPX6sYVNuGwJ+Vq6XoTCho+as847DJZX1a3YlwID
AQABAoIBAGq4s6vj1TpJs/VQNLLwe6N4gnloxl6JS26NiykX2AIvKGdB9VdkhLx3EXkiryUq
BbElFy/9QzMSS0jKnxF+XkO5XkPJCKiIeKPRPUwmrtHYbpRnUcIe0qxuanH6lBzi/aQY2JaN
EKqn2sZHh6eXAhl8blgjOt6Z7an/hgPXE265KP3pMic6RvgTWs/9lPMkL8JmkZhQhuP/6UuB
2Dy8EDXtNHjZF+3MGyuqkyuvgSt1r7AHB4uzc8KAoEo592sh1IgEK+9Sd5x/PgzeSz2OquJL
gFqmxXud3W4/voMw/6Gc7lcNN1Z/T8+dJAFjM0UBK0M7ZRv174XMpx8dyf12ITECgYEA4u7G
wogGuqQ8dZ9f999JFOMHr3OXQTfhREcnybY7yWzzyYJXVZS78PHaWfEwpblx1TOx4oFMfMzg
8DEH5eT6nWeCtn/TtBX6vRZoYZyX/CriZpYsRjh+bxbppuzXMsHN8YfcSAq43jZuXo96nbtJ
jL/vutt+yir5LVhv5vfdOKkCgYEAoHFDwaf6pixnAVvT8+57SaRKeYz+pBb6t6UiqcUfY2Dp
IDNpykj4qncidtExVZrnELJEQoWDyNcCySCJ++yzKeYamxm63S5CCRxiDYfVXV72xBfindVC
PnIdVzhhmxUArThdXDqE1WXHG2UlT0bmHDRQqB2zKWryC14YboxzDz8CgYB7MdkhHitZA3P2
/tBghgzsk9tGOmAwfZ+DK4XEEXQfg1BNYr76rMXipck97pvUO/o6HdhB+KOHVMoAWv3IpigP
b3QckwRgzVXTdOixpQs1UCqcOoZKkLzCnhO2FPk2itO8fV7ulTOLHs2H9ChCnLvu9vuz2xjX
s8CWB16oaoLkEQKBgD/NixJiCK04jyXdLKaeueyJJwy7YzBB6yZIx0YYG+lbSpoBmBpXdnvj
sJLrkeDnHuhm2/pQOh4OUw9En1rNwFnzJbV0P/lhQeV5ogybbeAZuaw1i2sUuak3nC9pPnd7
nK9F8OqSYuyx8sIUMQgbu7qPm1ufo/Xej66xlqmvtLnlAoGAG6nJYWcIH+g1E1kazrqtBo2i
AOLADbMqSOD04os4s2TqANW48QfrMhKU0QIBOyk8yrh9nOjkkEX3QkvuLd7pTKIspJf0x6mx
r7k3Ys7i3uH2vQ+jsLk4Zy9pphvlCQtqDntqSpKjr+fFeFdzsSte18ht34ViwKhUdtRbdwcD
SLA=
-----END RSA PRIVATE KEY-----
`;

async function encryptAES(l, n) {
    return new Promise(function (u, t) {
        var r = (
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15)
            ).substring(0, 32),
            c = Buffer.from(r, "utf8"),
            o = CryptoJS.enc.Base64.parse(r),
            s = CryptoJS.AES.encrypt(l, o, {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            });
        u(
            crypto
                .publicEncrypt(
                    {
                        key: n,
                        padding: crypto.constants.RSA_PKCS1_PADDING,
                    },
                    c
                )
                .toString("base64") +
                "@@@@@@" +
                s.toString()
        );
    });
}

async function decryptAES(l, n) {
    return new Promise((u, t) => {
        try {
            let t = Buffer.from(l.substring(0, 344), "base64");
            Promise.resolve(!0)
                .then(() =>
                    crypto
                        .privateDecrypt(
                            {
                                key: n,
                                padding: crypto.constants.RSA_PKCS1_PADDING,
                            },
                            t
                        )
                        .toString()
                )
                .then((n) => {
                    let t = CryptoJS.enc.Base64.parse(n);
                    var e = CryptoJS.AES.decrypt(l.substring(344), t, {
                        mode: CryptoJS.mode.ECB,
                        padding: CryptoJS.pad.Pkcs7,
                    });
                    u(e.toString(CryptoJS.enc.Utf8));
                });
        } catch (r) {
            t(r);
        }
    });
}

module.exports = {
    privateKey,
    publicKey,
    publicKeyData,
    encryptAES,
    decryptAES,
};
