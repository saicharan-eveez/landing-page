// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Advantage from "./components/Advantage";
import KeyMetrics from "./components/KeyMetrics";
import Clients from "./components/Clients";
import About from './components/About';
import Roadmap from "./components/Roadmap";
import ContactUs from './components/ContactUs';
import FAQs from "./components/FAQ's";
import Footer from './components/Footer';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="container-fluid p-0">
        <Header />
        <Hero />
        <Features />
          <Advantage />
          <KeyMetrics />
          <Clients />
          <About />
          <Roadmap />
        <ContactUs />
          <FAQs />
        <Footer />
      </div>
  );
}

export default App;