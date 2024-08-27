export default function EventArgs2() {
  // 独自データ属性にアクセスするには、要素オブジェクト(e.target)からdatasetプロパティにアクセスする。
  // return buttonタグに含まれている名前(今回はtype)を参照する
  // あらかじめ引数の値が決まるとき、このような記述をする
  const current = e => {
    const type = e.target.dataset.type;
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
    {/* 取得する日時型を独自データ属性で指定 */}
    {/* 独自データ属性は任意のタグにdata-××××の形式で指定できる属性のこと */}
      <button id="dt" data-type="datetime" onClick={e => current(e)}>現在時刻を取得</button>
      <button id="date" data-type="date" onClick={e => current(e)}>現在時刻を取得</button>
      <button id="time" data-type="time" onClick={e => current(e)}>現在時刻を取得</button>
    </div>
  );
}
