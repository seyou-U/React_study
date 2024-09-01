import { useState } from "react";
import './StateTodo .css';

// Todo項目idの最大値 (登録都度にインクリメント)
let maxId = 0;
export default function StateTodo() {
    // 入力値 (title)、 Todoリスト (todo)をStateで管理
    const [title, setTile] = useState('');
    const [todo, setTodo] = useState([]);
    // 次のソート方向 (降順であればtrue)
    const [desc, setDesc] = useState(true);

    // テキストボックスへの入力をStateに反映
    const handleChangeTitle = e => {
        setTile(e.target.value);
    };

    const handleClick = () => {
        // 新規Todoの追加
        // eslint-disable-next-line no-lone-blocks
        {/* 配列に新規要素を追加する場合、push/unshiftなどの破壊的メソッドを用いることができない
            代わりに「...」演算子で元の配列を複製し、新規要素を追加することで対応している*/}

        setTodo([
            ...todo,
            {
                id: ++maxId, // id値
                title, // Todo本体
                created: new Date(), // 作成日時
                isDone: false // 実行済か?
            }
        ])
    };

    // [済]ボタンでTodo項目を完了状態にする
    const handleDone = e => {
        // todo配列を走査し、id値が等しいものを検索する
        setTodo(todo.map(item => {
            // 右辺では独自データ属性のidプロパティを取得する(e.target.dataset.名前)
            if (item.id === Number(e.target.dataset.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }));
    };

    // [削除]ボタンで該当のTodo項目を削除する
    const handleRemove = e => {
        setTodo(todo.filter(item =>
            item.id !== Number(e.target.dataset.id)
        ));
    };

    const handleSort = e => {
        // 既存のTodoリストを複製の上でソートする
        const sorted = [...todo];
        // タイムスタンプ値に変換することで減算処理している。returnされる値がマイナスの場合、先に来るように並び替え
        sorted.sort((m, n) => {
            if (desc) {
                return n.created.getTime() - m.created.getTime();
            } else {
                return m.created.getTime() - n.created.getTime();
            }
        });
        // desc値を反転
        setDesc(d => !d);
        // ソート済みのリストを再セット
        setTodo(sorted);
    }

    return(
        <div>
            <label>
                やること:
                <input type="text" name="title"
                    value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button"
                onClick={handleClick}>追加</button>
            {/* desc値に応じてオプションを変更 */}
            <button type="button" onClick={handleSort}>
                ソート ({desc ? '↑' : '↓'})
            </button>
            <hr />
            {/* Todoをリストに整形 */}
            <ul>
                {/* liタグにkeyを入れることで変更差分を確認することができる。keyがないと全ての要素に対しアップデートしてしまう */}
                {todo.map(item => (
                    <li key={item.id} className={item.isDone ? 'done' : ''}>
                        {item.title}
                        {/* 独自データ属性(data-××)を利用 */}
                        <button type="button" onClick={handleDone} data-id={item.id}>済</button>
                        <button type="button" onClick={handleRemove} data-id={item.id}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
