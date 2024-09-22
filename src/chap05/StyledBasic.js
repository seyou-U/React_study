// style要素に対してjsxを付与することでスタイルの定義を行うことができる
export default function StyledBasic() {
    return (
        <>
            {/* Styled JSXによるスタイル定義*/}
            {/* :global擬似セレクターを用いることでh3スタイルがグローバルに適応される */}
            <style jsx>{`
            .panel {
              width: 300px;
              padding: 10px;
              border: 1px solid #000;
              border-radius: 5px;
              background-color: royalblue;
              color: white;
            }

            :global(h3) {
              color: Red;
            }
            `}</style>
            {/* グローバルスタイルを定義することで、アプリ全体に適応される */}
            {/* <style jsx global>{`
            h3 {
              background-color: Yellow;
            }
            `}</style> */}
            <div className="panel">
              <b>Styled JSX</b>は、JSX式にスタイル定義を・・・
            </div>
        </>
    );
}
