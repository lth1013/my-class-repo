const router = require('express').Router();
const recipesRoutes = require('./recipesRoutes');

router.use('/recipes', recipesRoutes);

module.exports = router;
