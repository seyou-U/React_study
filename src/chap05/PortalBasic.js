import { useState } from "react";
import { createPortal } from "react-dom";
import './PortalBasic.css';


export default function PortalBasic() {
    // ダイヤログの開閉状態を表すState (falseは閉じた状態)
    const [show, setShow] = useState(false);
    // ボタンクリック時のハンドラー (Stateをオン / オフ)
    const handleDialog = () => setShow(s => !s);

    return(
      <form>
        <button type="button" onClick={handleDialog} disabled={show}>
          ダイヤログを表示
        </button>
        {/* ポータルの記述方法(第一引数は埋め込み先に埋め込ませる要素、第二引数では埋め込み先となる要素) */}
        {show && createPortal(
          <div className="dialog">
            <p>Portalで生成されたダイヤログ</p>
            <button type="button" onClick={handleDialog}>
              閉じる
            </button>
          </div>,
          document.getElementById('dialog')
        )}
      </form>
    );
}
