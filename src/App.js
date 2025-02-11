// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Advantage from "./components/Advantage";
import Clients from "./components/Clients";
import About from './components/About';
import Roadmap from "./components/Roadmap";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
      <div className="container-fluid p-0">
        <Header />
        <Hero />
        <Features />
          <Advantage />
          <Clients />
          <About />
          <Roadmap />
        <ContactUs />
        <Footer />
      </div>
  );
}

export default App;