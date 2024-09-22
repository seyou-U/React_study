import { ErrorBoundary } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";

export default function ErrorRetryRoot() {
    // エラー時に実行される処理
    // error: Error Boundary配下で発生したエラー情報 resetErrorBoundary:Error Boundaryをリセットするための関数
    const handleFallback = ({ error, resetErrorBoundary }) => {
      const handleClick = () => resetErrorBoundary();
      return (
        <div>
          <h4>以下のエラーが発生しました</h4>
          <p>{error.message}</p>
          <button type="button" onClick={handleClick}>
            Retry
          </button>
        </div>
      );
    };

    // リセット時に実行される処理
    const handleReset = () => console.log('Retry!!');

    return(
      <>
        <h3>ErrorBoundaryの基本</h3>
        {/* fallbackRenderはレンダープロップで、エラー時に表示すべきコンテンツを生成する関数を指定する */}
        <ErrorBoundary
          onReset={handleReset}
          fallbackRender={handleFallback}>
          <ErrorRetryThrow />
        </ErrorBoundary>
      </>
    );
}
