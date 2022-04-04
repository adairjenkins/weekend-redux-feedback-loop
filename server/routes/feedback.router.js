const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const feedback = req.body;
    console.log('POST req.body:', feedback)
    const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) 
                       VALUES ($1, $2, $3, $4)`;

    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`POST error`, error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";')
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

module.exports = router;