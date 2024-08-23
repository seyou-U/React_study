// Propsの命名はキャメルケースで記述すること,　Propsを受け取るようにするためには引数を用意すること
export default function MyHello({myName = '権兵衛'}) {
  return (
      <div>こんにちは、{myName}さん!</div>
  );
}
