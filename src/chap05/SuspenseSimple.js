import { Suspense } from "react";
import ThrowPromise from "./ThrowPromise";

export default function SuspenseSimple() {
    return (
        // Suspense要素とは、子要素から投げられたPromiseを捕捉するとフォールバック(大替コンテンツ)を表示するコンポーネント
        <Suspense fallback={<p>Now Loading...</p>}>
            <ThrowPromise />
        </Suspense>
    );
}
