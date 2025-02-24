const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.Index);

router.get('/:id/', controller.Show)
router.get('/:id/:season', controller.Show)


// router.post('/', controller)

// router.put('/', controller)

// router.patch('/', controller)

// router.destroy('/', controller)


module.exports = router