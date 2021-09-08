import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { cx } from 'emotion';
import avatarGroupStyles from './AvatarGroup.styles';
import { useTheme } from '../../hooks';

export const AvatarGroup = ({ size, overlap, gapColor, shape, ...props }) => {
  const theme = useTheme();

  return (
    <div
      css={avatarGroupStyles(theme.component.avatarGroup, gapColor)}
      className={cx('avatar-group', {
        [`avatar-group--${size}`]: size !== AvatarGroup.defaultProps.size,
        [`avatar-group--${shape}`]: shape !== AvatarGroup.defaultProps.shape,
        [`avatar-group--overlap-${overlap}`]:
          overlap !== AvatarGroup.defaultProps.overlap,
      })}
      {...props}
    >
      {props.children}
      {/* Image || Initials || Auto */}
    </div>
  );
};

AvatarGroup.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  overlap: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  gapColor: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'square', 'rounded']),
};

AvatarGroup.defaultProps = {
  size: 'small',
  overlap: 'small',
  gapColor: '#fff',
  shape: 'circle',
};
