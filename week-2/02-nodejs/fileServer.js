/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const folder = './files';

app.get("/files", function(req,res){


  var directoryContent = [];

  fs.readdir(folder, (err, files) => {

    if (err) 
    {
      return res.status(500).json({
        msg: "Internal Server Error"
      });
    }
    else 
    {

      files.forEach(file => {
        directoryContent.push(file);
      });
      res.status(200);
      res.send(directoryContent);
      return res;
    } 
  });


});


app.get("/file/:filename", function(req,res){
   
    const filepath = folder + "/" + req.params.filename;
    
    if(fs.existsSync(filepath))
    {
      fs.readFile(filepath, 'utf8', function(err, data){ 
      
        if (err) 
        {
          return res.status(500).json({
            msg: "Internal Server Error"
          });
        }
        else 
        {
          res.status(200);
          res.send(data);
          return res;
        } 
      }); 
    }
    else
    {
      
      res.status(404);
      res.send("File not found");
    
    }
})

app.get("*",function(req,res){
  res.status(404);
  res.send("Route not found");
});

module.exports = app;