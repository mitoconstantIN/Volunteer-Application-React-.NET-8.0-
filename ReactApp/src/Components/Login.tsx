import React from "react";
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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../Context/useAuth";
import { useForm } from "react-hook-form";

type Props = {};

type LoginFormsInputs = {
  username: string;
  password: string;
};

const validation = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login: React.FC<Props> = (props: Props) => {
  const { loginUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: LoginFormsInputs) => {
    loginUser(form.username, form.password);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"} as="form" onSubmit={handleSubmit(handleLogin)}>
          <Heading fontSize={"2xl"}>Welcome back!</Heading>
          <Divider orientation="horizontal" />
          <FormControl id="username" isInvalid={!!errors.username}>
            <FormLabel>Username:</FormLabel>
            <Input type="text" {...register("username")} />
            {errors.username && <p>{errors.username.message}</p>}
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel>Password:</FormLabel>
            <Input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </FormControl>
          <Stack
            direction={{ base: "row", sm: "row" }}
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
            <Button type="submit" variant="auth">
              Log In
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={"./Loginb.png"} />
      </Flex>
    </Stack>
  );
};

export default Login;
