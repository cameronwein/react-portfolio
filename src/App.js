import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Project from './components/Project';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [pages] = useState(["About Me", "Portfolio", "Contact", "Resume"]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
 
    <div>
      <Header pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Header>
      {(() => {
        switch (currentPage) {
          case 'About Me':
            return <About></About>

          default:
            return null
        }
      })()}  
    </div>
  );
}

export default App;
