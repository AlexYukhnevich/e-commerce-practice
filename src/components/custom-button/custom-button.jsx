import React from 'react';
import classNames from 'classnames';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={
      classNames(
        { 'google-sign-in': isGoogleSignIn }, 
        { 'inverted': inverted }, 
        'custom-button'
      )
    }
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;