import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchemaFunction = (showAccess, showAddress, showCity, showZip) => {
  const formSchema = yup.object().shape({
    firstName: yup.string().required('required'),
    lastName: yup.string().required('required'),
    email: yup.string().email('invalid email').required('required'),
    contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
    age: yup.number().required('required'),
    address: showAddress ? yup.string().required('required') : yup.string().nullable(),
    zipCode: showZip ? yup.string().required('required') : yup.string().nullable(),
    city: showCity ? yup.string().required('required') : yup.string().nullable(),
    access: showAccess ? yup.string().required('required') : yup.string().nullable(),
  });
  return formSchema;
};

export default formSchemaFunction;
