import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {createStream} from '../../actions';


class StreamCreate extends React.Component {
    renderField = ({
        input,
        label,
        type,
        meta: { touched, error, warning }
      }) => {
          const className = `filed ${error && touched ? 'error': ''}`;
          return (
            <div className={className}>
            <label >{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        //event.preventDefault();
       this.props.createStream(formValues);
    }

    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field 
                    name="title"
                    component={this.renderField}
                    type="text"
                    placeholder="Title"
                    label="Enter Title"
                    />

                    <Field 
                    name="description"
                    component={this.renderField}
                    type="text"
                    placeholder="Description"
                    label="Description"
                    />

                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        );
    }
};

const validate = (fromValues) => {
    const errors = {};
    if(!fromValues.title){
        errors.title = "You must insert a title";
    }else if (fromValues.title.length > 15) {
        errors.title = 'Must be 15 characters or less'
    }
    if(!fromValues.description){
        errors.description = "You must insert a description";
    }
    return errors;
}
const warn = (values) => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }

const fromWraped = reduxForm({form: 'StreamCreate', validate,warn})( StreamCreate );
export default connect(null,{createStream})(fromWraped);