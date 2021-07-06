import React, { Component } from 'react';
import '../styles/headerStyles.css';

export default class Header extends Component{
  constructor(props){
    super(props);

    this.state = {
      className: 'fas fa-moon'
    }
  }

  changeTheme = ()=> {
    const {isDark, themeHandler} = this.props;
    let head = '#212121';
    let bk = '#323232';
    let font = 'white';

    if(!isDark) {
      head = '#A0937D';
      bk = '#F2DAC3';
      font = 'black';
    }
    this.setState({
      className: `fas fa-${(!isDark)?'moon':'sun'}`,
    });

    document.documentElement.style.setProperty('--head-foot', head);
    document.documentElement.style.setProperty('--bk', bk);
    document.documentElement.style.setProperty('--font', font);
    themeHandler();
  }

  render(){
    return(
      <header className="header">
        <h1 className="logo">Cv Application</h1>
        <button onClick={this.changeTheme} className="theme">
          <i className={this.state.className}></i>
        </button>
      </header>
    );
  }
}
