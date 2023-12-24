import postService from "../services/postService.js"
import { logger } from "../utils/logger.js";
import { uploadImagesToCloud } from "../utils/uploadImage.js";


const getOnePost = async (req, res) => {
  const postId = req.params.id;
  const post = await postService.getOnePost(postId)
  if (!post) {
    logger.warn(`Not found post with id: ${postId}`)
    return res.status(404).json({ message: "Not found post" })
  }
  logger.info(`{Post ${postId} was found}`)
  return res.status(200).json({ message: "Post was found", data: post })
}

const getManyPostsWithCustom = async (req, res) => {
  const { query, sortBy, orderBy, page, pageSize } = req.query
  try {
    let sortOrder = -1;
    if (orderBy) {
      orderBy === "DESC" ? sortOrder : sortOrder = 1
    }
    const posts = await postService.getManyPostFilterAndSort(query, sortBy, page, pageSize, sortOrder)
    if (!posts) {
      logger.warn("Not found any post match")
      return res.status(404).json({ message: "Not found any post" })
    }
    return res.status(200).json({ message: "Posts was found", total: posts.totalPosts, data: posts.posts })
  } catch (error) {
    logger.error(error)
    return res.status(400).json({ message: error })
  }
}

const postNewPost = async (req, res) => {
  const postData = req.body
  const currentUserId = req.decoded.id;
  let images = [];
  if (!postData.content || !postData.timeLost || !postData.placement || !postData.type) {
    logger.warn("Missing required field when creating new post")
    return res.status(400).json({ message: "Please provide full required field" })
  }
  if (req.files) {
    const imagesRes = await uploadImagesToCloud(req.files)
    if (!imagesRes) {
      return res.status(501).json({ message: "Something wrong when upload image to could" })
    }
    images = [...imagesRes]
  }
  try {
    const newPost = await postService.createNewPost({ ...postData, author: currentUserId, images })
    logger.info(`New post was created ${newPost._id}`)
    return res.status(201).json({
      message: "Create new post successfully",
      data: newPost
    })
  } catch (error) {
    return res.status(400).json({
      message: "Please validation field value",
      description: error.message
    })
  }
}

const patchOnePost = async (req, res) => {
  const postId = req.params.id
  const postData = req.body
  const currentUserId = req.decoded.id
  try {
    const currentPost = await postService.getOnePost(postId)
    if (currentPost.author !== currentUserId) {
      logger.debug(`Current user: ${currentUserId} \nAuthor: ${currentPost.author}`)
      return res.status(403).json({ message: "Current user can not edit this post" })
    }
    const updatePost = await postService.updateOnePost(postId, postData)
    if (updatePost) {
      return res.status(200).json({ message: "Update post successfully", data: updatePost })
    }
    return res.status(404).json({ message: 'Post not found' })
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

const deleteOnePost = async (req, res) => {

  const postId = req.params.id;
  try {
    const deletedPost = await postService.deletePostById(postId);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json({ message: "Delete post successfully" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export { getOnePost, postNewPost, patchOnePost, deleteOnePost, getManyPostsWithCustom }