function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i=0; i < arr.length; i++) {
      if (arr[i].includes(elem)){
      } else {
        newArr.push(arr[i]);
      }
    }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));

// ALTERNATIVELY:
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // change code below this line
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       //Checks every parameter for the element and if is NOT there continues the code
//       newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
//     }
//   }
//
//   // change code above this line
//   return newArr;
// }
