import { useState } from "react";

export default function StateForm(){
    // フォームとして扱う値をStateとして宣言する
    // フォームに関わる値は一つのオブジェクトでまとめること、フォーム要素の名前(name属性)とプロパティ名は一致させること
    const [form, setForm] = useState({
      name: '山田太郎',
      age: 18
    });

    // フォーム要素の変更をStateに反映
    // 引数のeはイベントの要素のことを指す
    // [e.target.name]: e.target.valueは要素の名前(e.target.name)をそのままプロパティ名として入力値として渡す / 算出プロパティが使われている
    const handleForm = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    };

    // 送信ボタンでログにメッセージが出力
    const show = () => {
      console.log(`こんにちは、${form.name} ${form.age} 歳 さん!`)
    };

    return(
      <form>
        {/* State値を個々のフォーム要素に割り当て */}
        <div>
            {/* htmlForは各ラベルをクリックするとインプットにフォーカスを当てることができる */}
            <label htmlFor="name">名前 :</label>
            {/* value属性とState値の紐付け */}
            <input id="name" name="name" type="text" onChange={handleForm} value={form.name} />
        </div>
        <div>
            {/* htmlForは各ラベルをクリックするとインプットにフォーカスを当てることができる */}
            <label htmlFor="name">年齢 :</label>
            <input id="age" name="age" type="text" onChange={handleForm} value={form.age} />
        </div>
        <div>
            <button type="button" onClick={show}>送信</button>
        </div>
        <p>こんにちは、{form.name} ({form.age} 歳)さん！</p>
      </form>
    );
}
