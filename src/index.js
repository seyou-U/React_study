/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './chap02/class.css'
import books from './chap03/books';
import reportWebVitals from './reportWebVitals';
import App from './App';
import EmotionJsx from './chap05/EmotionJsx';
import EventArgs from './chap03/EventArgs';
import EventArgs2 from './chap03/EventArgs2';
import EventBasic from './chap03/EventBasic';
import EventError from './chap03/EventError';
import EventKey from './chap03/EventKey';
import EventMouse from './chap03/EventMouse';
import EventObj from './chap03/EventObj';
import EventOnce from './chap03/EventOnce';
import EventPassive from './chap03/EventPassive';
import EventPropagation from './chap03/EventPropagation';
import ErrorEventRoot from './chap05/ErrorEventRoot';
import ErrorRetryRoot from './chap05/ErrorRetryRoot';
import ErrorRoot from './chap05/ErrorRoot';
import ForList from './chap03/ForList';
import FormBasic from './chap04/FormBasic';
import FormCheckMulti from './chap04/FormCheckMulti';
import FormMui from './chap06/FormMui';
import FormList from './chap04/FormList';
import FormRadio from './chap04/FormRadio';
import FormYup from './chap04/FormYup';
import ForNest from './chap03/ForNest';
import LazyMulti from './chap05/LazyMulti';
import ListTemplate from './chap03/ListTemplate';
import MaterialBasic from './chap06/MaterialBasic';
import MaterialDrawer from './chap06/MaterialDrawer';
import MaterialGrid from './chap06/MaterialGrid';
import MaterialMode from './chap06/MaterialMode';
import MyButton, { MyStyledButton } from './chap05/StyledComp2';
import MyHello from './chap03/MyHello';
import ProfilerBasic from './chap05/ProfilerBasic';
import PortalBasic from './chap05/PortalBasic';
import QueryBasic from './chap06/QueryBasic';
import QueryPre from './chap06/QueryPre';
import StateBasic from './chap03/StateBasic';
import StateParent from './chap03/StateParent';
import SelectStyle from './chap03/SelectStyle';
import StateForm from './chap04/StateForm';
import StateFormUC from './chap04/StateFormUC';
import StateNest from './chap04/StateNest';
import StateNestImmer from './chap04/StateNestImmer';
import StateNestImmer2 from './chap04/StateNestImmer2';
import StateTodo from './chap04/StateTodo';
import StyledBasic from './chap05/StyledBasic';
import StyledCSS from './chap05/StyledCss';
import StyledCommon from './chap05/StyledCommon';
import StyledComp from './chap05/StyledComp';
import StyledDynamic from './chap05/StyledDynamic';
import StyledGlobal from './chap05/StyledGlobal';
import StyledPanel from './chap03/StyledPanel';
import StyledProps from './chap05/StyledProps';
import SuspenseSimple from './chap05/SuspenseSimple';
import SuspenseResult from './chap05/SuspenseResult';
import theme from './chap06/theme';
import TitledPanel from './chap03/TitledPanel';
import TypeProp, {Member} from './chap03/TypeProp';

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
  <TitledPanel title={titleChild} body={bodyChild} />
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

// myName属性を指定しないで呼び出した際のケース
// root.render(
//   <MyHello />
// );

root.render(
  // OKのケース
  <TypeProp prop1={new Member()} />

  // NGのケース
  // <TypeProp prop1="hoge"/>
);

root.render(
  // OKのケース
  <TypeProp prop2={"男性"} />

  // NGのケース
  // <TypeProp prop2="hoge"/>
);

root.render(
  // OKのケース
  <TypeProp prop3="鈴木" />

  // NGのケース
  // <TypeProp prop3={new Number()}/>
);

root.render(
  // OKのケース
  <TypeProp prop4={[2, 4]} />

  // NGのケース
  // <TypeProp prop4={[12, "山田"]} />
);

root.render(
  // OKのケース
  <TypeProp prop5={{ '鈴木': 15, '佐藤': 30}} />

  // NGのケース
  // <TypeProp prop5={{ '鈴木': 15, '佐藤': '三十'}} />
);

root.render(
  // OKのケース
  <TypeProp prop6={{ name: '鈴木', age: 30, sex: '女性', blood: 'A'}} />

  // NGのケース
  // <TypeProp prop6={{ age: 30, sex: '女性'}} />
);

// 子コンポーネントから親コンポーネントに対して情報を渡す
root.render(
  <StateParent />
);

// マウスに関するイベント
root.render(
  <EventMouse
  alt="ロゴ画像"
  beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
  afterSrc="https://www.web-deli.com/image/home_chara.gif" />
);

// 画像が読み込めなかった際、ダミー画像を表示させる
root.render(
  <EventError src="./image/wings.jpg"
    alt="サンプル画像" />
);

// クリック時にイベントオブジェクトをログ出力する
root.render(
  <EventObj />
);

