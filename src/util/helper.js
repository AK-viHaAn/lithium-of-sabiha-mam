let printDate = function() {
    const date = new Date();
         return date;
}



let currentMonth = function(){
    const d = new Date();
let month = d.getMonth()
return month;
         
}

let getBatchInfo = function(){
    const info ={
        batchName:"lithium",
        dayTime:"W3D5",
        topic: "today's topic is nodejs modules system"
    }
    const allInfo = (`${info.batchName},${info.dayTime},${info.topic}`)
    return allInfo
}




module.exports.printCurrentDate = printDate
module.exports.printMonth = currentMonth
module.exports.getBatchInfo = getBatchInfo

