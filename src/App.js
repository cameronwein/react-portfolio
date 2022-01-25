import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume'

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
          case 'Contact':
            return <Contact></Contact>
          case 'Resume':
            return<Resume></Resume>
          default:
            return null
        }
      })()}  
    </div>
  );
}

export default App;
