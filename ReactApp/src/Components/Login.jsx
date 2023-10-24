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

  function Login() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Welcome back!</Heading>
            <Divider orientation='horizontal'/>
            <FormControl  id="Username">
              <FormLabel>Username:</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
            <FormLabel>Password:</FormLabel>
            <Input type="password" />
          </FormControl>
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
            <Button
              variant="auth"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://localhost:3000/OFeed";
              }}
            >
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
}
export default Login;
