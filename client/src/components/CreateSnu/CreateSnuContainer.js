import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSnu, fetchSnus } from '../../actions/index';
import { Field, reduxForm } from 'redux-form';
import { Link, browserHistory } from 'react-router-dom';

import './CreateSnu.css';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength150 = maxLength(150);
const minLength = min => value =>
  value && value.length < min ? `Must contain at least ${min} characters` : undefined;
const minLength30 = minLength(30);
const minLength8 = minLength(8);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
  return(
  <div>
    <label>{label}</label>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} /><br />
      <div className="text-help">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
    </div>
  </div>
)}

class SnuForm extends Component {

  onSubmit(values) {
    this.props.createSnu(values, () => {
        console.log(this.props.history);
        this.props.history.push('/');
    });
  }
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3 className="create-post-title">Create A New Post</h3>
        <div>
          <Field name="title" component={renderField} type="text" label="title" validate={[required, maxLength150]} />
        </div>

        <div className="form-group">
          <Field name="keywords" component={renderField} type="text" label="keywords" validate={[required]}/>
        </div>

        <div className="form-group">
          <Field name="text" component={renderField} type="textarea" label="text" validate={[required, minLength30]} />
        </div>

        <button type="submit" className="createSnu" disabled={pristine || submitting}>Submit</button>
        <Link to="/" className="link">Cancel</Link>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    snus: state.snus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnus: () => dispatch(fetchSnus()),
    createSnu: (object) => dispatch(createSnu(object))
  }
};

let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>{/* form body*/}</form>
}

SnuForm = reduxForm({
  // a unique name for the form
  form: 'MyUniqueSnuForm'
})(SnuForm)

export const CreateSnuFormWithConnect = connect(mapStateToProps, mapDispatchToProps)(SnuForm);
