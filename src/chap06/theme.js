import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
    // アプリで利用するカラーリングを設定
    // palette: アプリで利用するカラーリング spacing: 要素間の間隔
    palette:{
      primary: {
        main: orange[500],
      },
      secondary: {
        main: green[500],
      },
    },
    spacing: 10,
    // コンポーネントで規定値を設定する (components - defaultProps)
    // 下記は<Button>要素のvariant属性の規定値をcontainedにするものである
    components: {
      MuiButton: {
        defaultProps: {
          variant: 'contained',
        },
      }
    },
});

export default theme;
