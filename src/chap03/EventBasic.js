export default function EventBasic({type}) {
  const current = () => {
    // clickイベントハンドラー
    const d = new Date();
    switch(type) {
    case 'date':
        console.log(d.toLocaleDateString());
        break;
    case 'time':
        console.log(d.toLocaleTimeString());
        break;
    default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <div>
    {/* ボタンクリック時にcurrent関数を呼び出す*/}
      <button onClick={current}>現在時刻を取得</button>
    </div>
  );
}
