import { useEffect, useRef, useState } from "react";

export default function HookCallbackRef() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  // コールバックRefを準備
  // コールバックRefではref属性に対し関数を渡す。これにより紐づいた要素オブジェクトが生成 / 破棄されるタイミングで関数を呼び出すことができる
  const callbackRef = elem => elem?.focus();

  // 下記コールバックRefによってコメントアウト
//   // 住所項目への参照
//   const address = useRef(null);
//   // 住所項目が空でなければフォーカスを移動する
//   useEffect(() => {
//     if (address.current) {
//         address.current.focus();
//     }
//   }, [show]);

  return (
    <>
      <div>
        <label htmlFor="name">名前:</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input id="email" type="text" />
        <button onClick={handleClick}>拡張機能</button>
      </div>
      {/* State(show)の値に応じて住所項目を表示させる */}
      {show &&
        <div>
          <label htmlFor="address">住所:</label>
          <input id="address" type="text" ref={callbackRef} />
        </div>
      }
    </>
  );
}
