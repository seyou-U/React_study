import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom, todoLastIdSelector } from "../store/atom";

export default function RecoilTodo() {
  const [title, setTitle] = useState('');
  // Todoリスト、最大id値をそれぞれRecoilから取得する
  const [todo, setTodo] = useRecoilState(todoAtom);
  const maxId = useRecoilValue(todoLastIdSelector);

  const handleChangeTitle = e => setTitle(e.target.value);
  // [追加]ボタンでTodo項目を追加する
  const handleAdd = () => {
    setTodo([
      ...todo,
      {
        id: maxId + 1,
        title,
        isDone: false,
      }
    ]);
  };

  // [済]ボタンでTodo項目を作業済みとしてマークする
  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      } else
    }));
  };
}
