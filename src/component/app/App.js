import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Card from '../card/Card';
import SpinningLoader from '../../assets/SpinningLoader.svg'

const App = () => {
  const usercontext = useContext(UserContext);
  const {users, isLoading} = usercontext;
  
  const renderLoading = () => {
    return (
      <img className="loading" src={SpinningLoader} alt="spinning loader"/>
    )
  }

  const renderUsers = () => {
    return ( 
      <div className="cards row">
        {users.map(user => <Card key={user.id} user={user}/>)}
      </div>)
  }

  return (
    <main>
      <section className="section">
        {isLoading ? renderLoading() : renderUsers()}
      </section>
    </main>
  )
}

export default App;