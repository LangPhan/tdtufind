import express from 'express'
import { getConversationsOfUser, getSingleConversation, postNewConversation } from '../../controllers/conversationController.js'

const router = express.Router()

router.get("/:id", getSingleConversation)
router.get("/user/:id", getConversationsOfUser)
router.post("", postNewConversation)

export default router