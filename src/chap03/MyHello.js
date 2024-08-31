import PropTypes from 'prop-types';

// Propsの命名はキャメルケースで記述すること,　Propsを受け取るようにするためには引数を用意すること
function MyHello(props) {
  return (
      <div>こんにちは、{props.myName}さん!</div>
  );
}

// 型情報の宣言
// 「コンポーネント名.propTypes」に対し、「プロパティ名: 型情報」の形式で型定義を渡すこと
MyHello.propTypes = {
  myName: PropTypes.string.isRequired
};

// 型定義はexport宣言よりも前であること
export default MyHello;
