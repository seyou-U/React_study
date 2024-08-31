import React from "react";

export default function ForList({ src }) {
  return (
    // 書籍情報を<dl>/<dd>リストに整形
    <dl>
      {
      src.map(elem =>(
        // keyはループの中でのみ一意(ユニーク)であれば良いため、同じ配列を同一のページで複数回ループしたとして異なるループの間でキーが重複しても良い
        //　キー値はindexでも定義することができるが、明示的に用意すると良い
        <React.Fragment key={elem.isbn}>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                {elem.title}{elem.price}円
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
