import { Router } from "express";
import { getPosts, createPost } from "../controllers/post.controller";
const router = Router();

/* router.route('/').get((req, res) => {
    getPosts(req, res);
});
 */
router.route("/")
  .get(getPosts)
  .post(createPost);

export default router;
