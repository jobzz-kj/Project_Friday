const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

//Database connection 
const db = require('./config/database');
db.authenticate().then(()=>{
    console.log('Database connected');
}).catch(err=>{
    console.log('error '+err);
})

//express configuration
const app = express();
app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({extended:true, limit:'50mb'}));
app.use(cors('*'));

//Gig Routes
app.use('/',require('./routes/routes'));

const PORT = process.env.PORT || 5000;
db.sync().then(()=>{
    app.listen(PORT, console.log(`Server on port ${PORT}`));
}).catch(err=> console.log("error " +err));