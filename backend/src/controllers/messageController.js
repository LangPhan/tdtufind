import messageService from '../services/messageService.js'

const getSingleMessage = async (req, res) => {
  const messageId = req.params.id
  try {
    const message = await messageService.getMessageById(messageId)
    if (message) {
      return res.status(200).json({ message: 'Get message successfully', data: message })
    }
    return res.status(404).json({ message: 'Message not found' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const getMessagesByConversation = async (req, res) => {
  const conversationId = req.params.id
  const { page, pageSize } = req.query
  try {
    const messages = await messageService.getMessagesByConversation(conversationId, page, pageSize)
    if (messages) {
      return res.status(200).json({ message: 'Get messages by conversation successfully', data: messages })
    }
    return res.status(404).json({ message: 'Not found message for this conversation' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const postNewMessage = async (req, res) => {
  const message = req.body
  try {
    const newMessage = await messageService.createNewMessage(message)
    if (newMessage) {
      return res.status(201).json({ message: "Create new message successfully", data: newMessage })
    }
    return res.status(400).json({ message: 'Please provide full required field' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

export { getSingleMessage, getMessagesByConversation, postNewMessage }