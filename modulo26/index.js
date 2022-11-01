const express = require('express');
const apiRoute = require('./routes/api')

const app = express();
const PORT=3000;
const path= require('path');

app.use('/api',apiRoute);
app.use(express.static(path.join(__dirname, "public")));



app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
});