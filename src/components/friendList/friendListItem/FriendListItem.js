import React from 'react';
import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={{ backgroundColor: `${isOnline ? 'green' : 'red'}` }}
      ></span>
      <img className={style.avatar} src={avatar} alt="" width="100" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
