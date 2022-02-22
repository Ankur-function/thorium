function trim(message) {
    console.log(message.trim())
}

function changetolower(message) {
    console.log(message.toLowerCase())
}

function changetoupper(message){
    console.log(message.toUpperCase())
}




module.exports.Trim = trim;
module.exports.lowerCase = changetolower;
module.exports.upperCase = changetoupper;