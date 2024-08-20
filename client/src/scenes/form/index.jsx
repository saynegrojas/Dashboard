import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  age: '',
  address: '',
  zipCode: '',
  city: '',
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('required'),
  age: yup.number(),
  address: yup.string().required('required'),
  zipCode: yup.string().required('required'),
  city: yup.string().required('required'),
});

const Form = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = (values) => {
    console.log('Form submitted', values);
  };

  return (
    <Box m='20px'>
      <Header title='CREATE USER' subtitle='Create a new user profile' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, isValid }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              gap='30px'
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName || ''}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName || ''}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Age'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age || ''}
                name='age'
                error={!!touched.age && !!errors.age}
                helperText={touched.age && errors.age}
                sx={{ gridColumn: 'span 1' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email || ''}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: 'span 3' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact Number'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact || ''}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 1'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address || ''}
                name='address'
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: 'span 2' }}
              />
              {/* <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 2'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2 || ''}
                name='address2'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: 'span 2' }}
              /> */}
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='City'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city || ''}
                name='city'
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Zip Code'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode || ''}
                name='zipCode'
                error={!!touched.zipCode && !!errors.zipCode}
                helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained' disabled={!isValid}>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
