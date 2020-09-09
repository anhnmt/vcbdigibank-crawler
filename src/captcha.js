const axios = require("axios");
const fs = require("fs");
const userAgent = require("user-agents");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
// Custom
const { convertToText } = require("./image");

const user_agent = new userAgent().toString();

axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();

function generateKey() {
    return new Promise((resolve, reject) => {
        var lut = [];
        for (var i = 0; i < 256; i++) {
            lut[i] = (i < 16 ? "0" : "") + i.toString(16);
        }

        var d0 = (Math.random() * 0xffffffff) | 0;
        var d1 = (Math.random() * 0xffffffff) | 0;
        var d2 = (Math.random() * 0xffffffff) | 0;
        var d3 = (Math.random() * 0xffffffff) | 0;

        resolve(
            lut[d0 & 0xff] +
                lut[(d0 >> 8) & 0xff] +
                lut[(d0 >> 16) & 0xff] +
                lut[(d0 >> 24) & 0xff] +
                "-" +
                lut[d1 & 0xff] +
                lut[(d1 >> 8) & 0xff] +
                "-" +
                lut[((d1 >> 16) & 0x0f) | 0x40] +
                lut[(d1 >> 24) & 0xff] +
                "-" +
                lut[(d2 & 0x3f) | 0x80] +
                lut[(d2 >> 8) & 0xff] +
                "-" +
                lut[(d2 >> 16) & 0xff] +
                lut[(d2 >> 24) & 0xff] +
                lut[d3 & 0xff] +
                lut[(d3 >> 8) & 0xff] +
                lut[(d3 >> 16) & 0xff] +
                lut[(d3 >> 24) & 0xff]
        );
    });
}

function getCaptcha(captcha_id) {
    return new Promise(async (resolve, reject) => {
        const download = fs.createWriteStream(
            `${appRoot}/cache/${captcha_id}.png`
        );

        var config = {
            method: "get",
            url: `https://vcbdigibank.vietcombank.com.vn/w1/get-captcha/${captcha_id}`,
            responseType: "stream",
            headers: {
                "Content-Type": "image/jpeg",
                "User-Agent": user_agent,
            },
            jar: cookieJar,
            withCredentials: true,
        };

        await axios(config).then(async (response) => {
            await response.data.pipe(download);

            download.on("finish", resolve);
            download.on("error", reject);
        });
    });
}

function validCaptcha(captcha_id) {
    return new Promise(async (resolve, reject) => {
        const captcha_text = await convertToText(
            `${appRoot}/cache/${captcha_id}.png`
        );
        // captcha_text = captcha_text.trim();
        console.log(`- Bypass captcha thành công!`);
        console.log(`- Nội dung captcha_text: ${captcha_text}`);

        var data_catpcha = JSON.stringify({
            captcha_id: `${captcha_id}`,
            captcha_text: `${captcha_text}`,
        });

        console.log(`- Gửi data_catpcha: ${data_catpcha}`);

        var config = {
            method: "post",
            url: "https://vcbdigibank.vietcombank.com.vn/w1/valid-captcha",
            headers: {
                "User-Agent": user_agent,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            data: data_catpcha,
            jar: cookieJar,
            withCredentials: true,
        };

        resolve(await axios(config));
    });
}

function verifyCaptcha(captcha_id) {
    return new Promise(async (resolve, reject) => {
        await getCaptcha(captcha_id);

        resolve(
            await validCaptcha(captcha_id)
                .then(async (response) => {
                    var res = response.data;
                    // console.log(JSON.stringify(res));

                    console.log(`\n- ${res.des}`);

                    if (res.code !== "00") {
                        console.log(`- Đang thử lại ...`);
                        await verifyCaptcha(captcha_id);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        );

        // Xoá file captcha
        var captchaUrl = `${appRoot}/cache/${captcha_id}.png`;
        if (fs.existsSync(captchaUrl)) {
            fs.unlinkSync(captchaUrl, (err) => {
                if (err) throw new Error(err);
            });
        }
    });
}

module.exports = {
    getCaptcha,
    validCaptcha,
    verifyCaptcha,
    generateKey,
};
