import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormErrorMessage, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Image, Divider, Text, HStack } from '@chakra-ui/react';
import { ArrowBackIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../Context/useAuth";
import axios from "axios";

type Props = {};

type RegisterFormsInputs = {
  email: string;
  username: string;
  password: string;
  usertype: number;
  firstname: string;
  lastname: string;
  city: string;
  organizationName?: string; // Optional
  organizationEmail?: string; // Optional
  phoneNumber?: string; // Optional
  points?: number;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
  firstname: Yup.string().required("First Name is required"),
  lastname: Yup.string().required("Last Name is required"),
  city: Yup.string().required("City is required"),
  usertype: Yup.number().required("User Type is required"),
  organizationName: Yup.string(), // Optional
  organizationEmail: Yup.string().email("Invalid email"), // Optional
  phoneNumber: Yup.string(), // Optional
  points: Yup.number(),//optional
});

const OSignUp: React.FC<Props> = () => {
  const { registerUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormsInputs>({
    resolver: yupResolver(validation)
  });

  const onSubmit: SubmitHandler<RegisterFormsInputs> = async data => {

    registerUser(data.email, data.username, data.password, data.usertype, data.firstname, data.lastname, data.city,data.points, data.organizationEmail, data.organizationEmail, data.phoneNumber);
    
  };


  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"} as="form" onSubmit={handleSubmit(onSubmit)}>
          <Heading fontSize={"2xl"}>Hello, Organizer!</Heading>
          <Divider orientation="horizontal" />

          <FormControl id="username" isInvalid={!!errors.username}>
            <FormLabel>Username:</FormLabel>
            <Input type="text" {...register("username")} />
            {errors.username && <Text color="red.500">{errors.username.message}</Text>}
          </FormControl>

          <FormControl id="organizationName" isInvalid={!!errors.organizationName}>
            <FormLabel>Organization Name:</FormLabel>
            <Input type="text" {...register("organizationName")} />
            {errors.organizationName && <Text color="red.500">{errors.organizationName.message}</Text>}
          </FormControl>

          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Organization Email:</FormLabel>
            <Input type="email" {...register("email")} />
            {errors.email && <Text color="red.500">{errors.email.message}</Text>}
          </FormControl>

          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel>Password:</FormLabel>
            <Input type="password" {...register("password")} />
            {errors.password && <Text color="red.500">{errors.password.message}</Text>}
          </FormControl>

          <FormControl id="city" isInvalid={!!errors.city}>
            <FormLabel>City:</FormLabel>
            <Input type="text" {...register("city")} />
            {errors.city && <Text color="red.500">{errors.city.message}</Text>}
          </FormControl>

          <FormControl id="Fname" isInvalid={!!errors.firstname}>
            <FormLabel>First Name:</FormLabel>
            <Input type="text" {...register("firstname")} />
            {errors.firstname && <Text color="red.500">{errors.firstname.message}</Text>}
          </FormControl>

          <FormControl id="Lname" isInvalid={!!errors.lastname}>
            <FormLabel>Last Name:</FormLabel>
            <Input type="text" {...register("lastname")} />
            {errors.lastname && <Text color="red.500">{errors.lastname.message}</Text>}
          </FormControl>

          
          <HStack spacing={4}>
            <FormControl id="phoneNumber" isInvalid={!!errors.phoneNumber}>
              <FormLabel>Phone Number:</FormLabel>
              <Input type="text" {...register("phoneNumber")} />
              {errors.phoneNumber && <Text color="red.500">{errors.phoneNumber.message}</Text>}
            </FormControl>

            <FormControl id="usertype" isInvalid={!!errors.usertype}>
            <FormLabel>User Type:</FormLabel>
            <Input type="number" {...register("usertype")} />
            {errors.usertype && <Text color="red.500">{errors.usertype.message}</Text>}
          </FormControl>
          </HStack>

          <Stack direction={{ base: "row", sm: "row" }} align={"start"} justify={"space-between"}>
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
            <Button type="submit" variant="auth">
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Register Image"} objectFit={"cover"} src={"./SignUp1.png"} />
      </Flex>
    </Stack>
  );
};

export default OSignUp;
