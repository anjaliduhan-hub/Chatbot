import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import reactToWebcomponent from 'react-to-webcomponent';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("chatbot")
);

// const Index = () => {
//   <App/>;
// } 

// customElements.define('ls-chatbot', reactToWebcomponent(Index, React, ReactDOM));

reportWebVitals();
