// 2行目の形式でEmotionを用いることを宣言する
// JSX Pragmaと呼ばれる記法でEmotionをどのように処理するか決めるコンパイラーの宣言のようなもの
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


export default function EmotionJsx() {
  const styles = css`
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
  `;

  // ${styles}のようにスタイル形式を継承することもできる
//   const others = css`
//     ${styles}
//     padding: 30px;
//   `;

  return (
    <div css={styles}><b>Styled JSX</b>は、JSX式にスタイル定義を・・・</div>
    // 複数のスタイル(css`・・・`)をまとめて定義する場合は以下のように配列で:記述することができる
    // <div css={[styles, others]}><b>Styled JSX</b>は、JSX式にスタイル定義を・・・</div>
  );
}
