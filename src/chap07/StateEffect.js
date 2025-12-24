import { useEffect, useState } from "react";

export default function StateEffect({ init }) {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');

  // State値(count)が変化した場合のみログを表示させる
  // useEffect(()=> {描画時に実行される処理, 依存する変数（配列）})
  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count]);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      {/* 動作の比較を行うためにHogeボタンを追加 */}
      <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました</p>
    </>
  );
}
