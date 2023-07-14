import { MouseEvent, ButtonHTMLAttributes, forwardRef } from 'react';
import styles from '@compassion-gds/core/src/components/Button/button.module.css';
import { getClasses } from '../../utils/classes';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  mode?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    label,
    mode = 'primary',
    size = 'medium',
    disabled = false,
    className,
    style,
    ...rest
  } = props;
  const classNames = getClasses(styles, ['button-main', mode, size], className);

  return (
    <button
      className={classNames}
      disabled={disabled}
      style={style}
      ref={ref}
      {...rest}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
