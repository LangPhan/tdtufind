import conversationService from '../services/conversationService.js'

const getSingleConversation = async (req, res) => {
  const conversationId = req.params.id
  try {
    const conversation = await conversationService.getConversationById(conversationId)
    if (conversation) {
      return res.status(200).json({ message: "Get conversation successfully", data: conversation })
    }
    return res.status(404).json({ message: "Not found conversation" })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const getConversationsOfUser = async (req, res) => {
  const userId = req.params.id
  const { page, pageSize } = req.query
  try {
    const conversations = await conversationService.getConversationByUser(userId, page, pageSize)
    return res.status(200).json({ data: conversations })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const postNewConversation = async (req, res) => {
  try {
    const conversation = req.body
    const newConversation = await conversationService.createNewConversation(conversation)
    if (newConversation) {
      return res.status(201).json({ message: "Create new conversation successfully", data: newConversation })
    }
    return res.status(404).json({ message: "Please provide full required field" })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export { getSingleConversation, getConversationsOfUser, postNewConversation }