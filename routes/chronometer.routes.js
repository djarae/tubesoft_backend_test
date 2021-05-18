module.exports = function(app) {
    var chronometers = require('../controllers/chronometer.controller');
    // // Create a new Chronometer
    app.post('/chronometers', chronometers.create);
    
    // Retrieve all Chronometer
    app.get('/chronometers', chronometers.findAll);
}