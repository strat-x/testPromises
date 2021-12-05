var logDT = require('datetime4debug');

function getList() { //returns a promise object which can be accessed through handler methods .then .catch .error
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve(['benny',"heidi"]),3000);
        setTimeout(() => reject("this is rejected"),8000);
    });
}

function getWrongList() {
    return new Promise((_resolve, reject) => { //use an underscore in front of arg which are not used. 
        setTimeout(() => reject(new Error("error no list")),5000);
    })
}

function printNames(list) {
    console.log(logDT.dtLogger("+++ ")," ", list);
}

function printError(errormsg) {
    console.log(logDT.dtLogger("!!! ")," ", list);
}

function getListOfNames() {
    const myListOfNames = getList();
    //const myListOfNames = getWrongList();

    myListOfNames
    .then(returnedValue => printNames(returnedValue))
    .catch(returnedValue => printError(returnedValue));
}



module.exports.getListOfNames = getListOfNames;