// テキストボックスの中でctrl + qキーが押下された際にメッセージを表示させる
root.render(
  <EventKey />
);

// イベントハンドラーに任意の引数を渡す
root.render(
  <EventArgs />
);

// 独自イベント属性を用いて実行する
root.render(
  <EventArgs2 />
);

// イベントの伝播について
root.render(
  <EventPropagation />
);

// 初回イベントでのみハンドラーを実行させる
root.render(
  <EventOnce />
);

// Passiveモードでイベントハンドラーを設置する
root.render(
  <EventPassive />
);

// 基本的なフォームの作成 (制御)
root.render(
  <StateForm />
)

// 基本的なフォームの作成 (非制御)
root.render(
  <StateFormUC />
);

// リストボックスの作成
root.render(
  <FormList />
);

// ラジオボタンの作成
root.render(
  <FormRadio />
);

// チェックボックス (複数選択)
root.render (
  <FormCheckMulti />
);

// 入れ子構造になったState
root.render(
  <StateNest />
);

// 入れ子構造をImmerライブラリを用いて改善する
root.render(
  <StateNestImmer />
);

// Immerライブラリによる入れ子構造の改善
root.render(
  <StateNestImmer2 />
);

// Todoリスト
root.render(
  <StateTodo />
);

// React Hook Formの使い方
root.render(
  <FormBasic />
);

// 検証ライブラリ Yupと連携した際の記述方法について
root.render(
  <FormYup />
);

// lazy()関数を用いたコンポーネントの遅延
root.render(
  <LazyMulti />
)

// ThrowされたPromiseによる非同期処理
root.render(
  <SuspenseSimple />
);

// Promiseの結果を表示させる
root.render(
  <SuspenseResult />
);

// コンポーネントの描画時間を計測する
root.render(
  <ProfilerBasic />
);

// JSX式にスタイルを埋め込む
root.render(
  <>
    <h3>Styled JSXの基本</h3>
    <StyledBasic />
  </>
);

// JSXのスタイルを外部化し定義する
root.render(
  <>
    <h3>Styled JSXの基本</h3>
    <StyledCSS />
  </>
);

// ダイナミックスタイル (動的にスタイルを変更する)
root.render(
  <StyledDynamic theme={{
    radius: true,
    color: 'royalblue'
  }} />
);

// 標準タグを拡張してスタイル付きのタグを定義する
root.render(
  <StyledComp />
);

// 既存のコンポーネントにスタイル付けする
root.render(
  <>
    <MyButton>ボタン</MyButton>
    <MyStyledButton>ボタン</MyStyledButton>
  </>
);

// スタイル定義を外部化する
root.render(
  <StyledCommon />
);

// グローバルスタイルの定義と取り込み
root.render(
  <>
    <StyledGlobal />
    <StyledComp />
  </>
);

// Props経由で動的なスタイルを定義する
root.render(
  <StyledProps />
);

// Emotion Styled JSXライクな記法
root.render(
  <EmotionJsx />
);

// グローバルスタイルを定義する
const global = css`
  body{
    background-color: Yellow;
  }
`;

// 上記のグローバルスタイルを帝王した状態で先程のEmotionJsxコンポーネントを呼び出す
root.render(
  <>
    <Global styles={global} />
    <EmotionJsx />
  </>
);

// ポータルの実装
root.render(
  <>
    <div id='dialog'></div>
    <PortalBasic />
  </>
);

// ErrorBoundaryについて
root.render(
  <ErrorRoot />
);

// ErrorBoundary詳細な処理を返却
root.render(
  <ErrorRetryRoot />
);

// ErrorBoundary:イベントハンドラーからの例外処理
root.render(
  <ErrorEventRoot />
);

// MUIライブラリを用いた実装
root.render(
  <MaterialBasic />
);

// MUIライブラリ / ドロワーの実装
root.render(
  <MaterialDrawer />
);

// MUIライブラリ / グリッド上にする
// (備考) グリッドはレスポンシブデザインにも対応している
root.render(
  <MaterialGrid />
);

// MUIカスタマイズ / テーマを適応する
// <ThemeProvider>要素を利用することで適応させることができる
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MaterialBasic />
  </ThemeProvider>
);

// MUIライブラリ / ライト、ダークモードに応じて切り替える
root.render(
  <MaterialMode />
);

// ReactHookFormとMUIを組み合わせたフォームの実装
root.render(
  <FormMui />
);

// React Queryを用いない場合に外部APIを呼び出す
root.render(
  <QueryPre />
);

// React Queryを用いた外部APIの呼び出し
// QueryClientを準備し、QueryClientProvider要素に渡す / オプションでSuspenseモードを利用する
const cli = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
root.render(
  <Suspense fallback={<p>Loading...</p>}>
    <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
      <QueryClientProvider client={cli}>
        <QueryBasic />
      </QueryClientProvider>
    </ErrorBoundary>
  </Suspense>
);

reportWebVitals();
