import { forwardRef } from "react";

// 関数コンポーネントはインスタンスを持たないので参照することができない。そのためforwardRef関数を用いることで対応することができる
const MyTextBox = forwardRef(({ label }, ref) => (
  <label>
    {label} :
    <input type="text" size="15" ref={ref} />
  </label>
));

export default MyTextBox;
