/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const FormikRadio2 = (props) => {

  
  // define type for special input types
  const [field, meta, helper ] = useField({
    label: props.label,
    name: props.name,
    type: 'radio'
  });
  console.log(field);
  return (
    <>
      
      {props.options.map((res) => {
          return <React.Fragment key={ res.value }>
            <div className="form-check">
              <input className="form-check-input" type="radio" id={ res.value } { ...field }
                    value={ res.value }
                    checked={ field.value === res.value }/>
              <label htmlFor={ res.value } className="form-check-label">{res.display}</label>
            </div>
            
          </React.Fragment>;
        })}
        
      {
        meta.touched && meta.error ? (<div className="text-danger form-error">
          {meta.error}
        </div>) : null
      }
    </>
  );

};

export default FormikRadio2;