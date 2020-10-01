import React from 'react';
import classNames from 'classnames';
import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer { ...props }>
    { children }
  </CustomButtonContainer >
);
// const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
//   <button
//     className={
//       classNames(
//         { 'google-sign-in': isGoogleSignIn }, 
//         { 'inverted': inverted }, 
//         'custom-button'
//       )
//     }
//     {...otherProps}
//   >
//     {children}
//   </button>
// );
export default CustomButton;