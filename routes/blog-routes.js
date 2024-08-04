import express from 'express'
import { getAllBlogs,createNewBlog ,updateBlog,getBlogById, deleteBlogById} from '../controllers/blog-controller';

const blogRouter = express.Router();

blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",createNewBlog)
blogRouter.put("/update/:id",updateBlog)
blogRouter.get("/:id",getBlogById)
blogRouter.delete("/:id",deleteBlogById)

export default blogRouter