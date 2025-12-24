import { createContext } from "react";
import HookContextChild from "./HookContextChild";


// コンテキストを初期化
// 今回の場合は、以下の2つをcreateContext関数で作成
// 1. コンテキストに値を渡すContext.Providerコンポーネント
// 2. コンテキストの変更を受け取るContext.Consumerコンポーネント
export const MyAppContext = createContext();

// コンテキストに渡すためのオブジェクトを準備
const config = {
    title: 'React入門',
    lang: 'ja-JP',
};

export default function HookContext() {
    // 配下の要素に対してコンテキストを適用
    return (
        <MyAppContext.Provider value={config}>
          <div id="c_main">
            <HookContextChild />
          </div>
        </MyAppContext.Provider>
    );
}
