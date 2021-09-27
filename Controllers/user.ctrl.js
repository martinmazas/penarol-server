const User = require('../Models/user');
const bcrypt = require("bcrypt");

exports.userDBController = {
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
                    res.json('Wrong password');
                }
                else {
                   console.log("connected to user");
                }
            }
            else {
                res.json('User does not exist');
            }
        })
        .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
}