const User = require('../Models/user');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const privateKey = process.env.PRIVATE_KEY;

exports.userDBController = {
    getUsers(req, res) {
        User.find({})
        .then(docs => console.log(docs))
        .catch(err => console.log(`${err}`));
    },
    addUser(req, res) {
        const newUser = new User({
            "name": req.body.name,
            "email": req.body.email,
            "password": bcrypt.hashSync(req.body.password, 10)
        });
        newUser.save()
            .then(docs => console.log(docs))
            .catch(err => console.log(err));
    },
    login(req, res) {
        User.findOne({ email: req.params.email })
            .then(docs => {
                if (docs) {
                    if (!bcrypt.compareSync(req.body.password, docs.password)) {
                        res.json('Wrong user or password');
                    }
                    else {
                        const id = docs._id;
                        const token = jwt.sign({ id }, privateKey);
                        res.cookie('token', token, { maxAge: 6000000, sameSite: 'none', secure: true });
                        res.json("Successfully connected");
                    }
                }
                else {
                    res.json('User does not exist');
                }
            })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
}