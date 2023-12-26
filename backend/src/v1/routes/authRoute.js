import express from 'express'
import { postAuth } from '../../controllers/authController.js';
import { isAdmin, verifyToken } from '../../middleware/jwtMiddleware.js';
const router = express.Router()

router.post("/", postAuth)
router.get("/hello", (req, res) => {
  res.json({ message: 'Hello' })
})
router.get("/", verifyToken, (req, res) => {
  res.json({ message: 'Token is valid', data: req.decoded })
})
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'Welcome to admin dashboard' })
})

export default router;