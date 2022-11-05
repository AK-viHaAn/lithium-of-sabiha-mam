const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    const { name, category, price } = req.body

    if (!name || !category || !price) {
        return res.send({ msg: "all fields name, category and price are mandatory field" })
    }
    let productDetails = await productModel.create({ name, category, price })
    return res.send({ msg: productDetails })
}

module.exports.createProduct = createProduct
