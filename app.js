const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = 3000;

app.use("/",routes)

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
