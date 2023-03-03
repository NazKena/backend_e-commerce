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

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const results = await Tag.findOne()
    res.json(results)
  } catch (err) {
    res.status(500).end()
  }
})
router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
    .then((newTag) => {
      res.status(200).json(newTag);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    await Tag.update(req.body)
    res.status(204).end()
  } catch (err) {
    res.status(500).end()
  }
})
router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  const result = await Tag.delete({
    where: {
      id: req.params.id
    }
  })
  if (result === 0) {
    res.status(404).end()
  } else {
    res.status(204).end()
  }
})

module.exports = router;
