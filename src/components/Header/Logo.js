import React from 'react';

import LogoImg from './web-link.png' // <a href="https://www.flaticon.com/free-icons/web-site" title="web site icons">Web site icons created by Freepik - Flaticon</a>

const styles = {
  width: 80,
  height: 'auto'
}

function Logo() {
  return (
    <div>
      <img src={LogoImg} alt="Logo" style={styles} />
    </div>
  );
}

export default Logo;