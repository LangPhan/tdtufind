import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import http from 'http'

import v1authRouter from './v1/routes/authRoute.js'
import v1postRouter from './v1/routes/postRoute.js'
import v1conversationRouter from './v1/routes/conversationRoute.js'
import v1messageRouter from './v1/routes/messageRoute.js'

import connectDB from './database/connectDB.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import { logger } from './utils/logger.js'
import { configCloud } from './utils/uploadImage.js'
import { verifyToken } from './middleware/jwtMiddleware.js'
import initSocket from './utils/socket.js'

const app = express()
const server = http.createServer(app)
initSocket(server)

dotenv.config()
const PORT = process.env.PORT || 5000

connectDB()
configCloud()

app.use(
  cors({
    origin: '*',
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/auth", v1authRouter)
app.use("/api/v1/posts", verifyToken, v1postRouter)
app.use("/api/v1/conversations", verifyToken, v1conversationRouter)
app.use("/api/v1/messages", verifyToken, v1messageRouter)


app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  logger.info(`Sever is running at port ${PORT}`)
})