// const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

// const orderSchema = new mongoose.Schema({
//     userId: ObjectId,
//     productId: ObjectId,
//     amount: Number,
//     isFreeAppUser: Boolean,
//     date: {
//         type:Date,
//         default:Date.now
//     }
// },{timestamps:true})


// module.exports = mongoose.model('order',orderSchema)

const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const orderSchema =  new mongoose.Schema({
    userId:{
      type: objectId,
      ref : "Useer"
      },
    productId: objectId,
           
    amount: Number,
    isFreeAppUser: Boolean,
 //   date : new Date()
  // isFreeAppUser:{type :Boolean, default:false}
 
}, { timestamps: true });

module.exports = mongoose.model('Order',orderSchema)