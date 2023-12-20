import express from 'express'
import v1authRouter from './v1/routes/authRoute.js'
import v1postRouter from './v1/routes/postRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import connectDB from './database/connectDB.js'
import { logger } from './utils/logger.js'
import { configCloud } from './utils/uploadImage.js'
import { verifyToken } from './middleware/jwtMiddleware.js'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

connectDB()
configCloud()

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/auth", v1authRouter)
app.use("/api/v1/posts", verifyToken, v1postRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Sever is running at port ${PORT}`)
})