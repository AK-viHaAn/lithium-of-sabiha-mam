const UserModel= require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const creatNewbook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    // console.log(savedData)
    res.send({msg: savedData})
}

const getAllbooks= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.creatNewbook= creatNewbook
module.exports.getAllbooks=getAllbooks


// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData