export default function EventArgs() {
    // 実行時に引数の値が変化する場合は、独自データ属性ではなくこちらの方法で記述する
    const current = (e, type) => {
      const d = new Date();
      switch(type) {
        case 'date':
            console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
            break;
        case 'time':
            console.log(`${e.target.id}: ${d.toLocaleTimeString()}`);
            break;
        default:
            console.log(`${e.target.id}: ${d.toLocaleString()}`);
            break;
      }
    };

    return (
      <div>
      {/* アロー関数経由で、ハンドラーを呼び出す*/}
      {/* onEvent属性に渡すのは関数呼び出しではなく、関数そのものを渡す必要がある*/}
        <button id="dt" onClick={e => current(e, 'datetime')}>現在時刻を取得</button>
        <button id="date" onClick={e => current(e, 'date')}>現在時刻を取得</button>
        <button id="time" onClick={e => current(e, 'time')}>現在時刻を取得</button>
      </div>
    );
  }
