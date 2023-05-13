import './App.css';
import TitlePage from './components/TitlePage';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom"
import { useState } from 'react';




function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  let toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={"App" + (isDarkMode? ' dark' : ' light')}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          

        </Routes>
        {/* <TitlePage />
        <About />
        <Projects />
        <Skills />
        <Contact /> */}
    </div>
  );
}

export default App;
