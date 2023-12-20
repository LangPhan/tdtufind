import multer from 'multer'

const storage = multer.diskStorage({
  destination: "uploads/",
})

const upload = multer({ limits: { fieldSize: 1024 * 1024 * 2 }, storage: storage }).array('images', 5)

export default upload