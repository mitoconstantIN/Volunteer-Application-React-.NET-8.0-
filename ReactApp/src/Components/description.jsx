import { Image, Text, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

function Description() {
  return (
    <Box w="100%" h="100%">
      <Flex alignItems="center" direction="column" mr="12vw">
        <Heading
          bgGradient="linear(80deg, rgba(0, 0, 0, 0.8) 0%, rgba(44, 170, 110, 1) 52.6%, rgba(86, 208, 43, 1) 100%)"
          bgClip="text"
          textShadow="md"
          mt="10vw"
          fontSize="3.5vw"
        >
          <Flex alignItems="baseline" ml="9vw">
            <Image src="./icon3.png" w="4%" alt="icon" pt="vw" />
            <Text
              ml="1vw"
              textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
              fontSize="3.8vw"
              fontFamily={"neuton"}
              letterSpacing="0.065em"
            >
              Plan your way into helping the planet!
            </Text>
          </Flex>
        </Heading>
        <Box
          h="3px"
          w="70%"
          bg="gray.200"
          mt="2vw"
          boxShadow={"0px 4px 4px rgba(0,0,0,0.05)"}
        ></Box>

        <Text
          fontSize="2vw"
          ml="15vw"
          mt="5vw"
          fontFamily={"inter"}
          fontWeight="100"
        >
          EcoMeet is the best platform you can use to engage in eco-friendly
          activities that help the enviroment around the world!
        </Text>
        <Text
          fontSize="2vw"
          ml="15vw"
          mt="3vw"
          mb="10vw"
          fontFamily={"inter"}
          fontWeight="100"
        >
          With a few clicks, you can find a large diversity of events that bring
          an enviromental impact on the world from which you can choose. It has
          never been that easy to save the planet you live in!
        </Text>
      </Flex>
    </Box>
  );
}

export default Description;
