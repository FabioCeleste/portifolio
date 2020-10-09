import React from 'react';
import ReactDOM from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from './components/Header';
import Conhecimentos from './components/Conhecimentos';
import Seperator from './components/Separator';
import Projects from './components/Projects';
import About from './components/About';
import Contato from './components/Contato';

import GloblalStyles from './global/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Conhecimentos />
    <Seperator />
    <Projects />
    <Seperator />
    <About />
    <Contato />
    <GloblalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
