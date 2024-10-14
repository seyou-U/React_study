import { useReducer } from "react";

export default function HookReducerUp({ init }) {
  // StateとReducerの準備を行う
  // useReducer関数 : 第一引数はStateを更新するための関数、第二引数はStateの初期値を定義する
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // カウント数の増減 (Actionへの追加パラメータはtypeプロパティと同じく「action. ~」でアクセスすることができる)
        case 'update':
          return { count: state.count + action.step };
        // カウントのリセット
        case 'reset':
          return { count: action.init }
        // 既定の挙動 (Stateをそのまま返却)
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
  const handleUp = () => dispatch({ type: 'update', step: 1 });
  const handleDown = () => dispatch({ type: 'update', step: -1 });
  const handleReset = () => dispatch({ type: 'reset', init: 0 });

  return (
    <>
      <button onClick={handleUp}>カウントアップ</button>
      <button onClick={handleDown}>カウントダウン</button>
      <button onClick={handleReset}>カウントリセット</button>
      <p>{state.count}回クリックされました</p>
    </>
  );
}
