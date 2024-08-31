import Download from "./Download";

export default function ForItem({ book }) {
  // if文はJSXの中に記述することはできない
  // let dd;
  // if (book.download) {
  //   dd = <dd>{book.summary}<Download isbn={book.isbn}/></dd>
  // } else {
  //   dd = <dd>{book.summary}</dd>
  // }
  // return (
  //   <>
  //     <dt>
  //       <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
  //         {book.title} ({book.price})円
  //       </a>
  //     </dt>
  //     {dd}
  //   </>
  // );

  // 即時関数を用いることで擬似的にJSXの中にif文を記述することができる
  // return (
  // <>
  //   <dt>
  //     <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
  //       {book.title} ({book.price})円
  //     </a>
  //   </dt>
  //   {/* 定義した関数を即座に実行、最後に()をつけることで即時関数になる */}
  //   {(() =>{
  //     if (book.download) {
  //       return <dd>{book.summary}<Download isbn={book.isbn}/></dd>
  //     } else {
  //       return <dd>{book.summary}</dd>
  //     }
  //   })()}
  // </>
  // );

  // if文で記述することもできるが、「?:」演算子や「&&」演算子で記述した方が冗長化を防ぐことができるので良い
  return (
  <>
    <dt>
      <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
        {book.title} ({book.price})円
      </a>
    </dt>
    <dd>
      {book.summary}
      {book.download ? <Download isbn={book.isbn}/> : null}
    </dd>
  </>
  );
}
