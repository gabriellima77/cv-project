import React, { Component } from 'react';
import Input from './mainContent/Input';

export default class Experience extends Component {

  btnEventHandler = ()=> {
    const { addXp } = this.props;
    addXp();
  }

  changeValue = (value, type, exp)=> {
    let newXp = {
      ...exp
    };
    switch(type){
      case 'role':
        newXp.role = value;
        break;
      case 'company':
        newXp.company = value;
        break;
      case 'city':
        newXp.city = value;
        break;
      case 'from':
        newXp.from = value;
        break;
      case 'to':
        newXp.to = value;
        break;
      default:
        break;
    }
    this.props.changeXp(newXp);
  }

  getInputs = (xp, key)=> {
    const { removeXp } = this.props;
    return(
      <div key={key} className="content">
        <form className="xp-box">
          <Input
            title="Role"
            type="text"
            prop="role"
            changeValue={this.changeValue}
            obj={xp}
          />
          <Input
            title="Company"
            type="text"
            prop="company"
            changeValue={this.changeValue}
            obj={xp}
          />
          <Input
            title="City"
            type="text"
            prop="city"
            changeValue={this.changeValue}
            obj={xp}
          />
          <Input
            title="From"
            type="date"
            prop="from"
            changeValue={this.changeValue}
            obj={xp}
          />
          <Input
            title="From"
            type="date"
            prop="from"
            changeValue={this.changeValue}
            obj={xp}
          />
          <Input
            title="To"
            type="date"
            prop="to"
            changeValue={this.changeValue}
            obj={xp}
          />
        </form>
        <button
          onClick={()=> {removeXp(key)}}
          className="large-btn m-vertical"
        >
          Delete
        </button>
      </div>
    );
  }

  render() {
    const { xp } = this.props;
    return(
      <section className="xp">
        <h2>Experience</h2>
        {xp.map((exp)=> (this.getInputs(exp, exp.id)))}
        <button onClick={this.btnEventHandler} className="large-btn">
          Add
        </button>
      </section>
    );
  }
}
