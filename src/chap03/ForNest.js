import ForItem from './ForItem';

export default function ForNest({ src }) {
  return (
    <dl>
      {/* ForItem関数を別のコンポーネントから呼び出す */}
      {src.map(elem =>
        <ForItem book={elem} key={elem.isbn} />
      )}
    </dl>
  );
}
