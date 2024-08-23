import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chap02/class.css'
import App from './App';
import EventBasic from './chap03/EventBasic';
import reportWebVitals from './reportWebVitals';
import MyHello from './chap03/MyHello';
import StateBasic from './chap03/StateBasic';

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
  <a href={dest}>React 本家サイト</a>
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

// styleについて以下のように記述することができる
// しかし、className属性で基本記述するため非推奨
const props = {
  color: 'White',
  backgroundColor: 'Blue',
  padding: 3
};
root.render(
  <p style={props}>WINGSプロジェクト</p>
);

// classNameを用いた書き方
root.render(
  <p className="hoge">WINGSプロジェクト</p>
);

// createElementメソッドの書き方
const title = 'これからはじめるVue.js 3実戦入門';

// 以下の2つは等価である
root.render(
  <div>
    <p>「{title}」 (SBクリエイティブ刊)</p>
    <img src="https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg" alt='{title} '/>
    絶賛発売中!
  </div>
);

root.render(
  // 上位のdiv要素を作成する
  React.createElement(
    'div',
    { className: 'main' },
    // 子要素のp、img、テキストを列挙
    React.createElement(
      'p',
      null, // 属性は省略
      `「${title}」 (SBクリエイティブ刊)`
    ),
    React.createElement(
      'img',
      {
        src: 'https://wings.msn.to/books/978-4-8156-1336-5/978-4-8156-1336-5.jpg',
        alt: title
      }
    ),
    '絶賛発売中!'
  ),
);

// propsの呼び出し元
root.render(
  <MyHello myName="鈴木"/>
);

// クリックイベントについて
root.render(
  <EventBasic type="time"/>
)

// Stateのk本
root.render(
  <StateBasic init={0} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
