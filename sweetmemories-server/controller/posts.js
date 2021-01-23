import mongoose from 'mongoose';
import PostMessage from '../models/posts.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();

        if (posts) {
            res.status(200).json(posts);
        }
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send('No post with that Id')
        }
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true})
        res.json(updatedPost);
    } catch (error) {
        console.log(error)
    }
}