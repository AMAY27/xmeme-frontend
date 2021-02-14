const express = require('express')
const MemeCtrl = require('../controllers/ctrl')
const router = express.Router()
router.post('/meme', MemeCtrl.insertmeme)
router.get('/memes', MemeCtrl.getMemes)
router.get('/memes/:id', MemeCtrl.getMemesbyId)
module.exports = router;