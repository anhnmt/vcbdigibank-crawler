const axios = require("axios");
const userAgent = require("user-agents");
// Custom
const crypt = require("./crypt");
const captcha = require("./captcha");
const socket = require("./socket");

const user_agent = new userAgent().toString();

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

module.exports = {
    checkLogin,
};
