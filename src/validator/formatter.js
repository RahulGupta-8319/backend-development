// Module 3: src/validator/formatter.js
// 	- trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// 	- changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// 	- changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]

// Call all these functions in route.js inside the test-me route handler

const tm = function(){
      let a = "  trim   data   "
    console.log(a.trim());
}
const lower = function(){
   let b = "  trim   data   "
     console.log(b.toLowerCase());
}
const upper = function(){
    let c = "  trim   data   "
     console.log(c.toUpperCase());
    
}
module.exports.tm = tm
module.exports.lower = lower
module.exports.upper = upper