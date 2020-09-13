const axios = require("axios");
const userAgent = require("user-agents");

const user_agent = new userAgent().toString();

function getSocket() {
    return new Promise(async (resolve, reject) => {
        var config = {
            method: "get",
            url:
                "https://vcbdigibank.vietcombank.com.vn/w2/socket.io/?EIO=3&transport=polling&t=NHfXi8a",
            headers: {
                "User-Agent": user_agent,
            },
        };

        await axios(config)
            .then(function (response) {
                // console.log(response.data);
                var res = response.data;
                var socket_id = res.match(/\"sid\":\"(.*?)\"/)[1];

                global.socket_id = socket_id;
                resolve(global.socket_id);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}

function verifySocket(socket_id) {
    return new Promise(async (resolve, reject) => {
        var config = {
            method: "get",
            url: `https://vcbdigibank.vietcombank.com.vn/w2/socket.io/?EIO=3&transport=polling&t=NHfbXkd&sid=${socket_id}`,
            headers: {
                "User-Agent": user_agent,
            },
        };

        resolve(
            await axios(config)
                .then(async (response) => {
                    var res = response.data;
                    // console.log(JSON.stringify(res));

                    console.log(
                        `\n- Nội dung data_socket: ${JSON.stringify(res)}`
                    );
                })
                .catch((error) => {
                    console.log(error);
                })
        );
    });
}

module.exports = {
    getSocket,
    verifySocket,
};
