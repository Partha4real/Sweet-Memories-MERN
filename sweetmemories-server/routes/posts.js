import express from 'express';
import { getPosts, createPost } from '../controller/posts.js';

const router = express.Router();

router.get('/getposts', getPosts)
router.post('/createpost', createPost)


export default router;