// 無条件にエラーを発生させるための関数
export default function ErrorThrow() {
  throw new Error(`Error is occured in MyApp.`);
  return (
    <p>正しく実行されました。</p>
  );
}
