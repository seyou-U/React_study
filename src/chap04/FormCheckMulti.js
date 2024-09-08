import { useState } from "react";

export default function FormCheckMulti() {
    const [form, setForm] = useState({
        animal: ['dog', 'hamster']
    });

    // チェックボックスの変更時に入力値をStateに反映する
    const handleFormMulti = e => {
        const fa = form.animal;
        // チェック時には配列の値を追加、チェック解除時には削除
        if (e.target.checked) {
            fa.push(e.target.value);
        } else {
            // spliceは既存の要素を取り除くなど配列の変更を行う / 第一引数で位置を指しており、第二引数で個数を示している
            fa.splice(fa.indexOf(e.target.value), 1);
        }

        // 編集済みの配列をStateに反映
        // Sateの更新は常にセッター(set×××関数)で更新しなければいけない
        // 「...」の意味について、既存のオブジェクトを複製し更新部分(e.target.name)の箇所を上書きする
        setForm({
            ...form,
            [e.target.name]: fa
        });
    };

    const show = () => console.log(`好きな動物: ${form.animal}`);

    // チェックの有無を個々のチェックボックスに反映
    return (
        <form>
            <fieldset>
                <legend>好きな動物 :</legend>
                <label htmlFor="animal_dog">イヌ</label>
                <input id="animal_dog" name="animal"
                    type="checkbox" value="dog"
                    checked={form.animal.includes('dog')}
                    onChange={handleFormMulti} /><br />
                <label htmlFor="animal_cat">ネコ</label>
                <input id="animal_cat" name="animal"
                    type="checkbox" value="cat"
                    checked={form.animal.includes('cat')}
                    onChange={handleFormMulti} /><br />
            </fieldset>
            <button type="button" onClick={show}>送信</button>
        </form>
    );
}
