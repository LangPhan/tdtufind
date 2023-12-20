import { OAuth2Client } from 'google-auth-library'
import { logger } from './logger.js'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const client = new OAuth2Client(GOOGLE_CLIENT_ID)

export default async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID
    })
    return { payload: ticket.getPayload() }
  } catch (error) {
    logger.error("Invalid user detected")
    return { error: "Invalid user detected. Please try again" }
  }
}