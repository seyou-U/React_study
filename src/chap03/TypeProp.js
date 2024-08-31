import PropTypes from 'prop-types';

export function Member() {}
function TypeProp(props) {
    console.log(props);
    return <p>結果はコンソールを確認してください</p>;
}

const genderTypes = ['男性', '女性', 'その他'];
TypeProp.propTypes = {
  // Memberインスタンスであること
  prop1 : PropTypes.instanceOf(Member),
  // 指定された配列に含まれること
  prop2 : PropTypes.oneOf(genderTypes),
  // 文字列、数理、真偽地のいずれか
  prop3 : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  // 数値型の配列
  prop4 : PropTypes.arrayOf(PropTypes.number),
  // オブジェクトを連想配列として使用するとき、配下のプロパティの型を指定することができる
  prop5 : PropTypes.objectOf(PropTypes.number),
  // 同一の型ではなく個々のプロパティに型を設定する
  prop6 : PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.oneOf(genderTypes),
  })
};

export default TypeProp;
