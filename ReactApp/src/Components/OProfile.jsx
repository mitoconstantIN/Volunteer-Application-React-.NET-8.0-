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

const OProfile = ({ feed }) => {
  return (
    <Box>
      <Stack spacing={0} direction="row" align="center" bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)">
            <Button
          variant="ghost"
          borderRadius="none"
          size="lg"
          w="50%"
          borderWidth="1px"
          borderColor="blackAlpha.400"
          _focus={{ bgColor:"blackAlpha.300", color: "white" }}
          _selected={{bgColor:"blackAlpha.300", color: "white" }}
          _hover={{ bgColor:"blackAlpha.300", color: "white"}} 
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
          _selected={{bgColor:"blackAlpha.300"}}
          _focus={{ bgColor:"blackAlpha.300"}}  
          _hover={{ bgColor:"blackAlpha.300"}}
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
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
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
                    alt="Dan Abramov"
                    ml="50"
                    mt="10"
                  />
                </GridItem>
                <GridItem colSpan={2} rowSpan={1} h="44">
                  <Heading
                    textAlign={["left"]}
                    mt="10"
                    variant="authEffect"
                    fontWeight="1000"
                    letterSpacing="0.05em"
                  >
                    Teofil Munteanu
                  </Heading>
                  <Grid
                    h="40px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Text fontSize="2xl" fontWeight="bold">
                        Personal:
                      </Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Text fontSize="2xl">andreiteofil01@gmail.com</Text>
                    </GridItem>
                  </Grid>
                  <Grid
                    h="40px"
                    templateRows="repeat(1, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={0}
                  >
                    <GridItem rowSpan={1} colSpan={1}>
                      <Text fontSize="2xl" fontWeight="bold">
                        Organization:
                      </Text>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Text fontSize="2xl">charles.ludwisgten2@endava.com</Text>
                    </GridItem>
                  </Grid>
                  <Text
                    textAlign={["left"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontSize="1.2vw"
                    fontWeight="500"
                  >
                    Iasi, Romania
                  </Text>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem
              bg="#EEFFE7"
              borderRadius="3xl"
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
              alignItems={"center"}
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
                  textAlign={"left"}
                  pt="1vw"
                  pl="3vw"
                  fontSize="2vw"
                >
                  Organization Document:
                </Heading>
              </Box>
              <Box
                w="90%"
                ml="10"
                mr="100"
                bgGradient="linear(180deg, rgba(255, 254, 254, 0.38) 0%, rgba(255, 245, 0, 0.304) 100%)"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="5px"
              >
                <input
                  type="file"
                  class="col form-control text-field-box mt-3"
                  name="document"
                  id="files"
                  placeholder="document.PDF"
                  accept="application/pdf"
                  required
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={1}
              rowSpan={2}
              bg="#D0FEBF"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              borderRadius="3xl"
            >
              <Text
                textAlign={["center"]}
                color="black"
                textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                fontFamily="neuton"
                fontWeight="bold"
                fontSize={"2vw"}
                mb="1vw"
                mt="1vw"
              >
                Information:
              </Text>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Gender: Male
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Age:24
                  </Text>
                </GridItem>
                <GridItem w="100%" h="10">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Joined: 5/06/22
                  </Text>
                </GridItem>
              </Grid>
              <Grid templateColumns="repeat(5, 1fr)" gap={0}>
                <GridItem colSpan={1} h="10" ml="15">
                  <Text
                    ml="15"
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
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
                    textAlign={["center"]}
                    color="black"
                    textShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                    fontFamily="neuton"
                    fontWeight="bold"
                    fontSize={"1vw"}
                  >
                    Contact:
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
              
            </GridItem>
            <GridItem
              colSpan={1}
              rowSpan={2}
              bg="#EEFFE7"
              borderRadius="3xl"
              boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Box
                w="910"
                h="92"
                bg="#D0FEBF"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="3xl"
              >
                <Heading
                  variant="authEffect"
                  textAlign={"left"}
                  pt="1vw"
                  pl="3vw"
                  fontSize="2vw"
                >
                  Activity:
                </Heading>
              </Box>
              <Accordion
                allowToggle
                backgroundColor="#F1FFF4"
                style={{ overflowY: "scroll", height: "20vh" }}
              >
                {feed.map((feed) => {
                  return (
                    <AccordionItem
                      w="50vw"
                      borderColor="green.600"
                      bg="green.500"
                      borderLeft="1px"
                      borderLeftColor="green.600"
                      borderRight="1px"
                      borderRightColor="green.600"
                      borderWidth="1px"
                      borderRadius="lg"
                      overflow="hidden"
                      boxShadow={"0px 2px 2px rgba(0,0,0,0.25)"}
                      mb="2vw"
                    >
                      <Stack
                        alignItems={"center"}
                        direction={{ base: "line", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                        m="1vw"
                        mt="2vw"
                      >
                        <Image
                          w="20%"
                          boxSize="100px"
                          src={feed.image}
                          overflow="hidden"
                          borderWidth="3px"
                          borderRadius="5px"
                          boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                          borderLeft="1px"
                          borderLeftColor="green.600"
                          borderRight="1px"
                          borderRightColor="green.600"
                          borderTop="1px"
                          borderTopColor="green.600"
                          borderBottom="1px"
                          borderBottomColor="green.600"
                        />
                        <AccordionButton w="65%">
                          <Box
                            flex="1"
                            textAlign="left"
                            alignItems={"center"}
                            variant="golden"
                          >
                            <Heading variant="golden">
                              {feed.titlu_activitate}
                            </Heading>
                            <p variant="auth" fontWeight="400" fontSize="1.5vw">
                              {feed.nume_firma}
                            </p>
                            <span
                              style={{
                                fontWeight: "1000",
                                fontFamily: "neuton",
                                fontSize: "1.2vw",
                              }}
                            >
                              Date: {feed.date}
                            </span>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <Flex w="20%">
                          <Flex alignItems={"center"}>
                            <span
                              style={{
                                fontWeight: "700",
                                fontSize: "1.2vm",
                                fontFamily: "neuton",
                              }}
                            >
                              
                              <Image src="./2people.svg" w="50%" h="auto" />
                              {feed.participanti}
                            </span>
                            <Spacer />
                            <span
                              style={{
                                fontStyle: "inter",
                                fontWeight: "700",
                              }}
                            >
                              <Box ml= "50px"mr="3vw">{feed.puncte} pts </Box>
                            </span>
                          </Flex>
                        </Flex>
                      </Stack>
                      <br></br>
                      <AccordionPanel
                        fontFamily={"inter"}
                        fontSize="1.2vw"
                        textColor={"#072C06"}
                      >
                        {feed.descriere_activitate}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </GridItem>
          </Grid>
     </Box>
  );
};

export default OProfile;
