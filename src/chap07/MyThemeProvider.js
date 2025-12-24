import { amber, grey } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import ThemeContext from "./ThemeContext";


export default function MyThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  // コンテキストに引き渡す情報を準備
  const themeConfig = {
    mode,
    toggleMode: () => {
      setMode(prev =>
        prev === 'light' ? 'dark' : 'light'
      );
    }
  };

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

  return (
    <ThemeContext.Provider value={themeConfig}>
      <ThemeProvider theme={theme}>
        {/* MUIが用意しているリセットCSSのことを指し、リセットCSSはブラウザによって生じるデフォルトスタイルのバグや差を解消する */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
