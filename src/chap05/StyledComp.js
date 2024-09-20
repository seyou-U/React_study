import styled from "styled-components";

// 標準タグ(styled-components)は、既存の要素にスタイル付けしたコンポーネントを作成する
// 標準の<div>要素を拡張したMyPanelコンポーネントを定義
// styled.tag(拡張するタグ名)
const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: royalblue;
  color: white;
`;

export default function StyledComp() {
    return(
        <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義を・・・</MyPanel>
    );
}
