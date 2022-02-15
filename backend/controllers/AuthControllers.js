const User = require('../models/User');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SCRT_TOKEN = process.env.SCRT_TOKEN || '61e54edd1875b1301e7f8455'

exports.login = async (req, res) => {
    let data = req.body;

    User.findOne({ email: data.email }).then(user => {

        if (user && user.password == req.body.password) { // Login true
            let token = jwt.sign(
                {
                    _id: user._id,
                    email: user.email,
                    role: user.role
                },
                SCRT_TOKEN,
                {
                    expiresIn: "100d"
                }
            )

            res.json({
                token: token,
                user: user
            });
        } else {
            res.status(400).json({
                message: 'Info in correct'
            });
        }

    });
};

exports.register = async (req, res) => {
    let data = req.body;
    if(data.role == 'admin') res.status(400).json({message: 'this role is not available!'})

    const user = await User.create({
        'name': data.name,
        'email': data.email,
        'password': data.password,
        'role':  'client',
    })

    try {
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}