const jwt = require('jsonwebtoken');

const generateToken =(id) => {

      return jwt.sign({id},"swetha1234",{
            expiresIn: "30d",

      });
};


module.exports = generateToken;

