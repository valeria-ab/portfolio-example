import React from 'react';
import s from './Main.module.css';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
            <div className={s.text}>
                <span>Hi there!</span>
                <h1>I am Vasya Pupkin</h1>
                <p>A Graphic Designer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default Main;
