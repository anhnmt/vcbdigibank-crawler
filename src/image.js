const fs = require("fs");
const Jimp = require("jimp");
const { createWorker } = require("tesseract.js");

function convertToText(image) {
    return new Promise(async (resolve, reject) => {
        const jimp = await Jimp.read(image);
        jimp.greyscale()
            .contrast(1)
            .blur(1)
            .threshold({ max: 137 })
            .write(image);

        const worker = createWorker({
            // logger: (m) => console.log(m),
        });

        await worker.load();
        await worker.loadLanguage("eng");
        await worker.initialize("eng");

        await worker.setParameters({
            tessedit_char_whitelist: "0123456789",
            tessedit_pageseg_mode: 8,
        });

        const {
            data: { text },
        } = await worker.recognize(`${image}`);

        var captcha_text = text.trim().replace(/[^0-9,.]+/g, "");
        // console.log(text);

        resolve(captcha_text);

        await worker.terminate();

        // Xoá file captcha
        // if (fs.existsSync(image)) {
        //     fs.unlinkSync(image, (err) => {
        //         if (err) throw new Error(err);
        //     });
        // }
    });
}

module.exports = {
    convertToText,
};
