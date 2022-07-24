import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <>
            <div className={s.content}>
                <div>
                    <img src="https://www.theplace.ru/archive/manchester_united/img/89802_18.jpg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={s.posts}>
                        <div className={s.item}>post 1</div>
                        <div className={s.item}>post 2</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;