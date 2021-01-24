import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default class LoginForm extends Component {
    
  initialValues = {
    email: "",
    password: "",
  };

  handleSubmit = (values) => {
    console.log("form data --->", values);
  };

  validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Required Field")
      .email("Email Is Invalid"),
    password: Yup.string().min(2, "Too Short!").max(9, "Too long!!").required("Required Field"),
  });

  render() {
    const dataArr = [
      {
        name: "email",
        placeholder: "Enter email",
        type: "text",
        label: "Email address",
        id: "email"
      },
      {
        name: "password",
        placeholder: "Enter password",
        type: "password",
        label: "Password",
        id: "password"
      },
    ];

    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.validationSchema}
      >
        <section className="container">
          <div className="col-md-8 mx-auto">
            <Form>
              {dataArr.map((obj, index) => (
                <div className={`form-group`} key={index}>
                  <label htmlFor="exampleInputEmail1">{obj.label}</label>
                  <Field
                    type={obj.type}
                    className={`form-control`}
                    id={obj.id}
                    aria-describedby="emailHelp"
                    placeholder={obj.placeholder}
                    name={obj.name}
                  />
                  <ErrorMessage
                    name={obj.name}
                    component="span"
                    className="error"
                  />
                </div>
              ))}
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
