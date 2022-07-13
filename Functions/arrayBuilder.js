function arrayBuilder(obj) {
 let arr = [],d
 let keys = Object.keys(obj), values = Object.values(obj)
 for(let i =0; i<keys.length; i++){
   for(let j =0; j<values[i]; j++){
     arr.push(keys[i])
   }
 }return arr
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []
