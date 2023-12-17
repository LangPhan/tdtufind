import User from "../models/userModel.js"


const fineOneUser = async (email) => {
  const user = await User.findOne({ email })
  return user
}

const createNewUser = async (userData) => {
  const user = await User.create({
    fullName: userData.name,
    email: userData.email
  })
  return user
}

export { fineOneUser, createNewUser }


