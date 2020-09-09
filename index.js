const path = require("path");
global.appRoot = path.resolve(__dirname);

const login = require("./src/login");

(async () => {
    const data_login = await login.checkLogin("0962809194", "Son0972301962");
    console.log(`\n- Lấy data_login : ${data_login}`);
})();
