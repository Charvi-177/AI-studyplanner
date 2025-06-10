const express = require('express');
const router = express.Router();
const { generateSchedule } = require('../controllers/plannerController');

router.post('/generate', generateSchedule);

module.exports = router;
