import React, { useState } from "react";

class Form extends React.Component {
  state = {
    name: ''
  }

  // bind()
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // } 

  handleClick(event) {
    console.log('handleClick', event);
    console.log('React Button');
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  handleChange = (event) => {
    console.log('input value:', event.target.value);
    this.setState({ name: event.target.value })
    console.log('this', this);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleChange} />
      <button onClick={this.handleClick.bind(this)}>React Button</button> {/* bind(this) in line */}
    </form>
  }
}

// function Form() {
//   const handleClick = () => { console.log('React Button'); }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(event);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button onClick={handleClick}>React Button</button>
//     </form>
//   )
// }

export default Form;