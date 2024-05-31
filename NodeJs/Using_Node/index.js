import fs from "fs"
//const fs=require("fs");

// fs.writeFile("message.txt", "Hello from Ram !", (err) => {
//     if (err) throw err;
//     console.log("The File Saved Successfully");
// });

fs.readFile("message.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
})