import React, { Component } from 'react';

export default class Experience extends Component {
  constructor(props){
    super(props);

    this.state = {
      roles: [],
    }
  }

  btnEventHandler = ()=> {
    const { addXp } = this.props;
    addXp();
  }

  changeInput = (e, type, exp)=> {
    let newXp = {
      ...exp
    };
    switch(type){
      case 'role':
        newXp.role = e.target.value;
        break;
      case 'company':
        newXp.company = e.target.value;
        break;
      case 'city':
        newXp.city = e.target.value;
        break;
      case 'from':
        newXp.from = e.target.value;
        break;
      case 'to':
        newXp.to = e.target.value;
        break;
      default:
        break;
    }
    console.log(newXp);
    this.props.changeXp(newXp);
  }

  getInputs = (xp, key)=> {
    const { removeXp } = this.props;
    return(
      <div key={key} className="content">
        <form className="xp-box">
          <div className="input">
            <label>Role</label>
            <input
              onChange={(e)=> {this.changeInput(e, 'role', xp)}}
              type="text"
              placeholder="Role"
            />
          </div>
          <div className="input">
            <label>Company</label>
            <input
              onChange={(e)=> {this.changeInput(e, 'company', xp)}}
              type="text"
              placeholder="Company"
            />
          </div>
          <div className="input">
            <label>City</label>
            <input
              onChange={(e)=> {this.changeInput(e, 'city', xp)}}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="input">
            <label>From</label>
            <input
              onChange={(e)=> {this.changeInput(e, 'from', xp)}}
              type="date"
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div className="input">
            <label>To</label>
            <input
              onChange={(e)=> {this.changeInput(e, 'to', xp)}}
              type="date"
              placeholder="MM/DD/YYYY"
            />
          </div>
        </form>
        <button onClick={()=> {removeXp(key)}} className="xp-btn m-vertical">Delete</button>
      </div>
    );
  }

  render() {
    const { xp } = this.props;
    return(
      <section className="xp">
        <h2>Experience</h2>
        {xp.map((exp)=> (this.getInputs(exp, exp.id)))}
        <button onClick={this.btnEventHandler} className="xp-btn">
          Add
        </button>
      </section>
    );
  }
}
