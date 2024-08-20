import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

setInterval(() => {
  root.render(
    <p>現在時刻: {(new Date()).toLocaleString()}</p>
  )
}, 1000)

root.render(
  <>
    <p>こんにちは、世界!</p>
    <p>はじめまして、React</p>
  </>
);

const tag = (
  <ul>
    {/* コメントです　　*/}
    <li /*
      タグ内にコメントできる
    */>React</li>
    <li // これも大丈夫
      >Vue.js</li>
  </ul>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
