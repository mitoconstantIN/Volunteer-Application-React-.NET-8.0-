import { Flex, Box, Image, Text, Button, Heading } from "@chakra-ui/react";

import React from "react";
import "@fontsource/neuton";
import "@fontsource/inter";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { CheckCircleIcon } from "@chakra-ui/icons";

function UpperHomePage() {
  return (
    <Flex h="100%" direction={{ base: "column", md: "row" }}>
      <Box w={["100%", null, "70%"]} boxShadow="md">
        <Image src="./Park2.jpg" alt="cover" blur="1px" />
        <Text
          fontSize={["12vw", "8vw", "6vw"]}
          position="absolute"
          top={["64vw", "55vw", "40vw"]}
          left="8vw"
          color="white"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
          fontFamily="neuton"
          fontStyle="normal"
        >
          Welcome to
        </Text>
        <Text
          fontSize={["12vw", "8vw", "6vw"]}
          position="absolute"
          top={["73vw", "62vw", "46vw"]}
          left="8vw"
          color="white"
          bgGradient="linear(266.01deg, yellow.200 18.2%, yellow.300 58.72%, yellow.400 65.82%, green.300 98.4%)"
          bgClip="text"
          //textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
          fontFamily="neuton"
          fontStyle="normal"
        >
          EcoMeet
        </Text>

        <Text
          as="p"
          fontSize={["12vw", "8vw", "6vw"]}
          position="absolute"
          top={["73vw", "62vw", "46vw"]}
          left={["26vw", "13vw", "6vw"]}
          color="white"
          ml="22vw"
          fontFamily="neuton"
          fontStyle="normal"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.5)"
        >
          !
        </Text>
      </Box>
      <Box
        w={["100%", null, "0.3%"]}
        h={["0.3%", null, "100%"]}
        bgColor="white"
        border={"1px"}
        borderColor="white"
        boxShadow="md"
      ></Box>
      <Box
        w={["100%", null, "29.7%"]}
        h={{ base: "auto", xs: "100%" }}
        background="linear-gradient(180deg, #FFCB30 -10.16%, rgba(255, 203, 48, 0) 100%), rgba(85, 252, 172, 0.67)"
        boxShadow="md"
      >
        <Flex
          ml={["32vw", null, "4vw"]}
          alignItems="center"
          direction="column"
          w={["35%", null, "70%"]}
          h="75%"
          bg="#1C6F47"
          mt="5vw"
          mb="5vw"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          borderColor="#1C6F47"
          boxShadow="xl"
          lineHeight="1vw"
          justify="start"
        >
          <Heading
            fontSize="2vw"
            fontWeight="semibold"
            mt="5vw"
            mr="2vw"
            color="white"
            textAlign="left"
            fontFamily="neuton"
            fontStyle="normal"
            letterSpacing="0.065em"
            textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            Get Started as:
          </Heading>
          <Button
            variant="homebutton"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/VSignUp";
            }}
          >
            <ArrowForwardIcon color="white" />
            <Text
              fontSize="1.5vw"
              color="white"
              ml="1vw"
              fontFamily="inter"
              fontWeight={"200"}
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            >
              Volunteer
            </Text>
          </Button>
          <Button
            variant="homebutton"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/OSignUp";
            }}
          >
            <ArrowForwardIcon color="white" />
            <Text
              fontSize="1.5vw"
              color="white"
              ml="1vw"
              fontFamily="inter"
              fontWeight={"200"}
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            >
              Organizer
            </Text>
          </Button>
          <Button
            variant="homebutton"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/CSignUp";
            }}
          >
            <ArrowForwardIcon color="white" />
            <Text
              fontSize="1.5vw"
              color="white"
              ml="1vw"
              fontFamily="inter"
              fontWeight={"200"}
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            >
              Collaborator
            </Text>
          </Button>

          <Flex alignItems="baseline" ml="3vw" line-height="1" spacing="24px">
            <CheckCircleIcon
              src="./Check.png"
              alt="Check mark"
              boxSize={"3"}
              color="white"
              textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
            />
            <Text
              fontSize="1.5vw"
              mt="3vw"
              pl="1vw"
              color="white"
              lineHeight="2vw"
              fontFamily="Neuton"
              fontWeight="200"
              textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
              mr="4vw"
            >
              Already have an account?
            </Text>
          </Flex>
          <Button
            variant="homebutton"
            boxShadow="0px 0px 0px rgba(0,0,0,0)"
            size="sm"
            w="30%"
            h="8%"
            mt="2vw"
            bg="rgba(0,0,0,0.2)"
            mb="3vw"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/Login";
            }}
            bgColor="rgba(0,0,0,0)"
          >
            <Text
              textAlign="center"
              letterSpacing={"0.05em"}
              fontSize="1.2vw"
              //color="white"
              fontFamily={"inter"}
              fontWeight="bold"
              textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            >
              Log in
            </Text>
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default UpperHomePage;
