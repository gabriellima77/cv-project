import React, { Component } from 'react';
import Description from './general/Description';
import Email from './general/Email';
import FirstName from './general/FirstName';
import LastName from './general/LastName';
import Phone from './general/Phone';

export default class GeneralInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
    }
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
    })
  }

  changeDescription = (e)=> {
    this.setState({
      description: e.target.value,
    })
  }

  render() {
    const { firstName, lastName, email, phone, description } = this.state;
    return(
      <section className="general">
        <h2>General Infomartion</h2>
        <form className="form">
          <FirstName firstName={firstName} changeFirstName={this.changeFirstName} />
          <LastName lastName={lastName} changeLastName={this.changeLastName} />
          <Email  email={email} changeEmail={this.changeEmail}/>
          <Phone phone={phone} changePhone={this.changePhone}/>
          <Description description={description} changeDescription={this.changeDescription}/>
        </form>
      </section>
    );
  }
}