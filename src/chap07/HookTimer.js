import { useEffect, useState } from "react";
import './HookTimer.css';

export default function HookTimer({init}) {
  const [count, setCount] = useState(init);

  useEffect(() => {
    // setInterval()関数でタイマーを準備、1000ms秒ごとに実行する処理を記述する
    const t = setInterval(() => {
      setCount(c => c - 1);
    }, 1000);

    // コンポーネントを破棄された後も動き続けるので明示的に破棄する必要がある
    // コンポーネント破棄 → タイマーも破棄する
    return () => {
      clearInterval(t);
    };
  }, []);

// カウンターが0未満になった場合、スタイルwarnを適用
  return (
    <div className={count < 0 ? 'warn' : ''}>
      現在のカウント : {count}
    </div>
  );
}
