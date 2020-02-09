const express = require('express');
const app = require('./app');
const port = 6700;

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`Server is listening at port ${port}`);
});


