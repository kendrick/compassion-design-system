import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import * as selectStyles from './Select.styles';

/**
 * Primary UI component for user interaction
 */
export const Select = ({ primary, size, label, ...props }) => {
  return (
    <button
      type="button"
      css={selectStyles.buttonStyles}
      className={cx(
        { 'button--primary': primary },
        { [`button--${size}`]: size }
      )}
      {...props}
    >
      {label}
    </button>
  );
};

Select.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Select.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
};
