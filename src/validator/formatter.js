const str = "                      'FunctionUp'                      "

let trim = function(){
    let tStr = str.trim()
    return tStr
}


const word = "FUNCTIONUP IN LOWERCASE"

let lower = function(){
    let lword = word.toLowerCase()
    return lword
}



const word1 = "functionup in uppercase"

let upper = function(){
    let uword = word1.toLocaleUpperCase()
    return uword
}



module.exports.trimfunction = trim
module.exports.changeToLower = lower
module.exports.changeToUpper = upper
