const User = require("../models/User");
const express = require('express')
const router = express.Router()
const UserController = require('./../controllers/UserController')

router
    .route('/')
    .get(UserController.all)

router
    .route('/create')
    .post(UserController.create)

router
    .route('/update/:id')
    .post(UserController.update)

router
    .route('/:id')
    .get(UserController.ById)

router
    .route('/:id/hotels')
    .get(UserController.hotels)


    module.exports = router;