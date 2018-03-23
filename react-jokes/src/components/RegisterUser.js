// Complete the component in this file.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/actions';

class RegisterUser extends Component {
  state = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFormSubmit = ({ username, password, confirmPassword }) => {
    this.props.register(
      username,
      password,
      confirmPassword,
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <p>Sign Up</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" placeholder="Username" />
          <label>Password:</label>
          <input type="password" name="password" placeholder="Password" />
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <button action="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
};

// Make sure to correctly fill in this `connect` call
export default connect(mapStateToProps, { register })(RegisterUser);
