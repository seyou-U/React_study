import { useReducer } from "react";

// 引数に基づき0〜initの間の値を生成する
function initCounter(init) {
  console.log('initCounter is Called!!');
  return {
    count: Math.floor(Math.random() * (init + 1))
  };
}

export default function HookReducerInit({ init }) {
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
    // 第3引数がある場合は、第3引数に対して渡したい値を第2引数に記述する
    init,
    // 第３引数は初期値生成のための関数を記述する
    initCounter,
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
