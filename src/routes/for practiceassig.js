// // sum=0
// // sum1=0
// // let array = [1,2,3,4,5,6,7,]
// // let givenArr = [1,2,3,5,6,7]
// //     for(let i= 0; i<=array.length;i++){
// //         sum = sum+i
// //     }
    
// //     for(let i = 0; i<=givenArr.length-1;i++){
// //         sum1 = sum1+givenArr[i]
// //     }
// //     let missingNumber = sum-sum1
// //     console.log(missingNumber);

// // sum=0
// // sum1=0
// // let array = [33,34,35,36,37,38]
// // let givenArr =  [33, 34, 35, 37, 38]

// //     for(let i= 0; i<=array.length;i++){
// //         sum= sum+i
// //     }
// //     console.log(sum);

//     // for(let i = 0; i<=givenArr.length-1;i++){
//     //     sum1 = sum1+givenArr[i]
//     // }
//     // console.log(sum1);

//     // let missingNumber = sum-sum1
//     // console.log(missingNumber);

//     router.get("/sol2", function (req, res) { 
//         sum=0 
//         sum1=0 
//         let garr = [33,34,35,36,37,38] 
//         for(i=0;i<garr.length;i++){ 
//             sum=sum + garr[i] 
//         } 
//         console.log(sum) 
//         let newarr= [33,34,35,37,38] 
//         for(i=0;i<newarr.length;i++){ 
//             arrsum=arrsum + newarr[i] 
//         } 
//         console.log(arrsum); 
//         let missingNumber = (sum - sum1); 
//         console.log(missingNumber) 
//         res.send( { data: missingNumber } ); 
//         });
    
    
const arr = [5,6,7,8,10];
    let missingNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            missingNumber = arr[i] + 1;
            break;
        }
    }
   console.log(`The missing number is ${missingNumber}`)