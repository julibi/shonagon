import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSnu, fetchSnus } from '../../actions/index';
import './CreateSnu.css';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength50 = maxLength(50);
const minLength = min => value =>
  value && value.length < min ? `Must contain at least ${min} characters` : undefined;
const minLength30 = minLength(30);
const minLength8 = minLength(8);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div className="form-group">
      <input {...input} placeholder={label} type={type}/><br />
      <div className="text-help">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
    </div>
  </div>
)

class CreateSnuContainer extends Component {

  onSubmit(values) {
    this.props.createSnu(values, () => {
          this.props.history.push('/')
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2 className="create-post-title">Create A New Post</h2>
        <div className="form-group">
          <Field name="title" component={renderField} type="text" label="Title" validate={[required, maxLength50]} />
        </div>

        <div className="form-group">
          <Field name="keywords" component={renderField} type="text" label="Keywords" />
        </div>

        <div className="form-group">
          <Field name="content" component={renderField} type="textarea" label="Text" validate={[required, minLength30]} />
        </div>

        <button className="createSnu" type="submit" disabled={pristine || submitting}>Submit</button>
        <Link to="/" className="link">Cancel</Link>
      </form>
    );
  }
}

const CreateSnuForm = reduxForm({
  form: 'CreateSnuForm'
})(CreateSnuContainer);

const CreateSnuFormWithConnect = connect(null, { createSnu })(CreateSnuForm);

export default CreateSnuFormWithConnect;
