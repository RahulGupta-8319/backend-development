// Module 2 : src/util/helper.js

// 	- printDate() : prints the current date
// 	- printMonth() : prints the current month
// 	- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Radon, W3D3, the topic for today is Nodejs module system’
	
// 	Call all these functions in route.js inside the test-me route handler
const printDate = function(){
     console.log("Date: 05/08/2022");
}
const printMonth = function(){
    console.log("Month: August");

}
const getBatchInfo = function(){
    console.log("All info => plutonium , week#3, day#5 ");
}

module.exports.pt = printDate
module.exports.pm = printMonth
module.exports.gbi = getBatchInfo