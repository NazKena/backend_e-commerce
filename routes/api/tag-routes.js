const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/:id', async  (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const result = await Tag.findByPk(req.params.id)
    if (!result) {
      res.status(404).end()
    } else {
      res.json(result)
    }
  } catch (err) {
    res.status(500).end()
  }

});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
