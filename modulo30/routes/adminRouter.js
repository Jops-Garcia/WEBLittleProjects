const express = require('express');

const router = express.Router();
const auth = require('../controllers/authController');

router.get('/',auth, (req, res) =>{
    if(req.user.admin){
        res.send('ADM');
    }else{
        res.status(401).send('Not admin: Access denied');
    }
})

router.get('/free',auth, (req, res) =>{
    res.status(401).send('Logged person');
})


module.exports =router;