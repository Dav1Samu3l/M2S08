const { Router } = require('express');
const router = Router();
const { Category } = require('../models/Category');

router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).send('Category not found');
  }
});

router.post('/', async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

router.put('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.update(req.body);
    res.json(category);
  } else {
    res.status(404).send('Category not found');
  }
});

router.delete('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id);
  if (category) {
    await category.destroy();
    res.send('Category deleted');
  } else {
    res.status(404).send('Category not found');
  }
});

module.exports = router;
