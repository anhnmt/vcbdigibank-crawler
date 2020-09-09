const Jimp = require("jimp"); //For image processing
const { createWorker } = require("tesseract.js");

function convertToText(image) {
    return new Promise(async (resolve, reject) => {
        const jimp = await Jimp.read(image);
        jimp.color([{ apply: "green", params: [73] }]).write(image);

        const worker = createWorker({
            // logger: (m) => console.log(m),
        });

        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");

        await worker.setParameters({
            tessedit_char_whitelist: "0123456789",
        });

        const {
            data: { text },
        } = await worker.recognize(`${image}`);

        var captcha_text = text.trim().replace(/[^0-9,.]+/g, "");
        // console.log(text);

        resolve(captcha_text);

        await worker.terminate();
    });
}

module.exports = {
    convertToText,
};
