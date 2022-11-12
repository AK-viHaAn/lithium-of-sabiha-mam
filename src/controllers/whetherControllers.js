const axios = require('axios');

const getWeather = async function (req, res) {
    try{
    let location = req.query.q
    let appid = req.query.appid

    let api = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`

    }
    let response = await axios(api);
    result = response.data.main.temp
    res.status(200).send({ city: location, temp: result })
}catch(error){
    res.status(500).send({status : false, msg: "INTERNAL SERVER ERROR"})
} 
}






const allCityweather = async function (req, res) {
   try{ 
    let appid = req.query.appid
    const arr = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    let finalOutput = []
    for (let i = 0; i < arr.length; i++) {
        let location = arr[i]
        let api = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appid}`

        }
        let response = await axios(api);
        let result = response.data.main.temp
        finalOutput.push({city:location, temprature:result});
        finalOutput.sort((a,b)=>a.temprature - b.temprature);
        
    }
    res.status(200).send(finalOutput)
}catch(error){
    res.status(500).send({status : false, msg: "INTERNAL SERVER ERROR"})
} 
}




module.exports.allCityweather = allCityweather
module.exports.getWeather = getWeather