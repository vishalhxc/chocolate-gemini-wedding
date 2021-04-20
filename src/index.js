import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import OurStory from './components/OurStory';
import './styles/site.css';
import '../node_modules/@fortawesome/fontawesome-free/js/brands'
import '../node_modules/@fortawesome/fontawesome-free/js/solid'
import '../node_modules/@fortawesome/fontawesome-free/js/fontawesome'

ReactDOM.render(
  <React.StrictMode>
    <div class="bg-image"></div>
    <Navigation></Navigation>
    <OurStory></OurStory>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); 