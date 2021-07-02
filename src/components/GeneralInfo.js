import React, { Component } from 'react';

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

  render() {
    return(
      <section className="general">
        <h2>General Infomartion</h2>
        <form className="form">
          <div className="input">
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="input">
            <label htmlFor="lastName">Last Name: </label>
            <input id="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email: </label>
            <input id="email" type="email" placeholder="Email" />
          </div>
          <div className="input">
            <label htmlFor="phone">Phone: </label>
            <input id="phone" type="tel" placeholder="Phone Number" />
          </div>
          <div className="input">
            <label htmlFor="description">Description: </label>
            <textarea id="description" placeholder="Description"></textarea>
          </div>
        </form>
      </section>
    );
  }
}