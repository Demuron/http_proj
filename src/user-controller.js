// const users = [
//     { id: 1, name: 'dimuron' },
//     { id: 2, name: 'user2' },
// ];
const User = require('./user-model');

const getUsers = async (req, res) => {
    // if (req.params.id) {
    //     return res.send(
    //         users.find((user) => {
    //             return user.id === Number(req.params.id);
    //         })
    //     );
    // }
    let users;
    if (req.params.id) {
        users = await User.find({ _id: req.params.id });
    } else {
        users = await User.find();
    }
    res.send(users);
};

const createUser = async (req, res) => {
    // console.log(req.body);
    // const user = req.body;
    // users.push(user);
    // res.send(user);
    const user = await User.create(req.body);
    res.send(user);
};

module.exports = {
    getUsers,
    createUser,
};
