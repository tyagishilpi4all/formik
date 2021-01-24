import React from "react";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  name: "",
  channel: "",
};

const onSubmit = values =>{
  console.log("form data --->", values); 
}

const validate = values =>{
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

  return errors;
}

export default function BasicForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  return (
    <section className="container">
      <div className="col-md-8 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className={`form-group`}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={`form-control ${(formik.touched.email && formik.errors.email) && `err-msg`}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ?<span className="error">{formik.errors.email}</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className={`form-control ${(formik.touched.name && formik.errors.name) && `err-msg`}`}
              id="exampleInputPassword1"
              placeholder="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur = {formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ?<span className="error">{formik.errors.name}</span> : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Channel</label>
            <input
              type="text"
              className={`form-control ${(formik.touched.channel && formik.errors.channel) && `err-msg`}`}
              id="exampleInputPassword1"
              placeholder="Channel"
              name="channel"
              value={formik.values.channel}
              onChange={formik.handleChange}
              onBlur = {formik.handleBlur}
            />
            {formik.touched.channel && formik.errors.channel ?<span className="error">{formik.errors.channel}</span> : null}
          </div>
          <div className="form-group form-check">
            <input
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
        </form>
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
  );
}
