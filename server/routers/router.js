const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/', controller.Index)

// router.get('/', controller)

// router.post('/', controller)

// router.put('/', controller)

// router.update('/', controller)

// router.destroy('/', controller)


module.exports = router