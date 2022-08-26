import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string,
    likesCount:string
}
const Post = (props:PostType) => {
    return (
        <>
            <div className={s.item}>
                <img src="https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/d2/31/GS29-8953.jpg"/>
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
        </>
    );
};

export default Post;