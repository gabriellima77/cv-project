import React, { Component } from 'react';
import FormXp from './mainContent/FormXp';

export default class Experience extends Component {

  btnEventHandler = ()=> {
    const { addXp } = this.props;
    addXp();
  }

  changeValue = (exp)=> {
    let newXp = {
      ...exp
    };
    this.props.changeXp(newXp);
  }

  render() {
    const { xp, removeXp } = this.props;
    return(
      <section className="xp">
        <h2>Experience</h2>
        {xp.map((exp)=> (
          <FormXp
          key={exp.id}
          keyValue={exp.id}
          changeValue={this.changeValue}
          removeXp={removeXp}
          xp={exp}
        />))
      }
        <button onClick={this.btnEventHandler} className="large-btn">
          Add
        </button>
      </section>
    );
  }
}
