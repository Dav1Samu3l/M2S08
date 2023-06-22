const router = require('express').Router()

router.get('/trainees', async (req, res) => {
    // Obtenha todos os estagiários do banco de dados usando o modelo Trainee
    const trainees = await Trainee.findAll();
    // Envie a resposta com a lista de estagiários
    res.json(trainees);
  });
  