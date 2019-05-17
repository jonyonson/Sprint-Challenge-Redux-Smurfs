import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm.js';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    showNewSmurfForm: false,
  };
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ showNewSmurfForm: true });
  };

  hideNewSmurfForm = () => {
    this.setState({ showNewSmurfForm: false });
  };

  render() {
    return (
      <div className="Smurfs">
        <button onClick={this.handleClick} className="Smurfs__add-smurf">
          Add New Smurf
        </button>
        {this.state.showNewSmurfForm && (
          <SmurfForm hideForm={this.hideNewSmurfForm} />
        )}
        <ul style={{ padding: 0 }}>
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
