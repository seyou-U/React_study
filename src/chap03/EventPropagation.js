import './EventPropagation.css';
export default function EventPropagation() {
    const handleParent = () => alert('#parent run...');
    const handleMy = () => alert('#my run...');
    const handleChild = e => {
        // 以下の文で伝播を抑制することができる
        e.stopPropagation();
        // 以下の文でイベント既定の動作をキャンセルすることができる
        // イベント既定の動作とは、イベントに伴いブラウザ上で発生する動作のことである
        e.preventDefault();
        alert('#child run...');
    }
    return (
        // on×××××Capture属性を用いることでキャプチャフェーズ(最上位のwindowsオブジェクトから下位要素にイベントを伝播すること)
        // でイベントを処理することができる
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                  子要素
                </a>
            </div>
        </div>
    );
}
