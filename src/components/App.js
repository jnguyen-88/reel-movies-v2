import React from 'react';

import NavBar from './nav/NavBar';
import Header from './Header';
import Middle from './main/Middle';
import Bottom from './main/Bottom';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <Middle />
        <Bottom />
      </main>
      <Footer />
    </div>
  );
}

export default App;
