import React from 'react';
import style from './Section.module.css';

function Section({ title, children }) {
  return (
    <section className={style.section}>
      <p className={style.section__title}>{title}</p>
      {children}
    </section>
  );
}

export default Section;
