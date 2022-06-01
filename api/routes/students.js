const express = require('express'); //improted express package
const router = express.Router(); //using built-in-function Router in express package

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get Request"
    })
})
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Post Request"
    })
})
module.exports = router;