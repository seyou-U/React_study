export default function EventObj() {
  // クリック時にイベントオブジェクトを出力する
  // イベントハンドラーのイベントオブジェクトは変数eでアクセスすることができる
  const handleClick = e => console.log(e);
  return(
    <button onClick={handleClick}>クリック</button>
  );
}
