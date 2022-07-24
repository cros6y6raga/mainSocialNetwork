import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <>
            <div className={s.item}>
                <img src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/d2/31/GS29-8953.jpg"/>
                post 1
                <div>
                <span>like</span>
                </div>
            </div>
        </>
    );
};

export default Post;