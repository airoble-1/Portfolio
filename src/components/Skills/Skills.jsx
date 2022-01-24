import React from 'react';
import { DiCss3Full, DiHtml5, DiReact, DiSass } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { BsFillBootstrapFill } from 'react-icons/bs';
import { GrGraphQl } from 'react-icons/gr';
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
          <BsFillBootstrapFill className={`${skillStyles.Bootsrap}`} />
          <SiJavascript className={`${skillStyles.JsSkill}`} />
          <DiReact className={`${skillStyles.React}`} />
          <GrGraphQl className={`${skillStyles.Graphql}`} />
          <AiOutlineConsoleSql className={`${skillStyles.Sql}`} />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
