import mongoose, { Schema } from 'mongoose'

const conversationSchema = mongoose.Schema({
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messageLatest: { type: Schema.Types.ObjectId, ref: 'Message' }
}, {
  timestamps: true
})

const Conversation = mongoose.model('Conversation', conversationSchema)
export default Conversation