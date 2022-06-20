import React, { useState } from "react";

class Form extends React.Component {
  state = {
    name: '',
    surname: '',
    age: ''
  }

  handleClick = (event) => {
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    // console.log('input value:', event.target.value);
    // console.log('event target name:', event.target.name);
    const keyName = event.target.name;
    console.log(keyName);
    this.setState({ [keyName]: event.target.value })
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <div>
        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" name="surname" placeholder="Surname" onChange={this.handleChange} />
      </div>
      <div>
        <input type="text" name="age" placeholder="Age" onChange={this.handleChange} />
      </div>
      <button type="submit" onClick={this.handleClick}>Send</button>
    </form>
  }
}

export default Form;