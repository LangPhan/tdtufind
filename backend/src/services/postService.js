
import Post from "../models/postModel.js"
import { logger } from "../utils/logger.js";

const getOnePost = async (id) => {
  try {
    const post = await Post.findById(id).populate({
      path: 'author',
      select: '_id fullName email'
    });
    return post;
  } catch (error) {
    logger.debug("getOnePost: ", error)
  }
}

const getManyPostFilterAndSort = async (query, sortBy = 'createdAt', page, pageSize, sortOrder) => {
  const pageNumber = parseInt(page, 10) || 1
  const size = parseInt(pageSize, 10) || 10
  const skip = (pageNumber - 1) * size
  const filter = {}
  if (query) {
    filter.$or = [
      { content: { $regex: new RegExp(query, 'i') } },
      { placement: { $regex: new RegExp(query, 'i') } },
      { type: { $regex: new RegExp(query, 'i') } }
    ]
  }
  const sort = {}
  if (sortBy) {
    sort[sortBy] = sortOrder
  }

  try {
    const posts = await Post.find(filter).sort(sort).skip(skip).limit(size).populate({
      path: 'author',
      select: '_id fullName email'
    });
    const totalPosts = await Post.countDocuments(filter)
    return { posts, totalPosts }
  } catch (error) {
    throw new Error(error)
  }

}

const createNewPost = async (newPost) => {
  const dateTimeString = newPost.timeLost.trim()
  const dateTime = new Date(dateTimeString)
  try {
    const post = await Post.create({
      author: newPost.author,
      content: newPost.content,
      timeLost: dateTime,
      images: newPost.images,
      placement: newPost.placement,
      type: newPost.type
    })
    return post
  } catch (error) {
    logger.error(`Error when creating post service: ${error}`)
    throw new Error(error)
  }
}

const updateOnePost = async (id, updatePost) => {
  try {
    const filter = { _id: id }
    const updatedPost = await Post.findOneAndUpdate(filter, updatePost, { returnOriginal: false })
    return updatedPost
  } catch (error) {
    logger.error('Error when updating post service: ', error)
    throw new Error(error)
  }
}

const deletePostById = async (id) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    logger.info(`Delete post ${id} successfully`)
    return deletedPost
  } catch (error) {
    logger.error('Error when deleting post service', error)
    throw new Error(error)
  }
}

export default { getOnePost, getManyPostFilterAndSort, createNewPost, updateOnePost, deletePostById }