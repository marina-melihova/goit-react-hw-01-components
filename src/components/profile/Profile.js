import React from 'react';
import PropTypes from 'prop-types';
import style from './Profile.module.css';

const Profile = props => {
  const { name, tag, location, avatar, stats } = props;
  const { followers, views, likes } = stats;
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="user avatar" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{'@' + tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>
            {new Intl.NumberFormat('eu-EU').format(followers)}
          </span>
        </li>
        <li>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>
            {new Intl.NumberFormat('eu-EU').format(views)}
          </span>
        </li>
        <li>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>
            {new Intl.NumberFormat('eu-EU').format(likes)}
          </span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  props: PropTypes.exact({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Profile;
