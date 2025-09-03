const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("1.png", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://serverless.roboflow.com/2nd_project-lyjtz/2",
    params: {
        api_key: "2oOTPZOBzkE9MPeVDNwY"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.message);
    });