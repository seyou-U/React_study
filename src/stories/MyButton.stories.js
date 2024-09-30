import MyButton from "./MyButton";
import { action } from '@storybook/addon-actions';
import { expect } from "@storybook/jest";
import { userEvent, within} from "@storybook/test";

// MyButtonコンポーネントに応じたストーリーを作る
// 基本情報を宣言する
export default {
  title: 'MyApp/MyButton',
  component: MyButton,
  // 既定のエクスポートに対しargsオプションを追加することで規定値を定めることができる
  args: {
    label: 'Push!!',
  },
  // argTypesはpropsで渡される際の型の設定を行うことができるもの
  // size属性をラジオボタンではなく、選択ボックスで選択する
  argTypes: {
    handleClick: { action: 'clicked'},
    size: {
      control: { type: 'select' },
      // .storiesファイル単位で有効にする。 handleClick属性によるActionへの出力が有効になる
    },
  },
  parameters: {
    // コンポーネント単位で背景色を指定することができる
    backgrounds: {
      values: [
        { name: 'ghostwhite', value: '#f8f8ff' },
        { name: 'aquamarine', value: '#7fffd4' },
        { name: 'coral', value: '#ff7f50' },
      ],
    },
    // コンポーネントの配置を調節するレイアウト
    layout: 'centered',
  },
  //独自レイアウトの付与を行う (デコレータ), 引数としてストーリーを受け取り戻り値としてデコレートされた結果を返す
  decorators: [
    Story => (
      <div style={{
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
      }}>
        <Story />
      </div>
    ),
  ],
  // ドキュメントをカスタマイズするために下記コードをコメントアウト
  // tags: ['autodocs'],
};

// 下記にストーリー単位で宣言している
// argsオプションを用いて宣言している
export const Index = {
  args: {
    primary: true,
    size: 'medium' ,
    label: 'ボタン',
    // handleClick: e => {
    //   action('clicked')(e, new DataTransfer());
    // },
    // handleClickプロパティが宣言されている上でonClickハンドラーを定義すると上書きされてしまうためコメントアウトする
    // onClick: () => console.log('Hello, Storybook!!'),
  },
  // playメソッドは引数としてストーリーに関わる情報(オブジェクト)を受け取る
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    userEvent.click(button);
    userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(2);
  }
};

// 以下のように記述することもできるが一般的には記述しない
export const White = {
  render: args => <MyButton {...args} />,
  args: {
    size: 'small' ,
    label: 'ボタン',
    backgroundColor: '#fff',
    handleClick: action('clicked'),
  }
};

export const Yellow = {
  args: {
    ...White.args,
    backgroundColor: 'lightyellow'
  }
};

// 下記はrenderを用いてプロパティを渡している
// export const Index = {
//   render: () => <MyButton primary size="medium" label="ボタン"
//     onClick={() => console.log('Hello, Storybook!!')} />
// };

// export const White = {
//   render: () => <MyButton size="small" label="ボタン"
//     backgroundColor="#fff" />
// };
