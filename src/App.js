import React, { useContext } from 'react';
import UserContext from './context/UserContext';
import Card from './component/card/Card';

const App = () => {
  const usercontext = useContext(UserContext);
  const {users} = usercontext;

  return (
    <main>
      <section className="section">
        <div className="cards row">
            {users.map(user => <Card key={user.id} user={user}/>)}
        </div>
      </section>
    </main>
  )
}

export default App;