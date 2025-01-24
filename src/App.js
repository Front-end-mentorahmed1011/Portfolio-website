import React from 'react';
import './App.css';
import ViewProvider from './Contexts/ViewPort';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
  <ViewProvider>
    <React.Fragment>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Form />
      <Footer />
     </React.Fragment>
  </ViewProvider>
    
  );
}

export default App;
