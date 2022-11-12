const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const memeController= require("../controllers/getMeme")
const weatherController= require("../controllers/whetherControllers")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getSessions/api/v2/appointment/sessions/public/findByDistrict", CowinController.getSessions)
router.post("/createMemes/api.imgflip.com/caption_image", memeController.createMemes)
router.get("/getWhether/api.openweathermap.org/data/2.5/weather", weatherController.getWeather)
router.get("/allCityweather/api.openweathermap.org/data/2.5/weather", weatherController.allCityweather)



module.exports = router;