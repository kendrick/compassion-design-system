import { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';
import styles from '@compassion-gds/core/src/components/Form/textarea.module.css';
import common from '@compassion-gds/core/src/components/Form/common.module.css';

import { FieldSize, FieldState, StateIcon } from './Helpers';
import { getClasses } from '../../utils/classes';

export interface TextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: FieldSize;
  state?: FieldState;
}

export interface TextAreaFieldProps extends TextAreaProps {
  label?: string;
  fieldClassName?: string;
  showCounter?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  (props, ref) => {
    const {
      id,
      label = '',
      state,
      size,
      className,
      fieldClassName,
      maxLength,
      onChange,
      showCounter,
      ...rest
    } = props;
    const [count, setCount] = useState(0);
    const containerClassNames = getClasses(common, 'form-field-row', className);
    const labelClassNames = getClasses(common, ['form-label', state]);
    const helperClassNames = getClasses(common, ['form-hint', state]);
    const fieldClassNames = getClasses(
      common,
      ['form-field', state, size],
      fieldClassName,
    );

    const onChangeCallback = useCallback(
      (e) => {
        setCount(e.target.value.length);
        onChange && onChange(e);
      },
      [onChange],
    );

    return (
      <div className={containerClassNames}>
        <div className={getClasses(common, 'form-label-wrap')}>
          {label && (
            <label className={labelClassNames} htmlFor={id}>
              {label}
            </label>
          )}
          {showCounter && maxLength > 0 && (
            <span className={helperClassNames}>
              {count} / {maxLength}
            </span>
          )}
        </div>

        <div className={fieldClassNames}>
          <textarea
            id={id}
            ref={ref}
            disabled={state === 'disabled'}
            className={getClasses(styles, 'form-input')}
            onChange={onChangeCallback}
            maxLength={maxLength}
            {...rest}
          />
          <StateIcon state={state} size={size} classes={styles} />
        </div>
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
