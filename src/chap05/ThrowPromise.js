// Promiseが終了したか表すフラグ変数
let flag = false;

// PromiseをThrowしている
// Promiseとは非同期処理の状態を管理するためのオブジェクトである
// Promiseオブジェクトが生成された直後はPending(保留中)状態であり、処理が終了することでFulfilled(成功)、Rejected(失敗)のいずれかの状態に変化する
export default function ThrowPromise() {
    if (flag) {
        return <p>正しく表示できました。</p>
    }
    // ロード中の場合はPromiseをスローする
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flag = true;
            resolve('Success!!');
        }, 3000);
    });
}
