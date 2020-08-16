import React from 'react';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';
import Section from './section/Section';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transaction-history.json';

function App() {
  return (
    <>
      <Section title="Profile (профиль социальной сети)">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistics (секция статистики)">
        <Statistics title="Upload stats" stats={statisticalData} />
      </Section>
      <Section title="FriendList (список друзей пользователя)">
        <FriendList friends={friends} />
      </Section>
      <Section title="TransactionHistory (история транзакций)">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}

export default App;
