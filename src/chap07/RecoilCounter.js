import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { counterAtom } from "../store/atom";


export default function RecoilCounter() {
  // Recoil管理下の値とセッターを取得する / ストア(counterAtom)を参照
  const [counter, setCounter] = useRecoilState(counterAtom);
  // Stateの値を初期化するための関数を生成するuseResetRecoilState関数
  const resetCounter = useResetRecoilState(counterAtom);

  // 以下の2つを定義することで7行目と同等な書き方をすることができる
//   const counter = useRecoilValue(counterAtom);
//   const setCounter = useSetRecoilState(counterAtom);

  const handleClick = () => {
    // アロー関数で渡すこともできるが、設定値そのものを渡すこともできる
    setCounter(counter + 1);
    // setCounter(c => c + 1);
  };

  return(
    <>
      <button onClick={handleClick}>カウント</button>
      <button onClick={() => resetCounter()}>リセット</button>
      <p>{counter}回、クリックされました。</p>
    </>
  );
}
