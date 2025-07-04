import fs from "fs";

// fs.writeFile("about.txt", "hello World", (err) => { //in this case, it will overwrite the file if it already exists
//     if(err) throw err;
// });


// fs.appendFile("myfile.txt", "hello World", (err) => { // in this case, itt will automatically create the file if it does not exist
//     if(err) throw err;
// });


// fs.readFile("about.txt", "utf-8", (err, data) => { // in this case, it will read the file and return the data
//     if(err) throw err;
//     console.log(data);
// });

// fs.rename("myfile.txt", "newfile.txt", (err) => { // in this case, it will rename the filename 
//     if(err) throw err;
//     console.log("File renamed successfully");
// });

fs.unlink("newfile.txt", (err) => { // in this case, it will delete the file
    if(err) throw err;
    console.log("File deleted successfully");
});

