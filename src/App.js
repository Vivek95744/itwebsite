import React from 'react';
import 'D:/web/website/src/App.css'; 
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import About from './components/About/about'
import Service from './components/Servics/service';
import Other from './components/other/other';
import Portfolio from './components/portfolio/portfolio';
import Ourclient from './components/our client/ourclient';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar />  
      <Home />
      <About />
      <Service />
      <Other />
      <Portfolio />
      <Ourclient />
      <Footer />

    </div>
  );
}

export default App;
