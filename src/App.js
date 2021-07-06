import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDark: true,
    }
  }

  themeHandler = ()=> {
    this.setState((prevState)=> ({
      isDark: !prevState.isDark,
    }));
  }

  render() {
    const { isDark } = this.state;
    return (
      <div className="App">
        <Header isDark={isDark} themeHandler={this.themeHandler} />
        <Main />
        <Footer isDark={isDark}/>
      </div>
    );
  }
}

