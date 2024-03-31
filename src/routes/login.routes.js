const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Login = require('../models/login.model')

router.post('/', async (req, res) => {
    try {
        const login = req.body
        const resultado = await new Login(login).save();
        res.status(201).send(resultado);
    } catch (err) {
        res.json({ error: true, message: err.message })
    }
})

module.exports = router