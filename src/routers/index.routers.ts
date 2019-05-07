import { Router } from 'express'
import { indexWelcome } from '../controllers/index.controller';
const router = Router();

router.route('/').get((req, res) => {
    indexWelcome(req, res);
});

export default router;