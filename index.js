var path = require("path");
global.appRoot = path.resolve(__dirname);

var crypt = require("./src/crypt");
var captcha = require("./src/captcha");

(async () => {
    // var data_login = await crypt.encryptAES(
    //     JSON.stringify({
    //         user_name: "ahihi",
    //         password: "12313232",
    //         socket_id: "37cdxQ5rxu30OCVpAAlg",
    //         captcha_id: "68f23099-c62f-60b7-8289-9ad8e94dea7c",
    //         clientKey: crypt.publicKey,
    //         lang: "vi",
    //     }),
    //     crypt.publicKey
    // );
    // console.log(`Data login: ${data_login}`);

    // var data_login = "Vw1ykAQQrSNDVaxeLRDWg+iKOgpH5uF/gEWnE26JUxshhhuUbl1yTF94a813AIrt06WRBeONn0gCj29gjknXFpOGE0jafgeNbMFaLMKAxrthU8l1dBHHAXz63HZue60tzwUlPXrHDLDk5yb7RaZApdP6Eh6ALsnoG25697ss42HUGIIKIoFCZzkbiVPDMblJ9DqSZnPKC0jeLgrFhwN8Xn+7kVVEgbMQVOTl8OdWIq96w4Q3dECY/FVx9h+PjKwT9+L/j/6mhDl7z+Si5nR7REN1GhZLjEzGKPaldICI2j9a3e+xdjWdngHJLDkZ9wQm7sEpYyu81z292TEedVWqaw==sbwu4XT0R5FKDIZen1zjw9AT1CTMq6raXUJh4jgF/1zx0EKDWTifL8CKaWc9inYeoiVMgAAvGK8EVaCWMOdOXPP3fi9GoxQHQvn9pzuoBBdHHc41IO/KlRcWXN8IqTsWm9XftTHfPgtZ/Y9Dgy/Ghi691r3YB5Mg+MNfpoBRXXNIsR5vPYg7QjUdOhkEY0m76k3MAx8V6tM9h67RwESM1Y29UZkRyziJTVKkOkDtIz7P9/fANI9/AiKOoM0zoMKuMnp+2C38zRZxzX9ywELX964aa9cC0s2rix2ER500wmfCzOjEpXf04BywB0KuOD0BJ/T8DaMCJtLeE0cCzJWBvcAPfnFeE3jJGjJA1zYr9B42haVYpv+kIIfR5XlZ6gUhLlj7Nm2uLAdoSOl6cf8PubbFkbNWe+9SqxP8TpHFTpRedVoVV0DQdmQpd/7A0oqKyWKeRdd3a7+SXnoLfbcBRerI+IXIlLuN6zmPHQjgHPBvAWUJgAVLOdDwAPCIEslUkHONLMzwCylCxvPv+eQroNhqln8F2SDhvfCZcdEyDjmkInabHfflrc5/1AJtz9YK7rVVeE83vCUeclI8fsmTI/0NLnDzTT81vaPjjPvA4WbHGB/gW41GD0E0mzpHsSA5tx4uLL5vmgVScxhWLqg8b50EqEbJVKju3cgp5OFQfhOrjIu/jSWjCGw33Ey3IODYlJxmkMki7Tlqnd0pS2PAzxI0NYHiNAVMuaKvfJgMH0hUlwED9uDqllSzh5ReIujzfNhGDkpdoohWPM7jsYCSBf9VLr50QiGH35boZzJHuuyYd/h29DFIGt6TEubBQe1f/vQX0/A3voQEt6a7527ThhMQ99dHzhq6wOSVG6y7W/YbGJBPU99rCUg7BeNT4wQO1a+gDGn5nCY6stQK9pZEC0z5ojBrf39f5xpgorSRMBwmlGD9VNvFKiNLVQeIbGFCj82x4r/9ue03svJ2MbZbXODnYRUzAnGK+nXabtMKxLpcmcOpyMpD3IrUtzR2JqoajiuzJlDoOJiODDMz6Dz27S7jiaiNwbONQ9Shko02tTJW46RKq8pstuDJH9y4PDLuj5si64ldkS9zwZPHo8B3LQqMktZbXKhyalRJ07zJ6gb45t8rOBQW0kRCkaxb0eDA9QzvleO+iPdkqZYE5DFONWZOsJilg30NuwTe2uvezUNF+bg3t5gvl7xWY0Eq3MgyLwqwcfJwe4ktauUap/+KsL98ReaMcQgpBebX9wmr0CyuwgyDnihxGTC6MeMxXpHSuo3yI3VX+I5joMz5ltoIspzixg/+DO5Yg0BJsrkzvalrfn3D9+aobEE8Y21Q7aHLhA9elGrHBaGu2F6iICb9wruIIe6C5HAMlvE3LI8GbumxvxwThhYe/+UwbEYA9REbl8MBiS+VyJN9UTThOBi+dmhQnndwEQi1V5YGJrw1WwcpS/ePJP2VTguEAh2rRUmGuRKUkFMmXIBMd6Eb4Ld6yUgjCsy1UXsqgQT/mvQmO4ou73GXknTLlyM76oVS06gd+qykl1RfGFZNydgd4sLMhp0w5Q6TJUkuHkrlN1OvDrI=";
    // console.log(
    //     `Decode: ${await crypt.decryptAES(data_login, crypt.privateKey)}`
    // );

    // const captcha_id = "123456-789456-123456789";
    const captcha_id = await captcha.generateKey();
    console.log(`- Lấy captcha_id : ${captcha_id}`);

    await captcha.verifyCaptcha(captcha_id);
})();
