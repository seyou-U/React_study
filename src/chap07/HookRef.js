import { useRef, useState } from "react";

export default function HookRef() {
  // useRef関数の戻り値は指定された値を内部で保持するRefオブジェクトであり、コンポーネントが保持される間で維持される
  let id = useRef(null);
  const [count, setCount] = useState(0);

  // [開始] ボタンでタイマーを生成する
  const handleStart = () => {
    // タイマー稼働中の場合は何もしない (二度押し対策)
    if (id.current === null) {
      id.current = setInterval(() => setCount(c => c + 1), 1000);
    }
  };

  // [終了]ボタンでタイマーを破棄する
  const handleEnd = () => {
    clearInterval(id.current);
    id.current = null;
  };

  return (
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  );
}
