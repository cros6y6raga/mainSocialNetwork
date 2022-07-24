import React from 'react';
import s from './Header.module.css';
const Header = () => {
    return (
        <>
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" alt=""/>
        </header>
        </>
    );
};

export default Header;