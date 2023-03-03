const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const result = await Product.findAll()
    if (!result) {
      res.status(404).end()
    } else {
      res.json(result)
    }
  } catch (err) {
    res.status(500).end()
  }
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const results = await Product.findByPk(req.params.id, {
      include: [{model: Category}, {model:Tag}]
    })
    res.json(results)
  } catch (err) {
    res.status(500).end()
  }
})

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

  // update product data
  router.put('/:id', async (req, res) => {
    // update a product by its `id` value
    try{
      // update a products's name by its `id` value
      const productData = await Product.update(
        {
          product_name: req.body.product_name
        },
        {
          where: {
            id: req.params.id
          }
        }
      ) 
      res.status(200).json(productData)
    } catch (err) {
      res.status(500).json(err)
    }
    }
    );

router.delete('/:id', async(req, res) => {
  // delete one product by its `id` value
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res
      .status(200)
      .json({ message: "requested product has been deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
});

module.exports = router;
