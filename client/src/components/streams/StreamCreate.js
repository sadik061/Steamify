import React from 'react';
import {Field, reduxForm} from 'redux-form';


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

    onSubmit (event){
        //event.preventDefault();
        console.log(event);
    }

    render(){
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field 
                    name="title"
                    component={this.renderField}
                    type="email"
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

export default reduxForm({form: 'StreamCreate', validate,warn})( StreamCreate );