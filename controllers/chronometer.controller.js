var Chronometer = require('../models/chronometer');

exports.create = function(req, res) {
    // Create and Save a new Chronometer
    if(!req.body.content) {
        res.status(400).send({message: "Chronometer can not be empty"});
    }

    var chronometer = new Chronometer({title: req.body.title || "Untitled Chronometer", content: req.body.content});

    chronometer.save(function(err, data) {
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Chronometer."});
        } else {
            res.send(data);
        }
    });
};

// exports.findAll = function(req, res) {
//     console.log("entro al get ")
//     // Retrieve and return all chronometers from the database.
//     Chronometer.find(function(err, chronometers){
//         if(err) {
//             res.status(500).send({message: "Some error occurred while retrieving chronometers."});
//         } else {
//             res.send(chronometers);
//         }
//     });
// };

// exports.findOne = function(req, res) {
//     // Find a single chronometer with a chronometerId
//     Chronometer.findById(req.params.chronometerId, function(err, data) {
//         if(err) {
//             res.status(500).send({message: "Could not retrieve chronometer with id " + req.params.chronometerId});
//         } else {
//             res.send(data);
//         }
//     });
// };

// exports.update = function(req, res) {
//     // Update a chronometer identified by the chronometerId in the request
//     Chronometer.findById(req.params.chronometerId, function(err, chronometer) {
//         if(err) {
//             res.status(500).send({message: "Could not find a chronometer with id " + req.params.chronometerId});
//         }

//         chronometer.title = req.body.title;
//         chronometer.content = req.body.content;

//         chronometer.save(function(err, data){
//             if(err) {
//                 res.status(500).send({message: "Could not update chronometer with id " + req.params.chronometerId});
//             } else {
//                 res.send(data);
//             }
//         });
//     });
// };

// exports.delete = function(req, res) {
//     // Delete a chronometer with the specified chronometerId in the request
//     Chronometer.remove({_id: req.params.chronometerId}, function(err, data) {
//         if(err) {
//             res.status(500).send({message: "Could not delete chronometer with id " + req.params.id});
//         } else {
//             res.send({message: "Chronometer deleted successfully!"})
//         }
//     });
// };

