function printdate(){
    console.log("Today is 21")
}

function printmonth(){
    console.log(" February 2022")
}

function getBatchInfo(){
    console.log("Thorium, W3D1, the topic for today is Nodejs module system");
}
module.exports.date = printdate;
module.exports.month = printmonth;
module,exports.batchinfo = getBatchInfo;