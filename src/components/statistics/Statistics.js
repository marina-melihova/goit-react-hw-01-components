import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={style.item}
              style={{
                backgroundColor: `${randomColor()}`,
              }}
            >
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage + '%'}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

function randomColor() {
  const r = Math.floor(255 * Math.random());
  const g = Math.floor(255 * Math.random());
  const b = Math.floor(255 * Math.random());
  return `rgb(${r},${g},${b})`;
}
