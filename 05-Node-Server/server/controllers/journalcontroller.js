let express = require('express');
let router = express.Router();


router.get('/practice', function (req, res)
{
    res.send('Hey!! This is a practice route!')
})

router.get('/about', function(req, res)
{
    res.send('Thats what Im talking about')
})

module.exports = router