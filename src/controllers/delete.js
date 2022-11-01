const { create } = require("../models/authorModel") 
const authorModel = require("../models/authorModel") 
const bookModel = require("../models/bookModel") 
const pubModel = require("../models/pubModel") 
 
const createBook = async function (req, res) { 
    let book = req.body 
    const { author_id, publisher } = req.body 
 
    if (!author_id && !publisher) { 
        res.send("Author ID and Publisher ID is not Available") 
    } else if (!author_id) { 
        res.send("Author ID is not Available") 
    } else if (!publisher) { 
        res.send("Publisher ID is not Avilable") 
    } else { 
 
        let authorevalid = await authorModel.find().select({ _id: 1 }) 
        let validateauthore = authorevalid.map(obb => obb._id.toString()) 
        let avalid = validateauthore.includes(author_id) 
 
        let publishervalid = await pubModel.find().select({ _id: 1 }) 
        let validatepublisher = publishervalid.map(obb => obb._id.toString()) 
        let pvalid = validatepublisher.includes(publisher) 
 
        if (!avalid && !pvalid) { 
            res.send("Author ID and Publisher ID is Invalid") 
        } else if (!avalid) { 
            res.send("Invalid Authore ID") 
        } else if (!pvalid) { 
            res.send("Invalid Publisher ID") 
        } else { 
 
            let bookCreated = await bookModel.create(book) 
            res.send({ data: bookCreated }) 
        } 
    } 
} 
 
// const getBooksData= async function (req, res) { 
//     let books = await bookModel.find() 
//     res.send({data: books}) 
// } 
 
 
 
 
const createpub = async function (req, res) { 
    let data = req.body 
    let publisher = await pubModel.create(data) 
    res.send({ data: publisher }) 
} 
 
 
 
const getBooksWithAuthorDetails = async function (req, res) { 
    let specificBook = await bookModel.find().populate('author_id').populate('publisher') 
    res.send({ data: specificBook }) 
 
} 
 
 
 
// const putbook = async function(req,res){ 
//     let pubby = await pubModel.find({name:{$in:["Penguin", "HarperCollins"]}}).select({_id:1}) 
//     const publishid =[] 
//     for (let i = 0; i < pubby.length; i++){ 
//         publishid.push(pubby[i]._id) 
//     } 
//     let updatehardcover = await bookModel.updateMany({publisher:{ $in : publishid}},{Hardcover : true},{new:true},) 
//     res.send({status: true, HardCover: updatehardcover}) 
 
// }  
 
 
 
 
module.exports.createpub = createpub 
module.exports.createBook = createBook 
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails 
 
// module.exports.getBooksData= getBooksData 
// module.exports.putbook = putbook