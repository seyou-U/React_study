import { useEffect, useRef } from "react";
import MyTextBox from "./MyTextBox";

export default function HookRefForward() {
  // ref属性として参照するために定義
  const text = useRef(null);

  // 起動時にテキストボックスにフォーカス
  // useImperativeHandle関数でフォーカス機能を利用できるようにしているのでコメントアウトする
//   useEffect(() => {
//     text.current?.focus();
//   }, []);

  return(
    <MyTextBox label="名前" ref={text} />
  );
}
