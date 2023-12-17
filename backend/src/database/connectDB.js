import mongoose from 'mongoose'
import { logger } from '../utils/logger.js';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI)
    logger.info(`MongoDB Connected: ${connect.connection.host}`)
  } catch (error) {
    logger.debug(`ERROR: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;