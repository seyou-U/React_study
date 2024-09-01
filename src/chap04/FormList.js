import { useState } from "react";

export default function FormList() {
    const [form, setForm] = useState({
      animal: ['dog','hamster']
    });

    // リストボックスの変更時に入力値をStateに反映させる
    const handleFormList = e => {
      // 選択肢を格納するための配列を用意する
      const data = [];
      const opts = e.target.options;
      for (const opt of opts) {
        if (opt.selected) {
          data.push(opt.value);
        }
      }
      // 最終的な結果をStateに反映させる / e.target.valueでアクセスすることができない
      setForm({
        ...form,
        [e.target.name]: data
      })
    };

    // 送信ボタンでログにメッセージが出力
    const show = () => {
      console.log(`好きな動物: ${form.animal}`)
    };

    return(
      // multipleは複数選択を可能にする
      <form>
        <label htmlFor="animal">好きな動物 :</label><br />
        <select id="animal" name="animal"
         value={form.animal}
         size="4" multiple={true}
         onChange={handleFormList}>
          <option value="dog">イヌ</option>
          <option value="cat">ネコ</option>
          <option value="hamster">ハムスター</option>
          <option value="rabbit">ウサギ</option>
        </select>
        <button type="button" onClick={show}>送信</button>
      </form>
    );
}
