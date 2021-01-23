import express from 'express';
import { getPosts, createPost, updatePost } from '../controller/posts.js';

const router = express.Router();

router.get('/getposts', getPosts);
router.post('/createpost', createPost);
router.post('/updatepost/:id', updatePost);


export default router;