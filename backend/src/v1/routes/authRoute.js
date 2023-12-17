import express from 'express'
import { getAuth } from '../../controllers/authController.js';
import { isAdmin, verifyToken } from '../../middleware/jwtMiddleware.js';
const router = express.Router()

router.post("/", getAuth)
router.get("/", verifyToken, (req, res) => {
  res.json({ message: 'Protected Route' })
})
router.get("/admin", verifyToken, isAdmin, (req, res) => {
  res.json({ message: 'Welcome to admin dashboard' })
})

export default router;