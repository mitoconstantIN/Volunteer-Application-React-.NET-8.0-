import React from 'react';
import { FormErrorMessage, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Divider } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Formik, Field } from 'formik';
import { MultipleValidators } from '../utils/validators/MultipleValidators';
import { isEmail, MinLenght, NotEmpty, IsEqual } from '../utils';

function OSignUp() {
  const jsonData = {
    email: '43343string444554',
    password: 'string',
    organizationName: 'string',
    city: 'string',
  };

  return (
    <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Formik
            initialValues={{
              Oname: '',
              email: '',
              password: '',
              cpassword: '',
              town: '',
              Fname: '',
              Lname: '',
              repEmail: '',
              phone: '',
            }}
            onSubmit={(data) => {
              
              console.log('Formular trimis:', data);
            }}
          >
            <Stack spacing={4} w={'full'} maxW={'md'}>
              <Heading fontSize={'2xl'}>Hello, Organizer! </Heading>
              <Divider orientation='horizontal' />

              <Field name="Oname" validate={value => MultipleValidators(value, [NotEmpty])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.Oname && form.touched.Oname} id="Oname">
                    <FormLabel>Organization Name:</FormLabel>
                    <Input {...field} type="text" />
                    <FormErrorMessage>{form.errors.Oname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email" validate={value => MultipleValidators(value, [NotEmpty, isEmail])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email} id="email">
                    <FormLabel variant="authEffect">Organization Email:</FormLabel>
                    <Input {...field} type="email" />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={value => MultipleValidators(value, [NotEmpty, MinLenght(6)])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password} id="password">
                    <FormLabel variant="authEffect">Set Password:</FormLabel>
                    <Input {...field} type="password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="cpassword" validate={value => MultipleValidators(value, [NotEmpty, value => IsEqual(value, jsonData.password)])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.cpassword && form.touched.cpassword} id="cpassword">
                     <FormLabel variant="authEffect">Confirm Password:</FormLabel>
                    <Input {...field} type="password" />
                    <FormErrorMessage>{form.errors.cpassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="town" validate={value => MultipleValidators(value, [NotEmpty])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.town && form.touched.town} id="town">
                    <FormLabel variant="authEffect">Town/City:</FormLabel>
                    <Input {...field} type="text" />
                    <FormErrorMessage>{form.errors.town}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Heading fontSize={'2xl'} textAlign={'center'}>
                Representative
              </Heading>
              <Divider orientation='horizontal' />

              <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Field name="Fname" validate={value => MultipleValidators(value, [NotEmpty])}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.Fname && form.touched.Fname} id="Fname">
                      <FormLabel>First Name:</FormLabel>
                      <Input {...field} type="text" />
                      <FormErrorMessage>{form.errors.Fname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="Lname" validate={value => MultipleValidators(value, [NotEmpty])}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.Lname && form.touched.Lname} id="Lname">
                      <FormLabel>Last Name:</FormLabel>
                      <Input {...field} type="text" />
                      <FormErrorMessage>{form.errors.Lname}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Stack>

              <FormLabel>Email:</FormLabel>
              <Field name="repEmail" validate={value => MultipleValidators(value, [NotEmpty, isEmail])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.repEmail && form.touched.repEmail}>
                    <Input {...field} type="text" />
                    <FormErrorMessage>{form.errors.repEmail}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <FormLabel>Phone Number:</FormLabel>
              <Field name="phone" validate={value => MultipleValidators(value, [NotEmpty, value => /^[0-9]+$/.test(value) || 'Invalid phone number'])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.phone && form.touched.phone}>
                    <Input {...field} type="phone" />
                    <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Stack direction={{ base: 'line', sm: 'row' }} align={'start'} justify={'space-between'}>
                <Button
                  variant="auth"
                  bg="white"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'http://localhost:3000/';
                  }}
                >
                  <ArrowBackIcon />
                  Back
                </Button>

                <Button
                  variant="auth"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "http://localhost:3000/OFeed";
                    fetch('https://localhost:7256/api/Organizer/CreateOrganizer', {
                      method: 'POST',
                      mode: 'cors',
                      body: JSON.stringify(jsonData),
                    });
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Formik>
        </Flex>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={'./SignUp1.png'} />
        </Flex>
      </Stack>
    </div>
  );
}

export default OSignUp;
