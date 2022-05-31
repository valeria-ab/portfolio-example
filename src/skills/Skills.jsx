import React from 'react';
import s from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsBlockContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} description={"lorem ipsum dolor"}/>
                    <Skill title={"CSS"} description={"lorem ipsum dolor"}/>
                    <Skill title={"React "} description={"lorem ipsum dolor jgjhjkhjskdjosieoweiwghcvckjjd sdkjsl.hafja.hfhkdfh"}/>
                </div>

            </div>
        </div>
    );
}

export default Skills;
