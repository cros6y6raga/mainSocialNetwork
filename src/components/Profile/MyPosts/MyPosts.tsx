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
                    <Post message={'Hi Munkey'}/>
                    <Post message={'How are you?'}/>
                </div>
            </div>
        </>
    );
};

export default MyPosts;