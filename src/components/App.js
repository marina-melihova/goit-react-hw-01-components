import React from 'react';

import style from './App.module.css';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transaction-history.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <section className={style.section}>
        <p className={style.section__title}>Задание</p>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section className={style.section}>
        <p className={style.section__title}>Задание</p>
        <Statistics title="Upload stats" stats={statisticalData} />
      </section>
      <section className={style.section}>
        <p className={style.section__title}>Задание</p>
        <FriendList friends={friends} />
      </section>
      <section className={style.section}>
        <p className={style.section__title}>Задание</p>
        <TransactionHistory items={transactions} />
      </section>
    </>
  );
}

export default App;
