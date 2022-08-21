const express = require('express');
const Restrurant = require('../model/restaurants.schema');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const re = await new Restrurant(req.body).save();
    res.json(re);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
  // md('restaurants', async coll => {
  //   const re =await coll.insertOne(req.body);
  // res.json(re);
  // })

})

router.get('/', async (req, res) => {
  res.json(await Restrurant.find(req.query));
  // md('restaurants', async coll => {
  //   const list = await coll.find(req.query).toArray()
  //   res.json(list);
  // })
})

router.get('/:id', async (req, res) => {
  res.json(await Restrurant.findById(req.params.id));
  // md('restaurants', async coll => {
  //   const list = await coll.find(req.query).toArray()
  //   res.json(list);
  // })
})

router.put('/:id', async (req, res) => {
  res.json(await Restrurant.findByIdAndUpdate(req.params.id,req.body));
})


module.exports = router;