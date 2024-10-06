import { useState } from "react";

// この関数ではsetInterval関数が実行された際のidとclearIntervalされる際のidが異なることから、終了ボタンを押してもタイマーは終わることはない
export default function HookRefNg() {
  // タイマーのオンオフを管理するための変数
  let id = null;
  const [count, setCount] = useState(0);

  // 関数コンポーネントは再描画されるたび(countが更新されるたび)に再実行される
  // そのため、カウントが進む度にこのログは記録される
  console.log(id);

  // [開始] ボタンでタイマーを生成する
  const handleStart = () => {
    // タイマー稼働中の場合は何もしない (二度押し対策)
    if (id === null) {
      id = setInterval(() => setCount(c => c + 1), 1000);
      console.log(id);
    }
  };

  // [終了]ボタンでタイマーを破棄する
  const handleEnd = () => {
    console.log(id);
    clearInterval(id);
    id = null;
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}
