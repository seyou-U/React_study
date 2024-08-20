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

// setInterval(() => {
//   root.render(
//     <p>現在時刻: {(new Date()).toLocaleString()}</p>
//   )
// }, 1000)

// {...}構文
const name = '鈴木';
root.render(
  <>
    <p>こんにちは、{name}です。</p>
    <p>こんにちは、{`たろう`}です。</p>
  </>
);

const content = `<h3>WINGSプロジェクト</h3>
  <img src="https:///wings.msn.to/image/wings.jpg" />`;
root.render(
  // 1つ目はリンクが文字列として出力される
  // 2つ目は動的にHTML文字列を生成し表示させることができる
  <>
    <p>{content}</p>
    <p dangerouslySetInnerHTML={{__html: content}}></p>
  </>
);

root.render(
  <>
    <div>{'Tom &amp; jerry'}</div>
    {/*実体参照にしたい場合*/}
    {/*エスケープシーケンスを用いる*/}
    <div>{'Tom ¥u0026 jerry'}</div>
    {/*Unicodeコードポイントから取得*/}
    <div>{`Tom ${String.fromCodePoint(38)} jerry`}</div>
    <div></div>
  </>
);

const dest = 'https://ja.react.dev';
root.render(
  // 属性値をクォートで囲まないこと
  <a href={dest}>Reac 本家サイト</a>
);

// 複数の属性をまとめて記述することができる
const attrs = {
  href: 'https://wings.msn.to/',
  download: false,
  target: '__blank',
  rel: 'help'
};
root.render(
  <a {...attrs}>サポートページ</a>
);

// 属性値の規定値はtrueであることから以下の2つは同じ意味
root.render(
  <>
    <a href='index.html' download>トップへ</a>
    <a href='index.html' download={true}>トップへ</a>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
