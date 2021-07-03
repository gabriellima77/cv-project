import React, { Component } from 'react';

export default class Education extends Component {
  constructor(props){
    super(props);

    this.state = {
      roles: [],
      isAdding: false,
    }
  }

  btnEventHandler = ()=> {
    this.setState((prevState)=> ({
      isAdding: !prevState.isAdding
    }))
  }

  getInputs = ()=> {
    return(
      <form className="xp-box">
        <div className="input">
          <label>Role</label>
          <input type="text" placeholder="Role"/>
        </div>
      </form>
    )
  }

  render() {
    return(
      <section className="xp">
        <h2>Experience</h2>
        {(this.state.isAdding)? this.getInputs(): null}
        <button onClick={this.btnEventHandler} className="education-btn" >Add</button>
      </section>
    );
  }
}
