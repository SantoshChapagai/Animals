import React from 'react';
import './component.css'

const Footer = () => {
  const date = new Date();
  const year =date.getFullYear();
  return (
    <div className='footer'>
      <p>&copy; Santosh Chapagai, {year}</p>
    </div>
  );
};

export default Footer;