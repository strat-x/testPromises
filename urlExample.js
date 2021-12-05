var myDT = require('datetime4debug');

function getUrlResponse(url) {
    const axios = require('axios');
    return new Promise ((resolve) => { //returns a promise object which has a state. 
        axios.get(url)
        .then((response) => {
            resolve(response.data);
        })
        .catch(function (error) {
            console.log("Error while fetching url");
        });
    })
} 





module.exports.getUrlResponse = getUrlResponse;