import { ErrorBoundary } from "react-error-boundary";
import ErrorThrow from "./ErrorThrow";

export default function ErrorRoot() {
  return (
    <>
      <h3>Error Boundaryの基本</h3>
      {/* fallback属性に対しエラー発生時のコンテンツを指定することができる。
      また、onError属性を指定することでエラー時の処理について記述することもできる。 */}
      <ErrorBoundary fallback={<div>エラーが発生しました。</div>} onError={err => alert(err.message) }>
        <ErrorThrow />
      </ErrorBoundary>
    </>
  );
}
