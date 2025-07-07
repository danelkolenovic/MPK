import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

// Nove stranice
import ONama from '../pages/ONama';
import KampusPage from '../pages/Kampus';
import ProgramiPage from '../pages/Programi';

const Home = ({ setPlayState }) => {
  return (
    <>
      <Hero />
      <div className="container">
        <Title subTitle="Nas PROGRAM" title="Šta mi nudimo" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Galerija" title="Fotografije Kampusa" />
        <Campus />
        <Title subTitle="UTISCI" title="Šta studenti kažu" />
        <Testimonials />
        <Title subTitle="Kontaktiraj nas" title="Budimo u kontaktu" />
        <Contact />
      </div>
    </>
  );
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setPlayState={setPlayState} />} />
        <Route path="/o-nama" element={<ONama />} />
        <Route path="/kampus" element={<KampusPage />} />
        <Route path="/programi" element={<ProgramiPage />} />
      </Routes>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      <Footer />
    </Router>
  );
};

export default App;
