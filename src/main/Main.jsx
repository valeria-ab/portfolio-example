import React from 'react';
import s from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${styleContainer.container} ${s.mainBlockContainer}`}>
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
