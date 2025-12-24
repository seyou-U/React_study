import { useEffect, useLayoutEffect, useState } from "react";

// 通常であればsleep関数はPromiseを用いて記述した方が良い
const sleep = delay => {
    const start = Date.now();
    // 現在時刻がstart (開始時刻) を超えるまでループを継続する
    while (true) {
      if (Date.now() - start > delay) { break; }
    }
};

export default function HookEffect({ init }) {
  const [count, setCount] = useState(0);

  // 2000ms後にState (count)を設定する
  useLayoutEffect(() => {
    sleep(2000);
    setCount(init);
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
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
