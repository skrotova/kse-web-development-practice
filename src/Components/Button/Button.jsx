import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? styles.storybookButtonPrimary : styles.storybookButtonSecondary;
  return (
    <button
      type="button"
      className={[styles.storybookButton, styles[`storybookButton--${size}`], mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
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

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
