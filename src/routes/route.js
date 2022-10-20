const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

//Q1.
// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// : 4 is missing

router.get("/sol1", function (req, res) {
    sum=0
    sum1=0
    let array = [1,2,3,4,5,6,7,] //28
    let givenArr = [1,2,3,5,6,7] // 24
        for(let i= 0; i<=array.length;i++){
            sum = sum+i
        }
        
        for(let i = 0; i<=givenArr.length-1;i++){
            sum1 = sum1+givenArr[i]
        }
        let missingNumber = sum-sum1
        res.send({ data: missingNumber });

})

router.get("/sol2", function (req, res) { 
    sum=0 
    sum1=0 
    let carray = [33,34,35,36,37,38] 
    for(i=0;i<carray.length;i++){ 
        sum=sum + carray[i] 
    } 
    console.log(sum) 
    let garray= [33,34,35,37,38] 
    for(i=0;i<garray.length;i++){ 
        sum1=sum1 + garray[i] 
    } 
    console.log(sum1); 
    let missingNumber = (sum - sum1); 
    console.log(missingNumber) 
    res.send( { data: missingNumber } ); 
    });

module.exports = router;