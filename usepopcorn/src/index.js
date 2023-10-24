import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StarRating maxRating={5} className='test' message= {["terrible", "okay", "good", "excellent", "outstanding"]} defaultRating={0} />
  </React.StrictMode>
);

