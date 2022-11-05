const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.header('authorization-token');
    if (!token) return res.status(401).send('Access denied');

    try{
        const userVerified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    }catch(e){
        res.status(401).send('Access denied');
    }
}