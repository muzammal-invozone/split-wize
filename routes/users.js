const router = require('express').Router();

router.get('/', (_req, res)  => {
    res.json({ message: `Server is running on ${process.env.PORT}` });
});

module.exports = router;
