import React, { useState } from 'react'
import useStore from './store'
import LoadingScreen from './components/LoadingScreen';
import Project from './components/Project';
import Header from './components/Header';
import About from './components/About';
import Ability from './components/Ability';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  const projects = useStore((state) => state.projects);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div className='min-h-screen bg-gradient-to-b from-pink-700 to-blue-900'>
          <Header />
          <About />
          <Ability />
          <Project projects={projects} />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App
