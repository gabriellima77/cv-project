import React, { Component } from 'react';
import '../styles/headerStyles.css';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDark: false,
      className: 'fas fa-moon'
    }
  }

  changeTheme = ()=> {
    let head = 'rgb(51, 51, 51)';
    let bk = 'rgb(233, 233, 233)';
    if(!this.state.isDark) {
      head = 'red';
      bk = 'black';
    }
    
    this.setState((prevState)=> ({
      isDark: !prevState.isDark,
      className: `fas fa-${(prevState.isDark)?'moon':'sun'}`,
    }));

    document.documentElement.style.setProperty('--head-foot', head);
    document.documentElement.style.setProperty('--bk', bk);
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
