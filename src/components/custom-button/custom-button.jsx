import React from 'react';
import classNames from 'classnames';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={classNames({ 'google-sign-in': isGoogleSignIn } , 'custom-button')}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;