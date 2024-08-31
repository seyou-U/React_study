// Childrenを複数引き渡すとき
// export default function TitledPanel({ title, body}){
//     return(
//       <div style={{
//         margin: 50,
//         padding: 20,
//         border: '1px solid #000',
//         width: 'fit-content',
//         boxShadow: '10px 5px 5px #999',
//         backgroundColor: '#fff'
//       }}>
//         {title}
//         <hr />
//         {body}
//       </div>
//     );
// }

// key属性をキーに目的の要素を取り出すことができる
export default function TitledPanel({ children }){
    // key属性がtitle/bodyであるものを取得する
    // elemは個々の要素のことを指す
    const title = children.find(elem => elem.key === 'title');
    const body = children.find(elem => elem.key === 'body');
    return(
      <div style={{
        margin: 50,
        padding: 20,
        border: '1px solid #000',
        width: 'fit-content',
        boxShadow: '10px 5px 5px #999',
        backgroundColor: '#fff'
      }}>
        {title}
        <hr />
        {body}
      </div>
    );
}
