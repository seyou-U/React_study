import { useReducer } from "react";

export default function HookReducer({ init }) {
  // StateとReducerの準備を行う
  // useReducer関数 : 第一引数はStateを更新するための関数、第二引数はStateの初期値を定義する
  const [state, dispatch] = useReducer(
    // Reducer関数
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count + 1 };
        default:
          return state;
      }
    },
    // Stateの初期値
    {
      count: init
    }
  );

  // Reducer経由でStateを更新するクリックイベント
  const handleClick = () => {
    dispatch({ type: 'update'});
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回クリックされました</p>
    </>
  );
}
