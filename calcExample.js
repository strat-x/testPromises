var myDT = require('datetime4debug');

function calcVolume(surface,height) {
    return new Promise((resultaat) => {
        console.log(myDT.dtLogger()," start calcVolume");
        var volume = surface * height;
        resultaat(volume);
        console.log(myDT.dtLogger()," ** volume is ", volume);      
    })
}

function calcSurface(length,width) {
    return new Promise((resolve) => {
        console.log(myDT.dtLogger(),"start calcSurface");
        var surface = length * width;
        resolve(surface);
        console.log(myDT.dtLogger(),"surface is ", surface);
    });
}



function returnMsg(msg,myWaitTime=2000){
    return new Promise((antwoord)=>{
        console.log(myDT.dtLogger()," start Promise");    
        setTimeout((aMsg)=>{
            const newMsg = "promised by: " + aMsg;
            console.log(myDT.dtLogger()," inside Promise: msg is ", aMsg);
            console.log(myDT.dtLogger()," inside Promise: newMsg is ", newMsg);
            antwoord(newMsg);
            antwoord.a="all good";
        },myWaitTime,msg)
    })
}


function allDimensions(length,width,height) {
    var mySurface = calcSurface(length,width);
    mySurface.then((response) => {
        console.log(response);
        var myVolume = calcVolume(response,height);
        myVolume.then((response) => {
            console.log(response);
        })
    })
}

module.exports.calcAllDims = allDimensions;
module.exports.calcVolume = calcVolume;
module.exports.setTitle = returnMsg;