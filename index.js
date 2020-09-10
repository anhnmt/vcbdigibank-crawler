const path = require("path");
global.appRoot = path.resolve(__dirname);

const login = require("./src/login");

(async () => {
    var data_login = await login.checkLogin("0962809194", "Son0972301962");
    console.log(`\n- Lấy data_login : ${data_login}`);
    // data_login = JSON.parse(`${data_login}`);

    const data_transaction = await login.getTransaction(data_login);
    console.log(`\n- Lấy data_transaction : ${data_transaction}`);
})();
