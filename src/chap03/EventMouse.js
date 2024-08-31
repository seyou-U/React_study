import { useState } from "react";

export default function EventMouse({ beforeSrc, afterSrc, alt} ) {
  // 現在表示している画像
  const [current, setCurrent] = useState(beforeSrc);
  // mouseover/mouseleaveイベントハンドラー
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);
  return (
    <img src={current} alt={alt}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave} />
  );
}
