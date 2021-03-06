import React,{ useState } from 'react';

import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Routes } from './components/Routes.jsx';


function App() {

  const [ darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ' ' }>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-200 ">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;

