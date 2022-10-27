const userModel = require("../models/userModel")
const UserModel = require("../models/userModel")

// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBook = async function (req, res) {
    let data = req.body

    let savedData = await userModel.create(data)
    res.send({ msg: savedData })
}




const bookList = async function (req, res) {
    let data = req.body
    let list = await userModel.find().select({ bookName: 1, authorName: 1 })
    res.send({ result: list })
}

const getBooksInYear = async function (req, res) {
    let data = req.body
    let list = await userModel.find(data)
    res.send({ result: list })
}



const getParticularBooks = async function (req, res) {
    let data = req.body
    let list = await userModel.find(data)  
    res.send({ result: list })

}



const getXINRBooks = async function (req, res) {
    let list = await userModel.find({ 'price': { $in: ["100INR", "200INR",] } })
    res.send({ result: list })
}


const getRandomBooks = async function (req, res) {
    let list = await userModel.aggregate(

        [
            {
                $match: {
                    $or: [{ stockAvailable: true }, 
                        { totalpages: { $gt: 500 } }]
                }
            },

            { $sample: { size: 1 } }
        ]
    )

    res.send({ result: list })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks



