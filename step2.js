// Step 2
// Copy over your step1.js code to step2.js
const axios = require('axios');
const fs = require("fs");
const process = require('process');
function cat(path) {

    fs.readFile(path, "utf8", function (err, data) {
        if (!path.startsWith("http://")){
            console.log(data)
            process.exit(1)
        }
        else if (err) {
            console.log("running second function")
        }
        else {
            console.log("Error", err)
            process.exit(1)
        }

    })
}


//always call outside of function 
cat(process.argv[2])




// Add a new function, webCat.
//// function webCat() { }


//This should take a URL 
////// function webCat(url) { }


//and, using axios, should read the content of that URL and print it to the console.
//import axios 
////require varible

//make the data a varible 
//put async infront of function 
//res = await axios.get(google.com)
// get the html 
//console.log(res) 
//call the fuction

function webCat(url) {
    
        axios.get(url).then(function (resp) {
            console.log(resp.data.slice(0, 20), "done")
        })
      
}
webCat(process.argv[2])



// Modify the code that invoked cat so that, based on the command - line args, 
//it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.

////check to see if file is an file....how? 
//if varible contains http://
//if varible starts with a /





// $ node step2.js one.txt
// This is file one.







// $ node step2.js http://google.com
// < !doctype html > <html ...








//     If there is an error getting the page, it should print that.

//     $ node step2.js http://rithmschool.com/no-such-path
//     Error fetching http://rithmschool.com/no-such-path:
//     Error: Request failed with status code 404