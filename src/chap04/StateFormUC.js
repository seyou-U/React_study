import { useRef } from "react";

export default function StateFormUC(){
    // 要素の参照準備 (要素に紐付ける場合はnullになる)
    const name = useRef(null);
    const age = useRef(null);
    const show = () => console.log(`こんにちは、${name.current.value} (${age.current.value} 歳) さん！`);
    return (
        <form>
            <div>
                <label htmlFor="name">名前 :</label>
                <input id="name" name="name" type="text" ref={name} defaultValue="佐藤理央" />
            </div>
            <div>
                <label htmlFor="age">名前 :</label>
                <input id="age" name="age" type="text" ref={age} defaultValue="18" />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
        </form>
    );
}
