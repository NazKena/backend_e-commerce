const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
    // be sure to include its associated Products
  try {
    const result = await Category.findAll()
    if (!result) {
      res.status(404).end()
    } else {
      res.json(result)
    }
  } catch (err) {
    res.status(500).end()
  }
})

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const results = await Category.findByPk(req.params.id)
    res.json(results)
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    await Category.update(req.body)
    res.status(204).end()
  } catch (err) {
    res.status(500).end()
  }
})

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ message: "requested category has` been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

module.exports = router;
