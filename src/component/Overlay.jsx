import React from 'react';

const Overlay = ({ color, children }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: color,
    opacity: 0.7,
    zIndex: 1000,
  };

  return (
    <div style={overlayStyle}>
      {children}
    </div>
  );
};

export default Overlay;
