import styled from "styled-components";

// <button>要素を生成するMyButtonコンポーネント
export default function MyButton({ className, children}) {
   return(
    <button type="button" className={className}>
        {children}
    </button>
   );
}

// 既存のコンポーネントにスタイル付けをしている
// MyButtonにスタイル付けしたMyStyledButtonを定義する
export const MyStyledButton = styled(MyButton)`
  display: block;
  background-color: royalblue;
  color: white;
  font-weight: bold;
  width: 80px;
  height: 50px;
`;
