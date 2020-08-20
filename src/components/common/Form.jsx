import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };
  validate = () => {
    const options = { abortEarly: false, stripUnknown: true };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (const item of error.details) {
      errors[item.path] = item.message;
    }
    return errors;
  };
  validateProperly = ({ name, value }) => {
    const input = { [name]: value };
    //console.log(this.schema[name]);
    const schema = { [name]: this.schema[name] };
    const options = { stripUnknown: true };
    const { error } = Joi.validate(input, schema, options);
    console.log(error);
    if (!error) return null;
    return error.details[0].message;
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    console.log(input.value);
    const errorMessage = this.validateProperly(input);
    console.log(errors);
    errors[input.name] = errorMessage;
    const data = { ...this.state.data };

    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
