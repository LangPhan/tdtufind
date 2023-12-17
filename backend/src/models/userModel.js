import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    roles: {
      type: [String],
      default: ['USER']
    }
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User