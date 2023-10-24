import { Text, Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter";
import "@fontsource/neuton";

function NavBar() {
  return (
    <Box>
      <Flex
        align="center"
        w="100%"
        h="128px"
        bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
      >
        <Image
          src="./LeafLogo.svg"
          alt="leaf"
          pl="8vw"
          w={["14%", "13%", "12%"]}
        />
        <Text
          fontSize={["12vw", "12vw", "5vw"]}
          pl="2vw"
          color="white"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          fontFamily="neuton"
        >
          EcoMeet
        </Text>
      </Flex>
    </Box>
  );
}

export default NavBar;
