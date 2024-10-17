import { useContext } from "react";
import { MyAppContext } from "./HookContext";


// 子コンポーネントより孫コンポーネントを呼び出している
export default function HookContextChild() {
  return (
    <div id="c_child">
      <HookContextChildGrand />
    </div>
  );
}

// コンテキストの参照はuseContext関数を使用する / useContext(Contextオブジェクト)
export function HookContextChildGrand() {
  const {title, lang} = useContext(MyAppContext)
  return (
    <div id="c_child_grand">
        {title} {lang}
    </div>
  );
}
