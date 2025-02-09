import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import util from 'util';
import { logger } from './logger.js';

const unlinkAsync = util.promisify(fs.unlink);

const configCloud = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_KEY,
      api_secret: process.env.CLOUD_SECRET
    });
    logger.info("Connect cloud successfully")
  } catch (error) {
    logger.error("Error when connecting cloud. " + error)
  }
}

const uploadImagesToCloud = async (files) => {
  try {
    const uploadPromises = files.map(async file => {
      return cloudinary.uploader.upload(file.path, {
        folder: 'TDTU_FIND'
      });
    });
    const results = await Promise.all(uploadPromises);
    logger.info('Upload images to cloud successfully')
    return results.map(result => result.secure_url);
  } catch (error) {
    logger.error("Error upload image: ", error)
    throw new Error(error)
  } finally {
    //Delete multer file after upload images to cloud
    for (const file of files) {
      await unlinkAsync(file.path)
    }
  }
}

export { configCloud, uploadImagesToCloud };
