import React from 'react';
import {IPost} from '../models/IPosts';
import {postApi} from "../services/postService";
import PostItem from "./postItem";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(100);
    const [createPost,{}] = postApi.useCreatePostMutation();

    async function createPostHandler() {
        const title = prompt("enter title");
        await createPost({title,body:title} as IPost);
    }

    return (
        <div className='posts__list'>
            <button onClick={createPostHandler}>Create</button>
            {isLoading && <div>Loading...</div>}
            {error && <div>Failed to load</div>}
            {posts && posts.map((post: IPost) => {
                    return <PostItem key={post.id} post={post}/>;
                }
            )}
        </div>
    );
};

export default PostContainer;