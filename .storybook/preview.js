// preview.jsのスコープ範囲はアプリ全体を指している
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // onXxxxx, handleXxxx属性がAction検知有効になる.
    actions: { argTypesRegex: "^(on|handle)[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // キャンバスの背景色をlight / dark以外から指定することができる
    // backgrounds: {
    //   values: [
    //     { name: 'ghostwhite', value: '#f8f8ff' },
    //     { name: 'aquamarine', value: '#7fffd4' },
    //     { name: 'coral', value: '#ff7f50' },
    //   ],
    // },
    // 表示領域のサイズ変更
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      // 既定のビューポートを設定
      defaultViewport: 'iphonex',
    }
  },
};

export default preview;
