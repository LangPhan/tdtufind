import { generateAccessToken } from "../middleware/jwtMiddleware.js";
import { createNewUser, fineOneUser } from "../services/userService.js";
import { logger } from "../utils/logger.js";
import verifyGoogleToken from "../utils/verifyGoogleAuth.js";


const getAuth = async (req, res) => {
  try {
    if (req.body.credential) {
      const verificationRes = await verifyGoogleToken(req.body.credential);
      if (verificationRes.error) {
        logger.error(`Verify Google Token error: ${verificationRes.error}`)
        return res.status(400).json({
          message: verificationRes.error,
        })
      }
      const profile = verificationRes?.payload
      const email = profile.email
      let roles = []
      //Create new user if first time login
      const userExists = await fineOneUser(email)
      if (!userExists) {
        const user = await createNewUser(profile);
        if (user) {
          logger.info(`New user created: ${user.email}`)
          roles = user.roles
        }
      } else {
        roles = userExists.roles
      }
      //Generate token
      const token = generateAccessToken({
        email: email,
        roles: roles
      });
      logger.info(`New user login: ${email}`)
      res.status(201).json({
        message: "Login Successfully",
        user: {
          ...profile,
          token
        },
      })
    }
  } catch (error) {
    logger.error(error)
    res.status(500).json({
      message: error
    })
  }
}
export { getAuth }