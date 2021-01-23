import React from 'react';
import moment from 'moment';
import './Post.css';
import {Card, CardActions , CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Post({post}) {
    return (
        <Card className="card">
            <CardMedia className="card__media" image={post.selectedFile} title={post.title} />
            <div className="card__overlay1">
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="card__overlay2">
                <Button style={{color: 'white'}} size="small" onClick={()=> {}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className="card__details">
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className="card__message" variant="h6" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className="card__Actions">
                <Button size="small" color="primary" onClick={()=> {}}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=> {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;