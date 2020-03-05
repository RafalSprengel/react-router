import React, { useState } from 'react';
import '../css/App.css';
import Header from '../layouts/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from '../layouts/Page';
import Footer from '../layouts/Footer';
import UserContextProvider from './contextUser';
import Aside from '../layouts/Aside'


const App = () => {
  const [user, setUser] = useState('');

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleLogout = () => {
    setUser('');
  }

  return (
    <UserContextProvider
      loggedUser={user}
      handleLogout={handleLogout}
    >
      <Router>
        <div className="app">
          <header>
            <Header handleLogin={handleLogin} />
          </header>
          <main>
            <Aside />
            <section>
              <Page
                handleLogin={handleLogin}
                handleLogout={handleLogout}
              />
            </section>
          </main>
          <Footer />
        </div>
      </Router>
    </UserContextProvider >
  );
}

export default App;
