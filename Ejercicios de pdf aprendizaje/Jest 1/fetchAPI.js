const axios = require('axios');

const urlEndpoint = 'http://jsonplaceholder.typecode.com/users/';

const getUsers = async () => {
    try {
        const res = await axios.get(urlEndpoint);
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = {urlEndpoint, getUsers};