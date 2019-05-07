import { Router } from 'express'
import { getPosts } from '../controllers/post.controller';
const router = Router();

router.route('/').get((req, res) => {
    getPosts(req, res);
});

export default router;