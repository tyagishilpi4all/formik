import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage }  from "formik";

export default class NewForm extends Component {

   initialValues = {
    name: "",
    email: "",
    channel: "",
    comments : '',
    social:{
      facebook : '',
      twitter: ''
    },
    phoneNumber : ["" , ""]
  };

  handleSubmit = (values) => {
    console.log("form data --->", values);
  };

  validate = values =>{
    let errors = {}
  
    if(!values.name){
      errors.name = 'Required Field'
    }
    if(!values.email){
      errors.email = 'Required Field'
    }
    if(!values.channel){
      errors.channel = 'Required Field'
    }
    // if(!values.comments){
    //   errors.comments = 'Required Field'
    // }
  
    return errors;
  }

    render(){
    console.log("this.props",Formik)
    return (
      <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit} validate={this.validate} >
        <section className="container">
          <div className="col-md-8 mx-auto">
            <Form>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <Field
                  type="email"
                  className={`form-control`}
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                />
                <ErrorMessage name="email" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Name</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="name"
                />
                <ErrorMessage name="name"  component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Channel</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="channel"
                />
                <ErrorMessage name="channel" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Facebook</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="social.facebook"
                />
                <ErrorMessage name="channel" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Twitter</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="social.twitter"
                />
                <ErrorMessage name="channel" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Primary Phone Number</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="phoneNumber[0]"
                />
                <ErrorMessage name="channel" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Secondary Phone Number</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="phoneNumber[1]"
                />
                <ErrorMessage name="channel" component="span" className="error" />
              </div>
              <div className={`form-group`}>
                <label htmlFor="exampleInputEmail1">Comments</label>
                <Field
                  type="text"
                  className={`form-control`}
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Comments"
                  name="comments"
                  as="textarea"
                />
                {/* <ErrorMessage name="channel"  component="span" className="error" /> */}
              </div>
              <div className="form-group form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>

          <style jsx="true">
        {
          `.error{
            color: red;
            font-size: 12px
          }
          .err-msg{
            border: 1px solid red;
          }
          `
        }
      </style>

        </section>
      </Formik>
    );
      }
}
