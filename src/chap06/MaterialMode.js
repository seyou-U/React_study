import { Button, CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";
// import { useState } from "react";

export default function MaterialMode() {
    // システム設定のモードに応じて変更するための定義
    // useMediaQueryは渡されたメディアクエリ (ユーザーの画面設定を確認するための条件式)
    const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';

    // 現在のモードを管理するステート (動的にではなく、システムの設定に依存させる場合はコメントアウトしても良い)
    // const [mode, setMode] = useState('light');
    // State値モードをlightとdarkで反転させる (動的にではなく、システムの設定に依存させる場合はコメントアウトしても良い)
    // const toggleMode = () => setMode(prev =>
    //     prev === 'light' ? 'dark' : 'light'
    // );
    // テーマを定義
    console.log(mode);
    const theme = createTheme({
        palette:{
          mode,
          // modeの値い応じてテーマを切り替え
          ...(mode === 'light'
          // ライトモードで利用するパレット
          // amberは琥珀色のこと
          ? {
              primary: amber,
            }
          // ダークモードで利用するパレット
          : {
              primary: {
                main: grey[500],
                contrastText: '#fff'
            },
            background: {
                default: grey[900],
                paper: grey[900],
            },
          }),
        },
    });

    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* システム設定に応じてモードを変更させる場合はonClickイベントを挟まなくても良い */}
        {/* <Button variant="contained" onClick={toggleMode}> */}
        <Button variant="contained">
          Mode {mode}
        </Button>
      </ThemeProvider>
    );
}
