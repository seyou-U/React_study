import { useErrorBoundary } from "react-error-boundary";

export default function ErrorEvent() {
    // ErrorBoundaryをコードから利用するために、useErrorBoundary関数でErrorBoundary操作のための関数を取得する必要がある
    const { showBoundary } = useErrorBoundary();
    const handleClick = () => {
      try {
        throw new Error('Error is occured in MyApp.');
      } catch(e) {
        // ErrorBoundaryに対し、例外情報を引き渡す
        showBoundary(e);
      }
    };
    return(
      <button type="button" onClick={handleClick}>
        エラー発射
      </button>
    );
}
