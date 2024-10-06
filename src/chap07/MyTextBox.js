import { forwardRef, useImperativeHandle, useRef } from "react";

// 関数コンポーネントはインスタンスを持たないので参照することができない。そのためforwardRef関数を用いることで対応することができる
const MyTextBox = forwardRef(({ label }, ref) => {
  // テキストボックスへの参照を準備
  const input = useRef(null);

  // 親コンポーネントに対して公開するオブジェクトを生成する
  // useImperativeHandle(ref属性経由で受け取ったオブジェクト、ref経由で公開するオブジェクトを生成する関数、依存する値)
  useImperativeHandle(ref, () => {
    // テキストボックス(input)に対してフォーカスするためのメソッドを準備
    return {
      focus() {
        input.current.focus();
      },
    };
  }, []);

  return(
    <label>
      {label} :
      <input type="text" size="15" ref={ref} />
    </label>
  );
});

export default MyTextBox;
