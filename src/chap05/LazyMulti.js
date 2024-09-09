import { Suspense, lazy } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// 複数のコンポーネントを遅延ロード
// lazy関数を利用することで、遅延コンポーネントを通常コンポーネントのように扱うことができる
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
const LazyButton2 = lazy(() => sleep(1000).then(() => import('./LazyButton2')));

export default function LazyMulti() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyButton2 />
        </Suspense>
    );
}
