const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc = require('../logger/logger.js')
const info = require('../util/helper.js')
const formatter = require('../validator/formatter.js')


//importing external package
const underscore = require('underscore');
const { chunk } = require('underscore');
const { tail } = require('underscore');
const { union } = require('underscore');
const { fromPairs } = require('lodash');




router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    console.log("solution 1 ",abc.wellcome())
    console.log("solution 2 (a) ",info.printCurrentDate())
    console.log("solution 2 (b) ",info.printMonth())
    console.log("solution 2 (c) ",info.getBatchInfo())
    console.log("solution 3 (a) ",formatter.trimfunction())
    console.log("solution 3 (b) ",formatter.changeToLower())
    console.log("solution 3 (c) ",formatter.changeToUpper())

    // console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)

    // solution 4(a)
    let array = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    let result = chunk(array,3)
    console.log("solution 4 (a) ", result)
    
    //solution 4(b)
    let oddArray = [1,3,5,7,9,11,13,15,17,19]
    let result2 = tail( oddArray )    
    console.log("solution 4 (b) ",result2) 

    // solution 4(c)
    let array1 = [1,2,4,5,7,8]
    let array2 = [2,3,5,6,8,9]
    let array3 = [8,10,12,14,16]
    let array4 = [9,11,13,15,17]
    let array5 = [10,11,13,14,16]
    let result3 = union(array1,array2,array3,array4,array5)
    console.log("solution 4(c) ",result3)


        let obj = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
        let result4 = fromPairs(obj)
        console.log("solution 4 (d) ",result4)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

