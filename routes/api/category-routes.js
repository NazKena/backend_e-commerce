const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/:id', async (req, res) => {
  // find all categories
  try {
    const result = await Category.findByPk(req.params.id)
    if (!result) {
      res.status(404).end()
    } else {
      res.json(result)
    }
  } catch (err) {
    res.status(500).end()
  }
})
  // be sure to include its associated Products

  Category.findAll({ include:[Product]
  })

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
 try {
  await Category.create(req.body)
  res.status(204).end()
} catch (err) {
  res.status(500).end()
}
})

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

Category.delete ({

})
});

module.exports = router;
