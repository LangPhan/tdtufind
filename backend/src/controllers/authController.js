import { generateAccessToken } from "../middleware/jwtMiddleware.js";
import { createNewUser, findOneUser } from "../services/userService.js";
import { logger } from "../utils/logger.js";
import verifyGoogleToken from "../utils/verifyGoogleAuth.js";


const postAuth = async (req, res) => {
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
      //Create new user if first time login
      let userExists = await findOneUser(email)
      if (!userExists) {
        const user = await createNewUser(profile);
        if (user) {
          console.log(user);
          logger.info(`New user created: ${user.email}`)
          userExists = user
        }
      }

      //Generate token
      const token = generateAccessToken({
        id: userExists._id,
        email: userExists.email,
        fullName: userExists.fullName,
        roles: userExists.roles,
        avatar: userExists?.avatar,
      });
      logger.info(`New user login: ${email}`)
      res.status(201).json({
        message: "Login Successfully",
        data: {
          ...profile,
          token
        },
      })
    } else {
      logger.error("Credential not found")
      return res.status(401).json({
        message: "Credential not found"
      })
    }
  } catch (error) {
    logger.error(error.message)
    return res.status(500).json({
      message: error.message
    })
  }
}
export { postAuth }