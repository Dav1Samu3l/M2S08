const router = require('express').Router()

router.get('/trainees', async (req, res) => {
    const trainees = await Trainee.findAll();
    res.json(trainees);
  });
  