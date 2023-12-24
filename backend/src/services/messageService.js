import Conversation from "../models/conversationModel.js"
import Message from "../models/messageModel.js"
import { logger } from "../utils/logger.js"

const getMessageById = async (messageId) => {
  try {
    const message = await Message.findById(messageId)
      .populate({
        path: 'conversation',
        populate: 'members'
      })
    return message
  } catch (error) {
    logger.debug("getMessageById: ", error)
    throw new Error(error)
  }
}

const getMessagesByConversation = async (conversationId, page, pageSize) => {
  const pageNumber = parseInt(page, 10) || 1
  const size = parseInt(pageSize, 10) || 10
  const skip = (pageNumber - 1) * size
  try {
    const messages = await Message.find({ conversation: conversationId })
      .sort({ updatedAt: -1 }).skip(skip).limit(size)
    const totalMessages = await Message.countDocuments({ conversation: conversationId })
    return { messages, totalMessages }
  } catch (error) {
    logger.debug("getMessagesByConversation: ", error)
    throw new Error(error)
  }
}

const createNewMessage = async (message) => {
  try {
    const newMessage = await Message.create({
      conversation: message.conversation,
      sender: message.sender,
      content: message.content,
    })
    await Conversation.findOneAndUpdate({ _id: newMessage.conversation }, { messageLatest: newMessage._id })
    return newMessage
  } catch (error) {
    logger.debug("createNewMessage: ", error)
    throw new Error(error)
  }
}
export default { getMessageById, createNewMessage, getMessagesByConversation }