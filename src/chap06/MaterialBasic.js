/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from "@mui/material";

// MUIを用いたボタンの実装
// variantはボタンの種別を表している
export default function MaterialBasic() {
    // fontでスタイルを定義することで大文字への自動変換を解除することができる
    const font = css`
      text-transform: none;
    `;
    return(
      <>
        <Button variant="text" color="secondary" css={font}>Text</Button>
        <Button variant="contained" color="secondary" css={font}>Contained</Button>
        <Button variant="outlined" color="secondary" css={font}>Outlined</Button>
      </>
    );
}
