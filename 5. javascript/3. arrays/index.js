//deleting array
// let arr = [1,2,3,4];
// arr = [] // Not recommeded to use this -> see y in js basics III
// arr.length=0;
// arr.splice(0,arr.length);

//Combining + Slicing - arrays
let arr1 = [1,2,3];
let arr2 = [5,6,2];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr);
console.log(combinedArr.slice(2,4))
console.log(combinedArr.slice(2))