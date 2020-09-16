const path = require("path");
global.appRoot = path.resolve(__dirname);
global.captcha_id;
global.socket_id;

const captcha = require("./src/captcha");
const socket = require("./src/socket");
const login = require("./src/login");

(async () => {
    console.time();

    await Promise.all([captcha.verifyCaptcha(), socket.getSocket()]);

    console.log(`- Lấy data_login`);
    var data_login = await login.checkLogin("0962809194", "Son0972301962");
    // console.log(`- Lấy data_login : ${data_login}`);
    // data_login = JSON.parse(`${data_login}`);

    console.log(`- Lấy data_transaction`);
    const data_transaction = await login.checkTransaction(data_login);
    console.log(`- Nội dung data_transaction : ${data_transaction}`);
    console.timeEnd();
})();
