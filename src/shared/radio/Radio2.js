import React from 'react';
import { Field } from 'formik';

const FormikRadio = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label htmlFor={ props.id || props.name }>
        {label}
      </label>
      <Field name={ name } { ...rest } >
        {
          ({ field, meta }) => {
            return (
              <div>
                {
                  options.map(option => {
                    return (
                      <div key={ option.value } className="form-check">
                        <input className="form-check-input"
                          type='radio'
                          id={ option.value }
                          { ...field }
                          value={ option.value }
                          checked={ field.value === option.value }
                        />
                        <label htmlFor={ option.id } className="form-check-label">{option.display}</label>

                      </div>
                    );
                  }) 
                }
                {
                  meta.touched && meta.error ? (<div className="text-danger form-error">
                    {meta.error}
                  </div>) : null
                }
              </div>
            ) ;
          }
        }
      </Field>
    </div>
  );
};

export default FormikRadio;