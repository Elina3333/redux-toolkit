import React, {FC} from 'react';
import {IPost} from "../models/IPosts";

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
            <button>Delete</button>
        </div>
    );
};

export default PostItem;