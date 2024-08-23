import React from 'react';
import { Autocomplete, Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';
import formSchemaFunction from './schema';
import axios from 'axios';
import generateEndpoints from '../../constants';
import { accessTypes } from '../../data/mockData';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  age: '',
  address: '',
  zipCode: '',
  city: '',
  access: '',
};

const Form = ({
  endPoint,
  setIsLoading,
  setData,
  title = 'CREATE USER',
  subtitle = 'Create a new user profile',
  submitLabel = 'Create New User',
  showAccess = false,
  showAddress = true,
  showCity = true,
  showZip = true,
  setOpenModal,
}) => {
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const apiUrl = generateEndpoints();

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/${endPoint}`, {
        ...values,
        name: `${values.firstName} ${values.lastName}`,
        phone: values.contact,
      });
      setData(response.data.result);
      setOpenModal((prev) => !prev);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box m='20px'>
      <Header title={title} subtitle={subtitle} />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={formSchemaFunction(showAccess, showAddress, showCity, showZip)}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          setFieldValue,
        }) => (
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
              {showAddress ? (
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
              ) : null}
              {showAccess ? (
                <Autocomplete
                  fullWidth
                  variant='filled'
                  sx={{ gridColumn: 'span 2' }}
                  id='combo-box-demo'
                  onBlur={handleBlur}
                  options={accessTypes}
                  getOptionLabel={(option) => option.value}
                  onChange={(event, newValue) => {
                    setFieldValue('access', newValue ? newValue.value : '');
                  }}
                  renderOption={(props, option) => {
                    return (
                      <li {...props} key={option.value} value={option.value}>
                        {option.value}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Access'
                      variant='standard'
                      error={!!touched.access && !!errors.access}
                      helperText={
                        errors.access && touched.access && <p className='test'>{errors.access}</p>
                      }
                    />
                  )}
                />
              ) : null}
              {showCity ? (
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
              ) : null}
              {showZip ? (
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
              ) : null}
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' color='secondary' variant='contained' disabled={!isValid}>
                {submitLabel}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
