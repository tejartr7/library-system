import React from 'react';

const Footer = () => {
  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white', // You can adjust the background color as needed
    textAlign: 'center',
    zIndex: 1000, // Ensure it's above other elements if necessary
  };

  return (
    <div style={footerStyle} className='footer text-center mt-5 font-bold text-[#6469ff] text-xl uppercase'>
      <a href="https://github.com/tejartr7">Github </a>
      <a href="https://www.linkedin.com/in/raghu-teja-reddy-sureddy-8b6721236/"> Linkedin </a>
      <a href="https://www.instagram.com/tejartr445/"> Instagram </a>
      <p>©All Rights Reserved</p>
    </div>
  );
};

export default Footer;
