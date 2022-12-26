import Profile from './Profile/Profile';
import user from '../user.json';
import transactions from '../transactions.json';
import Transaction from './Transaction/Transaction';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Transaction items={transactions} />
    </>
  );
};
