import React, { useState } from 'react';

const Button = ({ title }) => {
  return (
    <button>{title}</button>
  )
}

const withToggle = (Wrapped) => (props) => {
  const [toggle, setToggle]= useState(false);
  return (
    <Wrapped 
      {...props}
      toggle={() => setToggle(!toggle)}
      toggleStatus={toggle}
    />
  )
}

const ToggleButton = withToggle(Button);

export default function App() {
  return (
    <ToggleButton title="Button"/>
  )
}