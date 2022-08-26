import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message={'Hi Munkey'} likesCount={'0'}/>
                    <Post message={'How are you?'} likesCount={'5'}/>
                </div>
            </div>
        </>
    );
};

export default MyPosts;