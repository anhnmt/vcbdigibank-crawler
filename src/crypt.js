var crypto = require("crypto");
var CryptoJS = require("crypto-js");

var privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAsTgZA2nD7Av7AulCQZUVKLdm5Hz/CvaNTrSG8+qiNL5S0ydURd3+TMKe
od5NF/ZRlKyvrklZv/fVWLWLQd7/jCO2503Hnhxml0+y/mmB11Z0iABevv4Y6ZYny6X1RJc9
5dUj0sbnp9RNoMUkI8YwZBzr6rCORLAwAPuALV+y1j6V0/daSjZy4JgPWBLDqAnHZxTGw7xg
3wLLaRjsouv4nNXxJoP/MaFPZZaBZZi6R9MFihk3pG3RccxoIC9QZZGzgRNlsWNj+BueJeHQ
rcaHkHeQ7PJWXVMVaZ1bnDG87CHAfS/IyMoY6jFSNZ9UgIMEA4Z5wtiAQzVwFd2v875cYwID
AQABAoIBAQCYgk1MWaWoqnq+e5xwMer+mi5q7YLSnXDnzYXhvQcQWsWOP2dPpQZmaon3hQZV
W73DM4UQeMFK6e3pJHqOGmlS4Z1SmuXxlEFZb9X7CTMa7KTmMWNX+/XWd0kSAWT8PSegdXcZ
ueC71oFjnKRIQRN95EHGO2CDjhgRkF4zLgsKQW016TOyjv7AYQUzuNuBu9OUNJKBJxT8aDKM
AZG5ZX1f/JMHGDkt/oYNR/vX1SnanfPzp5wRBPVOR9buiHBGiuIODj5BfUlNFXknR6gyFhsN
VczfrZhayANhWDUFO66Iwvv+Qo38TOm9RMvLope5YTydySMwLwsNjytXQoqGbvNhAoGBANW2
4jtLGpet4uZPri53erFrGFw0TYsaqoAqJIUppivYHUBAw8/B7sNxFlFWmLS1I0qWaL2SLLEc
EEidZta0CbLO7OwDc+Kw/NdTlWaq44xI9SLjbsNpdCtC2bDMgm9XQotUghicWGlyIkzkJO8C
Sg3DGXZ3mckcXm4CYMQuU33RAoGBANRIpZROR+3rjKacwwR3nxI1KN+Wmh+pPb2P2Ywx8chL
l3JYhmNKNLfr6/RFQ80EV27xL48WxnS7zf4VVb8Kr/LR98s+VvJ8SsgyrFrJ0LmHVZLY1IKm
qxUDLNq5UB6Tx7k4+KeWGKonI09pkeAigYFxU5gWmqh6iPx2v9CCb7/zAoGBANMijLqbZjg3
mBSE38YUT+h7r2NYYMtumsdn2xCbpwllxvA1i73zEFmRncTZ0p+k3KrRkcTHZtPKr+OtbW3s
DDDU8YfxmUl6JTDt6Im3hnqPkW7YVhNEWXpr3vkl8i7hfGJ+KND7lPUHxw9DzaE7F8Ik30EE
w6/GERyJyOPICMAhAoGAXEiAgqpNJqbBbCS1uplt83JcpGZJ9f2Ss3d3cTS9EP+bhL/rG/rE
VDghSP1bbiK3B6mdrSyPdWu3Lv+DWRuCRaL1f8tH7P4PXFx7BLS7IgwtLTtJlspxkR7iPutU
YxaHOoQDxIbBjiaZeQpBuhgGCImFd5ZMAXXTWz0cQb6SafUCgYAg3fkscqXXVuBwxd4nJVHm
ADBfLVTaKLha0j1O5ciS+5XA362+XHMhmliqEtBm73acHae+9TF5lUtD2KqTuJ0/lu82cySQ
/AYOO4UlaW0ukESGG92gxj2wNsoYO3yJ/zYAExpvzTF/PmeQUtAjHiSKkBjV2DDL1bFamNt9
7DH3dw==
-----END RSA PRIVATE KEY-----
`;

var publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEAiEPragkOAc+PM2TqG1Xqh/+mqWP0dJge+VfJ/H75nwCchOMNG297SgRKx7M3
rvwxUfTw602rZ1LiwLV+h16/tGj5BxuQCkfAj+QFp3P4A+Kar8spo1mW2i7MCshhtzF72SHJ
9K1yH67RmrCZdHpYdezs5yb1FtccUkUUhpbTX9PBaKMhxmecJE1jORRiSCdRl+c54NHVAbxf
GrDDMRFw3PFv9cCmLSvP8/7mI3ClmDz+e9PsxFDItaynaMogrJDOm3D4i3CF2YgVmGBNBWfy
a/0t88eCWfM34JJ87ufQuzi6Fs9n3XOeWXN8DNc02YD9/Ua7lKFxaFF9iQfZkB3ckwIDAQAB
-----END RSA PUBLIC KEY-----`;

function encryptAES(l, n) {
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

function decryptAES(l, n) {
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

function encrypt(l, n, u) {
    return new Promise((t, r) => {
        let i = n.slice(0, 245),
            s = crypto.publicEncrypt(
                {
                    key: u,
                    padding: crypto.constants.RSA_PKCS1_PADDING,
                },
                i
            ),
            c = n.slice(245);
        t(
            c.length > 0
                ? encrypt(Buffer.concat([l, s]), c, u)
                : Buffer.concat([l, s])
        );
    });
}

function decrypt(l, n, u) {
    return new Promise((t, e) => {
        let r = n.slice(0, 256),
            i = crypto
                .privateDecrypt(
                    {
                        key: u,
                        padding: crypto.constants.RSA_PKCS1_PADDING,
                    },
                    r
                )
                .toString(),
            s = n.slice(256);
        t(s.length > 0 ? decrypt(l + i, s, u) : l + i);
    });
}

function decrypt200(l, n, u) {
    let t = 0;
    return new Promise((r, i) => {
        for (n.length == t && r(l); n.length > t; ) {
            let i = crypto.privateDecrypt(
                {
                    key: u,
                    padding: crypto.constants.RSA_PKCS1_PADDING,
                },
                n[t].data
            );
            (l = Buffer.concat([l, i])), t++, n.length == t && r(l.toString());
        }
    });
}

module.exports = {
    privateKey,
    publicKey,
    encryptAES,
    decryptAES,
    encrypt,
    decrypt,
    decrypt200,
};
