import React from 'react';
import classNames from 'classnames';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label && (
      <label className={classNames({ 'shrink': otherProps.value.length }, 'form-input-label')}>
        {label}
      </label>
    )}
  </div>
);

export default FormInput;