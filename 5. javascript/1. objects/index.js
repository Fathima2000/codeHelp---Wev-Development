console.log("hi");

let rectangle = {
    length:10,
    breadth:20
}

//Functions are OBJECTS

//Primities copied by their value
//References copied by their address/referance

//Iterating throgh Objects
//for-of (Objects)
// for(let key in rectangle){
//     console.log(key, rectangle[key])
// }

// for (const [key, value] of Object.entries(object)) {
//     console.log(`${key}: ${value}`);
// }

// for (let key of Object.entries(rectangle)) {
//     console.log(key);
// }


//for-in (iterables)-maps, arrays (which have index)


//Check if property is present in Object
if('length' in rectangle)
    console.log('present')



