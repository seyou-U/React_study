import { createContext } from "react";

export default createContext({
  mode: 'light',
  // モードを切り替えるためのハンドラー
  toggleMode: () => {}
});
