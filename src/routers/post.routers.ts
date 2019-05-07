import { Router } from "express";
import { getPosts, getPost, createPost, deletePost, updatePost } from "../controllers/post.controller";
const router = Router();

/* router.route('/').get((req, res) => {
    getPosts(req, res);
});
 */
router.route("/")
  .get(getPosts)
  .post(createPost);

router.route('/:postID')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;
