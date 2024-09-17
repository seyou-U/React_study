export default function StyledDynamic({theme}) {
    return(
        <>
        {/* 静的なスタイル定義と動的なスタイル定義は切り離す */}
        <style jsx>{`
        .panel {
          width: 300px;
          padding: 10px;
          border: 1px solid #000;
          border-radius: 5px;
          background-color: royalblue;
          color: white;
        }
        `}
        </style>
        {/* 埋め込みの式は{•••}ではなく、${•••} */}
        <style jsx>{`
        .panel {
          border-radius: ${theme.radius ? '10px' : '0px'};
          background-color: ${theme.color};
        }
        `}
        </style>
        <div className="panel">
          <b>Styled JSX</b>は、JSX式にスタイル定義を・・・
        </div>
        </>
    );

}
