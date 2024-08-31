import './SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({ mode }) {
  return (
    // modeに応じてクラススタイルを切り替える
    <div className={cn('box', mode === 'light' ? 'light' : 'dark')}>
        こんにちは、世界!
    </div>
  );
}
