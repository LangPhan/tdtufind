import express from 'express'
import { postNewPost, getOnePost, deleteOnePost, patchOnePost, getManyPostsWithCustom } from '../../controllers/postController.js';
import upload from '../../middleware/multerMiddleware.js';

const router = express.Router()

router.get("/:id", getOnePost)
router.get("/", getManyPostsWithCustom)
router.post("/", upload, postNewPost)
router.patch("/:id", patchOnePost)
router.delete("/:id", deleteOnePost)

export default router;