import WrapPromise from "./WrapPromise";

// Promiseの状態を管理するオブジェクトを取得
const info = getInfo();

// Promiseの状態に応じて結果を表示するコンポーネント
export default function ThrowResult() {
    const result = info.get();
    return <p>{result}</p>;
}

// 非同期でデータを取得するための関数
function getInfo() {
    return WrapPromise(new Promise((resolve, reject) => {
        // 2000ミリ秒後に50%の確率で成功 / 失敗メッセージを生成
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve('Succeeded!!');
            } else {
                reject('Error!');
            }
        }, 2000);
    }));
}
