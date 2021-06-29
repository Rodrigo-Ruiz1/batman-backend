const express = require('express');
const { errors } = require('pg-promise');
const BatmanModel = require('../models/BatmanModel');
const router = express.Router();

router.get('/signup', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Create an account!',
        },
        partials: {
            body: 'partials/signup'
        }
    })
})

router.get('/login', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Login!',
        },
        partials: {
            body: 'partials/login'
        }
    })
})

router.post('/signup', async (req, res) => {
    const { full_name, email, password } = req.body;
    console.log("The Request Body is: ", req.body);
    res.sendStatus(200);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log("The Request Body is: ", req.body)
    res.sendStatus(200);
})

module.exports = router;