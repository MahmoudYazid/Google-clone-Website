
import './App.css';
import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Footer from './Footer';
function App() {
  document.title="cloned google by Mahmoud Yazid"
  
  return (
    <div id="App">
      <NavBar></NavBar>
      <SearchBar/>
      <Footer></Footer>
    </div>
  );
}

export default App;
