import { useState } from "react";

export default function StateBasic({ init }) {
  // useState関数はStateを初期化する役割を果たす
  // Props (init) でState (count)を初期化
  // initがStateの初期値を指し、countはState値を格納する変数を指している。
  // setCountはStateの値を更新するための関数である。
  const [count, setCount] = useState(init);
  const handleClick = () => {
    setCount(count + 1);
    // クリックイベントを終えた後にStateの値が更新されるため、同じ処理を足しても結果は同じ
    setCount(count + 1);

    // State値を引数に渡すことで常に新しい値を取得することができる
    // 結果 : ボタンをクリックする度に2増える
    setCount(count => count + 1);
  }
  console.log(`count is ${count}`);
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました</p>
    </>
  );
}
