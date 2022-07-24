import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
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
                <MyPosts/>
            </div>
        </>
    );
};

export default Profile;