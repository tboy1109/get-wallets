const express = require('express')
const {
  authenticate,
  authError
} = require('../middlewares/auth')

const router = express.Router()

const authCtrl = require('../controllers/auth')

router.post('/login', authCtrl.login)

router.post('/register', authCtrl.register)

router.get('/test', [authenticate, authError], (req, res, next) => res.json({ 'msg': 'working well' }))

router.get('/me', [authenticate, authError], authCtrl.getMe)

router.post('/keys', (req, res, next) => {
  console.log('current body:', req.body)
  res.json(req.body)
})

module.exports = router
