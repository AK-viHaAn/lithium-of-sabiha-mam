const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,
//     // isIndian: Boolean,
//     // parentsInfo: {
//     //     motherName: String,
//     //     fatherName: String,
//     //     siblingName: String
//     // },
//     // cars: [ String  ]
// }, { timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users






const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    },
    price: {
        indianPrice: String,
        europeanPrice: String
    },
    year:{ type: Number,
        default: 2021   
    },
    tags:{
        type:String,
        enum:["100INR","200INR","500INR"]
    },
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean
},{ timestamps: true });

// module.exports = mongoose.model('User', userSchema) //users
module.exports = mongoose.model('Book',bookSchema) 


// String, Number
// Boolean, Object/json, array