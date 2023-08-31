const router = require('express').Router();
const { Recipe } = require('../../models/');

router.get('/', async (req, res) => {
	try {
		const recipes = await Recipe.find({});
		res.status(200).json(recipes);
	} catch (err) {
		res.status(500).end();
	}
});
router.get('/:recipe', async (req, res) => {
	try {
    console.log(req.params.recipe);
		const recipe = await Recipe.find({
			title: { $regex: new RegExp(req.params.recipe, 'i') },
		});

		res.status(200).json(recipe);
	} catch (err) {
		res.status(500).end();
	}
});

module.exports = router;
