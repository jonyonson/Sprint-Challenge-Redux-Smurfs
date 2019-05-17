import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.age,
    };
    this.props.addSmurf(newSmurf).then(() => this.props.hideForm());
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm AddSmurf">
        <h2 className="SmurfForm__title">Add New Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="SmurfForm__input"
            autoComplete="off"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
            type="text"
          />
          <br />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
            autoComplete="off"
            type="text"
          />
          <br />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
            autoComplete="off"
            type="text"
          />
          <br />
          <button className="SmurfForm__submit" type="submit">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
