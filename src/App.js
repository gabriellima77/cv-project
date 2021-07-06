import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Preview from './components/Preview';
import Main from './components/Main';
import Footer from './components/Footer';
import { Component } from 'react';

import uniqid from 'uniqid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDark: true,
      isPreview: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
      xp: [],
      education: []
    }
  }

  themeHandler = ()=> {
    this.setState((prevState)=> ({
      isDark: !prevState.isDark,
    }));
  }

  changePreview = (bool)=> {
    this.setState({
      isPreview: bool
    })
  }

  changeFirstName = (e)=> {
    this.setState({
      firstName: e.target.value,
    });
  }

  changeLastName = (e)=> {
    this.setState({
      lastName: e.target.value,
    });
  }

  changeEmail = (e)=> {
    this.setState({
      email: e.target.value,
    });
  }

  changePhone = (e)=> {
    this.setState({
      phone: e.target.value,
    });
  }

  changeDescription = (e)=> {
    this.setState({
      description: e.target.value,
    });
  }

  addXp = ()=> {
    const newXp = {
      role: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    this.setState((prev)=> ({
      xp: [...prev.xp, newXp]
    }));
  }

  changeXp = (content)=> {
    const { role, company, city, from, to, id } = content;
    const newXp = {
      role,
      company,
      city,
      from,
      to,
      id
    }

    this.setState((prev)=> ({
      xp: prev.xp.map((exp)=> (exp.id === id)? newXp: exp)
    }))
  }

  removeXp = (id)=> {
    this.setState((prev)=> ({
      xp: prev.xp.filter((xp)=> (xp.id !== id))
    }));
  }

  addEducation = ()=> {
    const newEducation = {
      school: '',
      study: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    this.setState((prev)=> ({
      education: [...prev.education, newEducation]
    }));
  }

  changeEducation = (content)=> {
    const newEducation = {
      ...content
    }
    this.setState((prev)=> ({
      education: prev.education.map((educ)=> (educ.id === newEducation.id)? newEducation: educ)
    }));
  }

  removeEducation = (id)=> {
    this.setState((prev)=> ({
      education: prev.education.filter((educ)=> (educ.id !== id))
    }));
  }

  render() {
    const { isDark } = this.state;
    const { firstName, lastName, email, phone, description } = this.state;
    const general = { firstName, lastName, email, phone, description };
    const events = {
      changeFirstName: this.changeFirstName,
      changeLastName: this.changeLastName,
      changeEmail: this.changeEmail,
      changePhone: this.changePhone,
      changeDescription: this.changeDescription
    }

    const educationEvents = {
      changeEducation: this.changeEducation,
      addEducation: this.addEducation,
      removeEducation: this.removeEducation
    }

    const xpEvents = {
      changeXp: this.changeXp,
      addXp: this.addXp,
      removeXp: this.removeXp
    }

    return (
      <div className="App">
        <Header isDark={isDark} themeHandler={this.themeHandler} />
        <Buttons changePreview={this.changePreview}/>
        {
          (this.state.isPreview)
            ? <Preview
                general={general}
                xp={this.state.xp}
                education={this.state.education}
              />
            : <Main
                data={this.state}
                events={events}
                education={this.state.education}
                educationEvents={educationEvents}
                xp={this.state.xp}
                xpEvents={xpEvents}
              />
        }
        <Footer isDark={isDark}/>
      </div>
    );
  }
}

