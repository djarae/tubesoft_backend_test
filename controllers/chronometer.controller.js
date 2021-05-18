var Chronometer = require('../models/chronometer');
// var Chronometer = require("../models/chronometer").Chronometer;


exports.create = function(req, res) {
    console.log("entro al coso del get y tal ")
    if(!req.body.duration) {
        res.status(400).send({message: "Chronometer can not be empty"});
    };
    const pg = require('pg')
    const config = {
        database: 'test7',
        user : "postgres",
        password: 1234,
        host: "localhost",
    }
    const pool = new pg.Pool(config);
    pool.connect((err, client, done) => {
        if (err) throw err;
        client.query(`INSERT INTO "Chronometers"  VALUES (` +req.body.id+`, '`+req.body.duration +`', '2008-01-01 00:00:01','2008-01-01 00:00:01')`, (err, res) => {
            if (err)
                console.log(err.stack);
            else {
                console.log(res.rows);
            }
            pool.end()
        })
    })
};

exports.findAll = function(req, res) {
    console.log("entro al get  de prueba ")
};

