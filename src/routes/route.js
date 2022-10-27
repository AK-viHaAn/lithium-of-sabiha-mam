const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook  )

router.get("/bookList", UserController.bookList)

router.get("/getBooksInYear", UserController.getBooksInYear)

router.get("/getParticularBooks", UserController.getParticularBooks)

router.get("/getXINRBooks", UserController.getXINRBooks)

router.get("/getRandomBooks", UserController.getRandomBooks)





// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;