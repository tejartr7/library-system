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
      <a href="https://twitter.com/raghu_rtr">Twitter </a>
      <a href="mailto:codworldrtr7@gmail.com"> Mail </a>
      <p>©All Rights Reserved</p>
    </div>
  );
};

export default Footer;
