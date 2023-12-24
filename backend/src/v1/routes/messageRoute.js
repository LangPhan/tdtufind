
import express from 'express'
import { getMessagesByConversation, getSingleMessage, postNewMessage } from '../../controllers/messageController.js'

const router = express.Router()

router.get("/:id", getSingleMessage)
router.get("/conversation/:id", getMessagesByConversation)
router.post("", postNewMessage)

export default router