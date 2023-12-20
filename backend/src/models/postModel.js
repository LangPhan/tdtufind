import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  timeLost: {
    type: Date,
    required: true
  },
  placement: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  isSomething: {
    type: Boolean,
    default: true
  },
  isFound: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

const Post = mongoose.model('Post', postSchema)

export default Post
