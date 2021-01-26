import express from 'express';
import { getPosts, createPost, updatePost, deletepost, likepost } from '../controller/posts.js';

const router = express.Router();

router.get('/getposts', getPosts);
router.post('/createpost', createPost);
router.post('/updatepost/:id', updatePost);
router.delete('/deletepost/:id', deletepost);
router.post('/likepost/:id', likepost);


export default router;