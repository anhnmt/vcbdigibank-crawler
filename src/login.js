const axios = require("axios");
const userAgent = require("user-agents");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
// Custom
const crypt = require("./crypt");
const captcha = require("./captcha");
const socket = require("./socket");

const user_agent = new userAgent().toString();

axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

function checkLogin(username, password) {
    return new Promise(async (resolve, reject) => {
        const captcha_id = await captcha.generateKey();
        console.log(`- Lấy captcha_id : ${captcha_id}`);
        await captcha.verifyCaptcha(captcha_id);

        const socket_id = await socket.getSocket();
        console.log(`\n- Lấy socket_id : ${socket_id}`);

        var data_login = JSON.stringify({
            user_name: `${username}`,
            password: `${password}`,
            socket_id: `${socket_id}`,
            captcha_id: `${captcha_id}`,
            clientKey: crypt.publicKeyData,
            lang: "vi",
        });
        // console.log(`- Gửi data_login: ${data_login}`);

        var data = JSON.stringify({
            data: await crypt.encryptAES(data_login, crypt.publicKey),
        });
        // console.log(`- Gửi data_login_encrypt: ${data}`);

        var config = {
            method: "post",
            url: "https://vcbdigibank.vietcombank.com.vn/w1/auth",
            headers: {
                "User-Agent": user_agent,
                "Content-Type": "application/json",
            },
            data: data,
            jar: cookieJar,
            withCredentials: true,
        };

        await Promise.all([
            // socket.verifySocket(socket_id),
            axios(config)
                .then(async (response) => {
                    var res = response.data;
                    // console.log(JSON.stringify(res));

                    // console.log(`\n- Nội dung login: ${JSON.stringify(res)}`);

                    console.log(`\n- ${res.des}`);

                    if (res.code !== "00") {
                        console.log(`- Đang thử lại ...`);
                        await checkLogin(username, password);
                    } else {
                        resolve(crypt.decryptAES(res.data, crypt.privateKey));
                    }
                })
                .catch((error) => {
                    console.log(error);
                }),
        ]);
    });
}

function getTransaction(data_login) {
    var data_user = JSON.parse(`${data_login}`);

    return new Promise(async (resolve, reject) => {
        // console.log(data_user.token);
        var data_transaction = JSON.stringify({
            user_name: `${data_user.user_info.user_name}`,
            client_key: crypt.publicKeyData,
            data: {
                processCode: "laysaoketaikhoan",
                cif: `${data_user.user_info.cif}`,
                cif: `${data_user.user_info.cif}`,
                sessionId: `${data_user.user_info.session_id}`,
                accountNo: `${data_user.user_info.defaultAccount}`,
                accountType: "D",
                fromDate: "03/09/2020",
                toDate: "10/09/2020",
                pageIndex: 0,
                lengthInPage: 999999,
                stmtDate: "",
                stmtType: "",
                lang: "vi",
            },
        });
        // console.log(`\n- Gửi data_transaction: ${data_transaction}`);

        var data = JSON.stringify({
            data: await crypt.encryptAES(data_transaction, crypt.publicKey),
        });
        // console.log(`- Gửi data_transaction_encrypt: ${data}`);

        var config = {
            method: "post",
            url: "https://vcbdigibank.vietcombank.com.vn/w1/process-ib",
            headers: {
                "User-Agent": user_agent,
                "Content-Type": "application/json",
                Authorization: `Bearer ${data_user.token}`,
            },
            data: data,
            jar: cookieJar,
            withCredentials: true,
        };

        axios(config)
            .then(async (response) => {
                var res = response.data;
                // console.log(JSON.stringify(res));

                console.log(`\n- ${res.des}`);

                if (res.code !== "00") {
                    console.log(`- Đang thử lại ...`);
                    await getTransaction(data_login);
                } else {
                    resolve(crypt.decryptAES(res.data, crypt.privateKey));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });
}

function checkTransaction(data_transaction) {
    var transactions = JSON.parse(`${data_transaction}`);

    return new Promise(async (resolve, reject) => {
        // console.log(data_login.token);
    });
}

module.exports = {
    checkLogin,
    getTransaction,
    checkTransaction,
};
