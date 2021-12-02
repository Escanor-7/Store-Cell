import React from 'react';
import * as S from './SideMenu.styles.js';

const SideMenu = () => {

  return (
    // <nav role="navigation">
      <S.MenuToggle>
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <S.Menu>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank" rel="noreferrer"><li>Show me more</li></a>
        </S.Menu>
      </S.MenuToggle>
    // </nav>
  )
}

export default SideMenu;