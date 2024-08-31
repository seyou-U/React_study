import { useEffect, useRef } from 'react';
import './EventPassive.css';

// 即時イベントの場合はpreventDefaultメソッドが呼び出されないため、Passiveモードとしてブラウザに通知する
export default function EventPassive() {
  const handelWheel = e => e.preventDefault();
  // div要素への参照を取得 / 要素の紐付け
  const divRef = useRef(null);
  useEffect(() => {
    // コンポーネント起動時にリスナーを設定する
    const div = divRef.current;
    // addEventListener: ターゲットに特定の配信イベントが呼び出される関数を設定する
    // 第一引数: イベントの種類, 第二引数: 指定されたイベントが発生した際に通知を受け取るオブジェクト, 第三引数: イベントリスナーの特性を指定するオプション
    div.addEventListener('wheel', handelWheel, {passive: false});
    return (() => {
      // コンポーネント破棄時にリスナーも破棄する
      div.removeEventListener('wheel', handelWheel)
    });
  });
  return (
    <div ref={divRef} className='box'>
      たとえばWheelイベントをハンドラーで...
    </div>
  );
}
