const express = require('express');
const app= express();
const port= process.env.PORT || 8080; 


app.use(express.static('public'))


app.listen(8080, ()=>{
    console.log(`API rest corriendo en http://localhost:${port}`)
});
