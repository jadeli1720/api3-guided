//shortcut
const router = require('express').Router();

//custom middleware:
function uppercaser(req, res, next) {
    let name = req.params.name;

    if(name) {
        req.name = name.toUpperCase();
    }
    // this sends the request to the next middleware (or route handler)
    next();
};


router.get('/', (req, res) => {
    res.send('get to /suppliers/')
})

router.get('/:name', uppercaser, (req, res) => {
    //express needs to know there is a url parameter to collect and show it
    res.send(`get to /suppliers/${req.params.name}`)
})

module.exports = router;