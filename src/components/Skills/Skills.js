import React from 'react';
import { DiCss3Full, DiHtml5, DiReact, DiSass } from 'react-icons/di';
import { SiJavascript, SiNodeDotJs } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Title from '../Title/Title';
import skillStyles from './skills.module.scss';

const Skills = () => {
  return (
    <>
      <div className={`${skillStyles.Title}`} />
      <Title title="Skills" />
      <IconContext.Provider value={{ style: { fontSize: '15em', padding: '3rem' } }}>
        <div>
          <DiHtml5 className={`${skillStyles.Html}`} />
          <DiCss3Full className={`${skillStyles.Css}`} />
          <DiSass className={`${skillStyles.Sass}`} />
          <SiJavascript className={`${skillStyles.JsSkill}`} />
          <DiReact className={`${skillStyles.React}`} />
          <SiNodeDotJs className={`${skillStyles.Node}`} />
          <AiOutlineConsoleSql className={`${skillStyles.Sql}`} />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
