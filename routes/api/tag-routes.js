const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async  (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const result = await Tag.findAll ()
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
  try{
    // update a tag's name by its `id` value
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    ) 
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
  }
  );

router.delete('/:id', async (req, res) => {
    // delete a tag by its `id` value
    try {
      const tagData = await Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      res
        .status(200)
        .json({ message: "requested tag has been deleted" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json(error);
    }
  });
  

module.exports = router;

  // delete on tag by its `id` value
