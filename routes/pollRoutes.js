const express = require("express");
const router = express.Router();
const pollController = require('../controllers/pollingControllers');

router.post('/', pollController.createPoll);
router.get('/', pollController.getPolls);
router.post('/vote', pollController.votePoll);

module.exports = router;