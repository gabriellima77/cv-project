import React, { useState } from 'react';
import '../styles/headerStyles.css';

const Header = (props)=> {
  const [className, setClassName] = useState('fas fa-moon');

  const changeTheme = ()=> {
    const {isDark, themeHandler} = props;
    let head = '#212121';
    let bk = '#323232';
    let font = 'white';
    let edit = 'linear-gradient(to right, #0f0c29, #302b63, #24243e)';
    let preview = 'linear-gradient(to right, #29632a, #239425, #1b401c)';

    if(!isDark) {
      head = '#A0937D';
      bk = '#F2DAC3';
      font = 'black';
      preview = 'linear-gradient(to right, #00b09b, #96c93d)';
      edit = 'linear-gradient(to right, #2193b0, #6dd5ed)';
    }

    setClassName(
      `fas fa-${(!isDark)?'moon':'sun'}`
    );

    document.documentElement.style.setProperty('--head-foot', head);
    document.documentElement.style.setProperty('--bk', bk);
    document.documentElement.style.setProperty('--font', font);
    document.documentElement.style.setProperty('--preview', preview);
    document.documentElement.style.setProperty('--edit', edit);
    themeHandler();
  }

  return (
    <header className="header">
      <h1 className="logo">Cv Application</h1>
      <button onClick={changeTheme} className="theme">
        <i className={className}></i>
      </button>
    </header>
  );
}

export default Header;
