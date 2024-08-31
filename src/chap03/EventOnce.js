import { useState } from "react";

export default function EventOnce() {
    // クリック済みかどうか判定する
    // 変数clickedの初期値はfalse
    const [clicked, setClicked] = useState(false);
    // 今日の運勢
    const [result, setResult] = useState('-');
    const handleClick = e => {
      // 未クリックの場合のみ運勢を算出
      // Math.floor()関数で与えられた数値以下の最大の整数を返却する
      if (!clicked) {
        setResult(Math.floor((Math.random() * 100 + 1)));
        setClicked(true);
      }
    }
    return (
      <>
        <button onClick={handleClick}>結果表示</button>
        <p>今日の運勢は{result}点です</p>
      </>
    );
}
