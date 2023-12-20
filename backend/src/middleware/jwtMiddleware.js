import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const SECRET_KEY = process.env.SECRET_KEY

const generateAccessToken = (data) => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "10d" })
}

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({
      message: 'No token provided'
    })
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' })
    }
    req.decoded = decoded
    next()
  })
}

const isAdmin = (req, res, next) => {
  const roles = req.decoded.roles
  if (!roles.includes("ADMIN")) {
    return res.status(403).json({ message: 'Please using admin account to access this resource!' })
  }
  next()
}

export { generateAccessToken, verifyToken, isAdmin }