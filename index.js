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

    console.log(`\n- Lấy captcha_id : ${captcha_id}`);
    console.log(`- Lấy socket_id : ${socket_id}`);

    var data_login = await login.checkLogin("0962809194", "Son0972301962");
    console.log(`\n- Lấy data_login : ${data_login}`);
    // data_login = JSON.parse(`${data_login}`);

    const data_transaction = await login.getTransaction(data_login);
    console.log(`\n- Lấy data_transaction : ${data_transaction}`);
    console.timeEnd();
})();
