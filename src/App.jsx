import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { useState } from 'react';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header loggedIn={isLoggedIn}/>
      <Outlet context={[isLoggedIn, setIsLoggedIn]}/>
      <Footer />
    </>
  );
}

export default App;