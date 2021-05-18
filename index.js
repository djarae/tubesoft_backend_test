const express = require('express');
const app = express();
app.use(express.json());

// define a simple route
app.get('/', function(req, res){
  res.json({"message": "WELCOME ."});
});


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin: *" )
}) 

require('./routes/chronometer.routes')(app);
console.log("funciona el require dontes ")

app.listen(8070, () => console.log('server listening on port 8080'));
