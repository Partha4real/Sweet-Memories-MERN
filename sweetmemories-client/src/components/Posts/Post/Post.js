import React from 'react';
import moment from 'moment';
import './Post.css';
import {Card, CardActions , CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useDispatch} from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';


function Post({post, setCurrentId}) {
    const dispatch = useDispatch();

    return (
        <Card className="card">
            <CardMedia className="card__media" image={post.selectedFile} title={post.title} />
            <div className="card__overlay1">
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="card__overlay2">
                <Button style={{color: 'white'}} size="small" onClick={()=> setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className="card__details">
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className="card__message" variant="h6" gutterBottom>{post.title}</Typography>
                <Typography className="card__message" color="textSecondary" component="p" variant="body2" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className="card__Actions">
                <Button size="small"  onClick={()=> dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon color="primary" fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small"  onClick={()=> dispatch(deletePost(post._id))}>
                    <DeleteIcon color="secondary" fontSize="small" />
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;