import { atom, selector } from "recoil";

// atom関数に対し、オブジェクトを渡すことで定義することができる
export const counterAtom = atom({
  key: 'counterAtom',
  default: 0
});

// Todoリストの定義
export const todoAtom = atom({
  key: 'todosAtom',
  default: [
    {
      id: 1,
      title: 'WINGS会議の資料作成',
      isDone: false,
    },
    {
      id: 2,
      title: 'WINGS会議の議事録作成',
      isDone: false,
    },
  ]
});

// selector関数に対し、構成情報を渡すことで定義することができる
// keyはストアを一意に特定するキー、getはセレクターの本体を指す
export const todoLastIdSelector = selector({
  key: 'todoLastIdSelector',
  get: ({ get }) => {
    // Todoリスト最後のTodoを取得する (get関数でTodoリストを受け取り、atメソッドで末尾の項目を取得する)
    const todo = get(todoAtom);
    // atメソッドの引数がマイナスの場合は、配列の末尾から数える
    return todo.at(-1)?.id ?? 0;
  },
});
