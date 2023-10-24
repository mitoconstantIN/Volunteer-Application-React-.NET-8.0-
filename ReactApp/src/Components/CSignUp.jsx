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
  
  function CSignUp() {
    return (
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
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
            <FormControl id="Oname">
              <FormLabel
                color="#072C06"
                textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                fontFamily={"neuton"}
                fontWeight="normal"
              >
                Organization Name:
              </FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel variant="authEffect">Organization Email:</FormLabel>
              <Input type="email" />
            </FormControl>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <FormControl id="password">
                <FormLabel variant="authEffect">Set Password:</FormLabel>
                <Input type="password" />
              </FormControl>
              <FormControl id="password">
                <FormLabel variant="authEffect">Confirm Password:</FormLabel>
                <Input type="password" />
              </FormControl>
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
              <Button
                variant="auth"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "#";
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={"./SignUp1.png"} />
        </Flex>
      </Stack>
    );
  }
  export default CSignUp;
  