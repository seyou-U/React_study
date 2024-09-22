export default function ErrorRetryThrow() {
    // 60%の確率でエラーを発生させる
    if (Math.random() < 0.6) {
        throw new Error(`Error is occured in MyApp.`);
    }
    return (
        <p>正しく実行されました。</p>
    );
}
