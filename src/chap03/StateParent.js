import { useState } from "react";
import StateCounter from "./StateCounter";


export default function StateParent() {
  // カウントの合計値初期化
  const [count, setCount] = useState(0);
  const update = step => setCount(count => step + count);
  return (
    <>
      {/* update関数をStateCounterコンポーネントに渡す */}
      <p>総カウント : {count} </p>
      <StateCounter step={1} onUpdate={update} />
      <StateCounter step={5} onUpdate={update} />
      <StateCounter step={-1} onUpdate={update} />
    </>
  );
}
