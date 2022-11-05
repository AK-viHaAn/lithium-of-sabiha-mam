const express = require('express');
const router = express.Router();
const UserController = require("../controllers/userController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");
const BookController = require("../controllers/bookController");
const commonMW = require ("../middlewares/commonMiddlewares");
const{ createOrder } = require ("../controllers/orderController");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/create-user", commonMW.mid1, UserController.createUser)
router.post("/create-product", productController.createProduct)
router.post("/create-order", commonMW.mid1, orderController.createOrder)

module.exports = router;