import { FormErrorMessage, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Divider } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Formik, Field } from "formik";
import { useState } from "react";
import { Form } from "formik";
import { MultipleValidators } from "../utils/validators/MultipleValidators";
import { isEmail, MinLenght, NotEmpty, IsEqual } from "../utils";


function VSignUp() {
  const [password, setPasswoard] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Formik onSubmit={(data) => {
        fetch("https://localhost:7256/api/Volunteer/CreateVolunteer", {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            city: data.city,
            level: 1,
            points: 0,
          }),
        });
        data.preventDefault();
      }} initialValues={{ city: "Iasi" }}
        validate={(values) => { // Funcție de validare a formularului
          const errors = {};
          Object.keys(values).forEach(key => {
            if (!values[key]) {
              errors[key] = 'Required';
            }
          });
          setIsFormValid(Object.keys(errors).length === 0); // Actualizarea stării de validare
          return errors;
        }}
      >
        {(formikProps) =>(
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Form>
            <Heading fontSize={["6vw", "4vw", "2.5vw"]} variant="authEffect">
              Hello, Volunteer!
            </Heading>
            <Divider orientation="horizontal" />
            <Field name="username" validate={value => NotEmpty(value)}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.username && form.touched.username}>
                  <FormLabel>Username</FormLabel>
                  <Input {...field} placeholder='Username...' />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" validate={value => MultipleValidators(value, [NotEmpty, isEmail])}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder='Email...' />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Field name="password" validate={value => MultipleValidators(value, [() => (NotEmpty(password)), (value) => MinLenght(value, 6)])}>
                {({ field, form }) => {
                  setPasswoard(field.value)
                  return (
                    <FormControl isInvalid={form.errors.password && form.touched.password}>
                      <FormLabel>Password</FormLabel>
                      <Input type="password" {...field} placeholder='Password...' />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name="passwordCheck" validate={value => MultipleValidators(value, [NotEmpty, value => IsEqual(value, password)])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.passwordCheck && form.touched.passwordCheck}>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input type="password" {...field} placeholder='Password...' />
                    <FormErrorMessage>{form.errors.passwordCheck}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Field name="firstName" validate={value => MultipleValidators(value, [NotEmpty])}>
                {({ field, form }) => ( 
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel>First Name</FormLabel>
                    <Input {...field} placeholder='First Name...' />
                    <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lastName" validate={value => MultipleValidators(value, [NotEmpty])}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <FormLabel>Last Name</FormLabel>
                    <Input {...field} placeholder='Last Name...' />
                    <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Field name="city" validate={value => MultipleValidators(value, [NotEmpty])}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.city && form.touched.city}>
                  <FormLabel>City</FormLabel>
                  <Input {...field} placeholder='Oras...' />
                  <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack
              direction={{ base: "line", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Button variant="auth" bg="white" onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://localhost:3000/";
              }}>
                <ArrowBackIcon />
                Back
              </Button>
              <Button variant="auth" type="submit" onClick={(e) => {
                e.preventDefault();
                formikProps.handleSubmit();
                if(isFormValid){
                  window.location.href = "http://localhost:3000/VFeed";
                }
              }}
              isDisabled={!isFormValid}
              >
                Sign up
              </Button>
            </Stack>
          </Form>
        </Flex>)}
      </Formik>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"./SignUp1.png"} />
      </Flex>
    </Stack>
  );
}
export default VSignUp;