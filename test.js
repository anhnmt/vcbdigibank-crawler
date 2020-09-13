const path = require("path");
global.appRoot = path.resolve(__dirname);

const crypt = require("./src/crypt");
const captcha = require("./src/captcha");
const image = require("./src/image");

(async () => {
    const captcha_id = await captcha.generateKey();
    console.log(`- Lấy captcha_id : ${captcha_id}`);

    var captchaUrl = await captcha.getCaptcha(global.captcha_id);
    // console.log(captchaUrl);

    var text = await image.convertToText(captchaUrl);
    console.log(text);
    // await captcha.verifyCaptcha(captcha_id);

    // var data_login =
    //     "K6NuX0hXtqGKgoCLJvEq7Afl+F7jieRydOV9KCTPPM0OiEkoNSyJUmSLHVjNjd95lKMEOi4v/RrsRLm9gqRnjTQ7NFW3DVFi87Y3G0Coirv5/tXdhv4YNpfQhsWeR2oUr+XwIZnvh1VTdWNHkhAsWUeQ98PL0RCD8Po+VSAXHTuH+tw32j8HGlHSM9UnWB3WSS6mKZOlEvX4xViW9SNQx/56+V+0L24aIMIx5qNl8np93F7Q4cZZUAfkYKIvkJg6HVYUJvmp7u636AB9R2ARRN/tN/S4kOxTjSrydMPse9wMJXTgANjSjTW2et2HkS031q7uayiN8NtCZMAn/Q7klQ==SHwhpCnat/558jRZCqrWveaKVOgKsczEbrdlv0PcNJ8wlU+8pCzZ+0kYEzZ5hQ9lVsHZXghl1jATp2oc6mxA2oBnLHxVN8fb3flRtqHQa8s=";
    // console.log(
    //     `Decode: ${await crypt.decryptAES(data_login, crypt.privateKey)}`
    // );
})();
