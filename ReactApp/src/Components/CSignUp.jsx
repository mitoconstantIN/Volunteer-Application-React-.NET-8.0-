import React, { useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Divider,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Formik, Field } from "formik";
import { MultipleValidators } from "../utils/validators/MultipleValidators";
import { isEmail, MinLenght, NotEmpty, IsEqual } from "../utils";


function CSignUp() {
  const [password, setPassword] = useState('');

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Formik
        initialValues={{
          Oname: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(data) => {
          
          console.log(data);
        }}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading
              fontSize={["6vw", "4vw", "2.5vw"]}
              color="#072C06"
              textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
              fontFamily={"neuton"}
              fontWeight="light"
            >
              Hello, Collaborator!
            </Heading>
            <Divider orientation="horizontal" />
            <Field
              name="Oname"
              validate={(value) => MultipleValidators(value, [NotEmpty])}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.Oname && form.touched.Oname}
                  id="Oname"
                >
                  <FormLabel
                    color="#072C06"
                    textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                    fontFamily={"neuton"}
                    fontWeight="normal"
                  >
                    Organization Name:
                  </FormLabel>
                  <Input {...field} type="text" />
                  <FormErrorMessage>{form.errors.Oname}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="email"
              validate={(value) => MultipleValidators(value, [NotEmpty, isEmail])}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email} id="email">
                  <FormLabel variant="authEffect">Organization Email:</FormLabel>
                  <Input {...field} type="email" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Field
                name="password"
                validate={(value) =>
                  MultipleValidators(value, [
                    () => NotEmpty(value),
                    (value) => MinLenght(value, 6),
                  ])
                }
              >
                {({ field, form }) => {
                  setPassword(field.value);
                  return (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                      id="password"
                    >
                      <FormLabel variant="authEffect">Set Password:</FormLabel>
                      <Input {...field} type="password" />
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  );
                }}
              </Field>
              <Field
                name="cpassword"
                validate={(value) =>
                  MultipleValidators(value, [
                    () => NotEmpty(value),
                    (value) => IsEqual(value, password),
                  ])
                }
              >
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.cpassword && form.touched.cpassword
                    }
                    id="cpassword"
                  >
                    <FormLabel variant="authEffect">
                      Confirm Password:
                    </FormLabel>
                    <Input {...field} type="password" />
                    <FormErrorMessage>{form.errors.cpassword}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Stack
              direction={{ base: "line", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Button
                variant="auth"
                bg="white"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "http://localhost:3000/";
                }}
              >
                <ArrowBackIcon />
                Back
              </Button>
              <Button variant="auth" type="submit">
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Formik>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"./SignUp1.png"} />
      </Flex>
    </Stack>
  );
}

export default CSignUp;
