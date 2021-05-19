const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

// define a simple route
app.get('/', function(req, res){
  res.json({"message": "WELCOME ."});
});

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin: *" )
// }) 

require('./routes/chronometer.routes')(app);
console.log("funciona el require dontes ")

app.listen(8070, () => console.log('server listening on port 8070'));
