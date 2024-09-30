import PropTypes from 'prop-types';
import './button.css';

export default function MyButton ({
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label = 'Button',
    handleClick,
    ...props
}) {
  const mode = primary ?
    'storybook-button--primary' : 'storybook-button--secondary';
  return(
    // Propsをもとにbutton要素の組み立て
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};

MyButton.propTypes = {
  /**
  * Primaryカラーを有効にするか
  */
  primary: PropTypes.bool,
  /**
  * 背景色
  */
  backgroundColor: PropTypes.string,
  /**
  * ボタンの大きさ
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
  * ボタンのキャプション
  */
  label: PropTypes.string.isRequired,
  /**
  * クリックハンドラー
  */
  handleClick: PropTypes.func,
};
