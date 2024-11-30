import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Button,
  Flex,
  Avatar,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Divider,
  Link,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Spacer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CalendarIcon, Search2Icon, DeleteIcon } from "@chakra-ui/icons";
import "@fontsource/inter";
import "@fontsource/neuton";
import Moment from "react-moment";
import { useAuth } from "Context/useAuth";

const UProfile: React.FC = () => {
  const { isLoggedIn, user, logout} = useAuth();
  return (
    <Box>
      <Stack
        spacing={0}
        direction="row"
        align="center"
        bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
      >
        <Button
          variant="ghost"
          borderRadius="none"
          size="lg"
          w="50%"
          borderWidth="1px"
          borderColor="blackAlpha.400"
          _focus={{ bgColor: "blackAlpha.300", color: "white" }}
          _selected={{ bgColor: "blackAlpha.300", color: "white" }}
          _hover={{ bgColor: "blackAlpha.300", color: "white" }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/VFeed";
          }}
          mb=""
          boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
        >
          <Image src="./Home_Page (1).svg" w="4%" mr="0.5vw" />
          Home
        </Button>
        <Button
          bgColor="blackAlpha.300"
          borderRadius="none"
          size="lg"
          w="50%"
          mb="1em"
          boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
          borderWidth="1px"
          borderColor="blackAlpha.400"
          textColor="white"
          _selected={{ bgColor: "blackAlpha.300" }}
          _focus={{ bgColor: "blackAlpha.300" }}
          _hover={{ bgColor: "blackAlpha.300" }}
        >
          <Image src="./Profile.svg" w="4%" mr="0.5vw" />
          Your Profile
        </Button>
      </Stack>
      <Grid
        h="700px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={10}
        ml="30"
        mr="30"
        mt="5"
      >
        <GridItem
          colSpan={1}
          rowSpan={1}
          bg="#D0FEBF"
          borderRadius="3xl"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        >
          <Grid
            h="200px"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={0}
          >
            <GridItem rowSpan={2} colSpan={1}>
              <Avatar
                borderRadius="full"
                boxSize="150px"
                src="./Charles.jpg"
                name="Dan Abramov"
                ml="50"
                mt="10"
              />
            </GridItem>
            <GridItem colSpan={2} rowSpan={1} h="44">
              <Heading
                textAlign="left"
                mt="10"
                variant="authEffect"
                fontWeight="1000"
                letterSpacing="0.05em"
              >
              I am {user?.userName} 
              </Heading>
              <Text
                textAlign="left"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="inter"
                fontWeight="light"
                fontSize="1vw"
              >
                {user?.email}
              </Text>
              <Text
                textAlign="left"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontSize="1.2vw"
                fontWeight="500"
              >
                {user?.city}, Romania
              </Text>
              <Text
                textAlign="left"
                color="#072C06"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontSize="1.6vw"
                fontWeight="500"
                mt="45"
              >
                Level 10
              </Text>
              <Text
                textAlign="left"
                color="#072C06"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontSize="1.7vw"
                fontWeight="600"
              >
                20/50 EXP
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          bg="#EEFFE7"
          borderRadius="3xl"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          alignItems="center"
        >
          <Box
            w="910"
            h="92"
            bg="#D0FEBF"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="3xl"
            alignItems="center"
          >
            <Heading
              variant="authEffect"
              textAlign="left"
              pt="1vw"
              pl="3vw"
              fontSize="2vw"
            >
              Achievements:
            </Heading>
          </Box>
          <Grid
            h="200px"
            templateRows="repeat(autofill)"
            templateColumns="repeat(2, 1fr)"
            gap={8}
            mt="5"
            ml="10"
            mr="10"
            w="300"
            overflowY="scroll"
          >
            <GridItem
              rowSpan={2}
              colSpan={1}
              bg="#FFCB30"
              bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
            >
              <Grid
                h="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={0}
                alignItems="center"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image src="Tree-Boom.svg" w="70%" ml="0.75vw" />
                </GridItem>
                <GridItem colSpan={4}>
                  <Heading fontFamily="neuton" fontSize="2vw" mb="-0.2vw">
                    Tree-Boom!
                  </Heading>
                  <Text
                    fontSize="1vw"
                    fontFamily="neuton"
                    letterSpacing="0.05em"
                    fontWeight="bold"
                  >
                    Earned 2/07/22
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              bg="#A203ED"
              bgGradient="linear-gradient(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(190, 1, 103, 0.304) 100%)"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
            >
              <Grid
                h="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={0}
                alignItems="center"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image src="Calendar.svg" w="70%" ml="0.75vw" />
                </GridItem>
                <GridItem colSpan={4}>
                  <Heading fontFamily="neuton" fontSize="2vw" mb="-0.2vw">
                    Never Busy!
                  </Heading>
                  <Text
                    fontSize="1vw"
                    fontFamily="neuton"
                    letterSpacing="0.05em"
                    fontWeight="bold"
                  >
                    Earned 30/07/22
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              bg="#FFCB30"
              bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
            >
              <Grid
                h="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={0}
                alignItems="center"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image src="Tree-Boom.svg" w="70%" ml="0.75vw" />
                </GridItem>
                <GridItem colSpan={4}>
                  <Heading fontFamily="neuton" fontSize="2vw" mb="-0.2vw">
                    Tree-Boom!
                  </Heading>
                  <Text
                    fontSize="1vw"
                    fontFamily="neuton"
                    letterSpacing="0.05em"
                    fontWeight="bold"
                  >
                    Earned 2/07/22
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              bg="#FFCB30"
              bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
            >
              <Grid
                h="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={0}
                alignItems="center"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image src="Tree-Boom.svg" w="70%" ml="0.75vw" />
                </GridItem>
                <GridItem colSpan={4}>
                  <Heading fontFamily="neuton" fontSize="2vw" mb="-0.2vw">
                    Tree-Boom!
                  </Heading>
                  <Text
                    fontSize="1vw"
                    fontFamily="neuton"
                    letterSpacing="0.05em"
                    fontWeight="bold"
                  >
                    Earned 2/07/22
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              rowSpan={2}
              colSpan={1}
              bg="#FFCB30"
              bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="15px"
            >
              <Grid
                h="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={0}
                alignItems="center"
              >
                <GridItem rowSpan={1} colSpan={1}>
                  <Image src="Tree-Boom.svg" w="70%" ml="0.75vw" />
                </GridItem>
                <GridItem colSpan={4}>
                  <Heading fontFamily="neuton" fontSize="2vw" mb="-0.2vw">
                    Tree-Boom!
                  </Heading>
                  <Text
                    fontSize="1vw"
                    fontFamily="neuton"
                    letterSpacing="0.05em"
                    fontWeight="bold"
                  >
                    Earned 2/07/22
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={2}
          bg="#D0FEBF"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          borderRadius="3xl"
        >
          <Text
            textAlign="center"
            color="black"
            textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            fontFamily="neuton"
            fontWeight="bold"
            fontSize="2vw"
            mb="1vw"
            mt="1vw"
          >
            Bio:
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="10">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Gender: Male
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Age: 24
              </Text>
            </GridItem>
            <GridItem w="100%" h="10">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Joined: 5/06/22
              </Text>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(5, 1fr)" gap={0}>
            <GridItem colSpan={1} h="10" ml="15">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Work:
              </Text>
            </GridItem>
            <GridItem colStart={4} colEnd={2} h="10">
              <Editable
                defaultValue="Type here:"
                fontSize="xl"
                fontWeight="bold"
                mt="-1"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(5, 1fr)" gap={0}>
            <GridItem colSpan={1} h="10" ml="15">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Activity:
              </Text>
            </GridItem>
            <GridItem colStart={7} colEnd={2} h="10">
              <Editable
                defaultValue="Type here:"
                fontSize="xl"
                fontWeight="bold"
                mt="-1"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(5, 1fr)" gap={0}>
            <GridItem colSpan={1} h="10" ml="15">
              <Text
                ml="15"
                textAlign="center"
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize="1vw"
              >
                Your description:
              </Text>
            </GridItem>
            <GridItem colStart={7} colEnd={2} h="10">
              <Editable
                defaultValue="Type here"
                fontSize="xl"
                fontWeight="bold"
                mt="9"
                ml="15"
              >
                <EditablePreview />
                <EditableInput />
              </Editable>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UProfile;
