const userModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")


const createUser = async function (req, res){
    let data = req.body

    let savedData = await userModel.create(data)
    res.send({user: savedData})
}

const createProduct = async function(req, res){
    let data = req.body

    let savedData = await productModel.create(data)
    res.send({product: savedData})
}

// const creatOrder = async function(req, res){
//     let identity = req.body.userId
//     let checkIdentity = await userModel.findOne({_id:identity})
//      // if condition lagana h whi tk kre hai
// }
module.exports.createUser= createUser
module.exports.createProduct= createProduct

