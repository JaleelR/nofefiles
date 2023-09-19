//Step 1
// In step1.js, write a function, cat.
//declare it to start writitng in it 
const fs = require("fs")

//proccess is how you retrieve global data, you just need to require it
const process = require('process')
//function cat(path) {}
// It should take one argument, path, and it should read the file with that path, and print the contents of that file.
//find how to read file 
//write the function 

// fs.readFile(path, "utf8", function (err, data) {
//     if (err) {
//         console.log("Error", err)
//         process.exit(1)
//     }
//     console.log("file contents:", data)
// })




//     Then, write some code that calls that function, allowing you to specify the path argument via the command 



//make code for that function to actually run
//get nicki text 
//make a file and put text in there   
//get path to be actual txt file...how?
//reread packet
//try importing file project 
//const nickifile = require("./nickiquote.txt")
//or
//look up on google 
//or
//look up on chat gtp

///call the function 
//////////cat(nickifile)

///write in command line

///////node step1.js

// $ node step1.js one.txt
// This is file one.
// If you give it the path of a non - existent file, it should print that error and halt the script execution:

// $ node step1.js huh.txt
// Error reading huh.txt:
// Error: ENOENT: no such file or directory, open 'huh.txt'







function cat(path) {

    fs.readFile(path, "utf8", function (err, data) {
        if (err) {
            console.log("Error", err)
            process.exit(1)
        }
        else {
            console.log(data)
        }
       
    })
}


//always call outside of function 
/////process.argv[2] is how you call the args you get specfic on which one when you put []
cat(process.argv[2])



//you also dont have to call step1.js and nickiquote.txt........just call one bc you already called it in function once you imported it