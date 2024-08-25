import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chap02/class.css'
import books from './chap03/books';
import reportWebVitals from './reportWebVitals';
import App from './App';
import EventBasic from './chap03/EventBasic';
import ForList from './chap03/ForList';
import ForNest from './chap03/ForNest';
import MyHello from './chap03/MyHello';
import StateBasic from './chap03/StateBasic';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';

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

// Stateの基本
root.render(
  <StateBasic init={0} />
);

// 繰り返し処理について
root.render(
  <ForList src={books} />
);

// コンポーネントの切り分け
root.render(
  <ForNest src={books} />
);

// 演算子を用いてスタイルを選択的に適用する
root.render(
  <SelectStyle mode="dark" />
);

// コンポーネント配下のコンテンツをテンプレートに反映させる
root.render(
  <StyledPanel>
    <p>メンバー募集中！</p>
    <p>ようこそ、WINGSプロジェクトへ!!</p>
    <MyHello myName="鈴木" />
  </StyledPanel>
);

// 複数のchildrenを引き渡す
root.render(<TitledPanel
  title={
    <p>メンバー募集中!</p>
  }
  body={
    <p>ようこそ、WINGSプロジェクトへ!!</p>
  }>
  </TitledPanel>
);

// もしくは変数に切り出すことも可能
const titleChild = <p>メンバー募集中！</p>;
const bodyChild = <p>ようこそ、WINGSプロジェクトへ!!</p>
root.render(
  <TitledPanel title={titleChild} body={bodyChild}></TitledPanel>
);

// key属性をキーに目的の要素を取り出す
root.render(
  <TitledPanel>
    <p key="title">メンバー大歓迎</p>
    <p key="body">ようこそ、WINGSプロジェクトへ!!!!!</p>
  </TitledPanel>
);

// childrenに対しパラメータを渡す
root.render(
  <ListTemplate src={books}>
  {/*関数化することで引数として渡すことができる(elem)*/}
  {elem =>
    <>
      <dt>
        <a href={'https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg'}>
         {elem.title} ({elem.price}円)
        </a>
      </dt>
      <dd>{elem.summary}</dd>
    </>
  }
  </ListTemplate>
);

// レンダードロップ
root.render(
  <ListTemplate src={books} render={ elem => (
    <>
      <dt>
        <a href={'https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg'}>
          {elem.title} ({elem.price}円)
        </a>
      </dt>
      <dd>{elem.summary}</dd>
    </>
  )}
  ></ListTemplate>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
