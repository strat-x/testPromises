var logDT = require('datetime4debug');

console.log(logDT.dtLogger()," START")
//const example="array";
const example="urlExample";
var myUrl="https://pokeapi.co/api/v2/pokemon?limit=50";
var myUrl2="https://pokeapi.co/api/v2/pokemon/1";

if (example==="array") {
    var myArrayExample = require('./arrayExample');
    console.log(logDT.dtLogger("")," ** starting");
    console.log(logDT.dtLogger("")," == before getList");
    myArrayExample.getListOfNames();
    console.log(logDT.dtLogger("")," == after getList");
};

if (example==="urlExample") {
    var myUrlExample = require('./urlExample');
    //var myResult = myUrlExample.getUrlResponse(myUrl);
    var myResult = myUrlExample.getUrlResponse(myUrl); // the function returns a promise object
    myResult.then((response) => { //the .then is only executed when the promise object received a response.
        console.log(logDT.dtLogger(),"response received ", response);
        var myResult = myUrlExample.getUrlResponse(myUrl2); 
        myResult.then((response) => { //the .then is only executed when the promise object received a response.
            console.log(logDT.dtLogger(),"response received ", response);
            console.log(response.name);
        });
    });
    console.log(logDT.dtLogger()," AFTER myResult.then. at this moment ",myResult);
    //console.log("response from ",myUrl," is ",myResult);
    //setTimeout(() => console.log(myResult),3000);

}



