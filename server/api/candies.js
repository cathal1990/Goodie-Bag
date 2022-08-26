const router = require('express').Router()
const Candy = require('../db/models/Candy')

router.get('/', async(req, res, next) => {
    try{
        const candies = await Candy.findAll()
        res.send(candies)
    }
    catch(e){
        next(e)
    }
})

module.exports = router