import React, { Component } from "react";
import Form from "./common/Form";
import Joi from "joi-browser";
class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };
  schema = {
    username: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password").min(3).max(6),
    name: Joi.string().required().label("Name"),
  };
  doSubmit = () => {
    //Send data to server
    console.log("Submitted");
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <h1>Register Form</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
