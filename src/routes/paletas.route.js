const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const express = require('express');
const router = express.Router();
const {
  validId,
  validObjectBody,
} = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-paletas', paletasController.findPaletasController);

router.get(
  '/one-paleta/:id',
  validId,
  paletasController.findPaletaByIdController,
);

router.post(
  '/create-paleta',
  validObjectBody,
  paletasController.createPaletaController,
);

router.put(
  '/update-paleta/:id',
  validId,
  validObjectBody,
  paletasController.updatePaletaController,
);

router.delete(
  '/delete-paleta/:id',
  validId,
  paletasController.deletePaletaController,
);

module.exports = router;
