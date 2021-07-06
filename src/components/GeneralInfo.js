import React, { Component } from 'react';
import Description from './general/Description';
import Email from './general/Email';
import FirstName from './general/FirstName';
import LastName from './general/LastName';
import Phone from './general/Phone';

export default class GeneralInfo extends Component {
  render() {
    const { data, events } = this.props;
    const { firstName, lastName, email, phone, description } = data;
    const {
      changeFirstName, changeLastName, changeEmail,
      changePhone, changeDescription
    } = events;
    return(
      <section className="general">
        <h2>General Infomartion</h2>
        <form className="form">
          <FirstName firstName={firstName} changeFirstName={changeFirstName} />
          <LastName lastName={lastName} changeLastName={changeLastName} />
          <Email email={email} changeEmail={changeEmail}/>
          <Phone phone={phone} changePhone={changePhone}/>
          <Description description={description} changeDescription={changeDescription}/>
        </form>
      </section>
    );
  }
}