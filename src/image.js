const Jimp = require("jimp");
const { createWorker } = require("tesseract.js");

async function convertToText(image) {
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

    return new Promise(async (resolve, reject) => {
        const jimp = await Jimp.read(Buffer.from(image, "base64")).then(
            (img) => {
                img.greyscale()
                    .contrast(1)
                    .blur(1)
                    .threshold({ max: 137 })
                    .getBase64(Jimp.AUTO, async function (err, src) {
                        // console.log(src);

                        const {
                            data: { text },
                        } = await worker.recognize(`${src}`);

                        var captcha_text = text
                            .trim()
                            .replace(/[^0-9,.]+/g, "");
                        // console.log(text);

                        resolve(captcha_text);

                        await worker.terminate();
                    });
            }
        );
    });
}

module.exports = {
    convertToText,
};
