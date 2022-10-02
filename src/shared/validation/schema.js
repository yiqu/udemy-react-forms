import * as Yup from 'yup';


export const getTextValidation = (filedId, min, errMsg) => {
  return Yup.string().min(Yup.number().cast(min), `At least ${min} characters`)
    .required(`${filedId} is required`).trim();
};

export const getEmailValidation = (filedId) => {
  return Yup.string().email().required(`${filedId} is required`).trim();;
};

export const getNumberValidation = (filedId, min, errMsg) => {
  return Yup.number().min(Yup.number().cast(min), `Has to be greater than ${min}`)
    .required(`${filedId} is required`);
};

export const validationSchema = Yup.object({
  firstName: getTextValidation('firstName', 3).matches(/^[a-zA-Z]+$/),
  lastName: getTextValidation('lastName', 3).matches(/^[a-zA-Z]+$/),
  email: getEmailValidation('email'),
  jobTitle: getTextValidation('jobTitle', 3),
  address: getTextValidation('address', 3),
  age: getNumberValidation('age', 10)
});