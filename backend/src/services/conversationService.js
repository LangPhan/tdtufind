import Conversation from "../models/conversationModel.js";
import { logger } from "../utils/logger.js";

const getConversationById = async (id) => {
  try {
    const conversation = await Conversation.findById(id)
      .populate({
        path: 'messageLatest',
        select: 'sender content createdAt',
        populate: {
          path: 'sender',
          select: 'fullName avatar'
        }
      })
    return conversation
  } catch (error) {
    logger.debug('getConversationById :', error)
    throw new Error(error)
  }
}

const getConversationByUser = async (userId, page, pageSize) => {
  const pageNumber = parseInt(page, 10) || 1
  const size = parseInt(pageSize, 10) || 10
  const skip = (pageNumber - 1) * size
  try {
    const conversations = await Conversation.find({ members: userId })
      .sort({ updatedAt: -1 }).skip(skip).limit(size)
      .populate({
        path: 'messageLatest',
        select: 'sender content createdAt',
        populate: {
          path: 'sender',
          select: 'fullName avatar'
        }
      })
    const totalConversations = await Conversation.countDocuments({ members: userId })
    return { conversations, totalConversations }
  } catch (error) {
    logger.debug('getConversationByUser: ', error)
    throw new Error(error)
  }
}

const createNewConversation = async (conversation) => {
  try {
    const newConversation = await Conversation.create({
      members: conversation.members
    })
    return newConversation
  } catch (error) {
    logger.debug('createNewConversation: ', error)
    throw new Error(error)
  }
}

export default { getConversationById, getConversationByUser, createNewConversation }