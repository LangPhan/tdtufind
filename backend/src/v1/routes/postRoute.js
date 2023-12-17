import express from 'express'

const router = express.Router()

router.get("/", (req, res) => {
  res.send("Hello post route")
})

export default router;