import {
  Button,
  Grid,
  GridItem,
  Text,
  Select,
  FormControl,
  Stack,
  Image,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  Flex,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
//import { Wrapper, Status } from "@googlemaps/react-wrapper";

const VFeed = ({ feed }) => {
  return (
    <div>
      <RemoveScrollBar />
      <Tabs isFitted variant="unstyled">
        <TabList
          mb="1em"
          boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
          bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
        >
          <Tab
          variant="ghost"
          borderRadius="none"
          size="lg"
          w="50%"
          borderWidth="1px"
          borderColor="blackAlpha.400"
          _focus={{ bgColor:"blackAlpha.300", color: "white" }}
          _selected={{bgColor:"blackAlpha.300", color: "white" }}
          _hover={{ bgColor:"blackAlpha.300", color: "white"}} 
          >
            <Image src="./Area.svg" w="4%" /> &nbsp;&nbsp;{" "}
            <span
              style={{
                fontWeight: "400",
                fontFamily: "inter",
                textShadow: "0px 2px 2px rgba(0,0,0,0.5)",
              }}
            >
              Events In Your Area
            </span>
          </Tab>
          <Tab
              borderRadius="none"
              size="lg"
              w="50%"
              borderWidth="1px"
              borderColor="blackAlpha.400"
              _focus={{ bgColor:"blackAlpha.300", color: "white" }}
              _selected={{bgColor:"blackAlpha.300", color: "white" }}
              _hover={{ bgColor:"blackAlpha.300", color: "white"}} 
          >
            {" "}
            <Image src="./Calendar.svg" w="4%" mr="0.5vw" />
            <span
              style={{
                fontWeight: "400",
                fontFamily: "inter",
                textShadow: "0px 2px 2px rgba(0,0,0,0.5)",
              }}
            >
              Your Events
            </span>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid h="250px" templateColumns={"repeat(2, 1fr)"} gap={"5"}>
              <GridItem rowSpan={1}>
                <Accordion
                  allowToggle
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  {feed.map((feed) => {
                    return (
                      <AccordionItem
                        w="50vw"
                        alignItems={"center"}
                        borderColor="#8AEE67"
                        m="1vw"
                        pr="1vw"
                        backgroundColor="#F1FFF4"
                        borderRadius="10px"
                        borderWidth="1px"
                        overflow="hidden"
                        boxShadow="0px 2px 2px rgba(0,0,0,0.3)"
                      >
                        <Stack
                          alignItems={"center"}
                          direction={{ base: "line", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Image
                            w="20%"
                            boxSize="100px"
                            alignItems="center"
                            mt="1.5vw"
                            ml="1.5vw"
                            src={feed.image}
                            borderWidth="1px"
                            borderRadius="15px"
                            overflow="hidden"
                            boxShadow="0px 2px 2px rgba(0,0,0,0.5)"
                          />
                          <AccordionButton w="65%">
                            <Box
                              flex="1"
                              textAlign="left"
                              alignItems={"center"}
                            >
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                  fontSize: "1.5vw",
                                }}
                              >
                                {feed.titlu_activitate}
                              </span>
                              <Text fontFamily="inter">{feed.nume_firma}</Text>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                Date: {feed.date}
                              </span>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <Grid
                            h="50px"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            gap={"3"}
                          >
                            <GridItem rowSpan={1} colSpan={2}>
                              {" "}
                              <Center>
                                <Button variant="auth">
                                  {feed.join ? "Join" : "Joined"}
                                </Button>
                              </Center>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              {" "}
                              <Flex>
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "neuton",
                                  }}
                                >
                                  {feed.participanti}
                                  <Image src="./2people.svg" w="50%" />{" "}
                                </span>
                              </Flex>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              {" "}
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                {feed.puncte} pts{" "}
                              </span>
                            </GridItem>
                          </Grid>
                        </Stack>
                        <br></br>
                        <AccordionPanel pb={4} fontFamily="inter">
                          <Grid
                            h="200px"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            gap={4}
                          >
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="authEffect">Event Type: </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  {feed.event_type}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="authEffect">Duration: </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  {feed.duration}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Flex>
                                <span style={{}}>
                                  <Text variant="authEffect">
                                    Participants:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  <Text ml="1vw">{feed.participants}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="authEffect">
                                    Event Schedule:{" "}
                                  </Text>
                                </span>{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  {feed.event_schedule}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Flex>
                                <span style={{}}>
                                  <Text variant="authEffect">Points: </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  <Text ml="1vw">{feed.points}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                          </Grid>
                          <Text fontFamily="inter">
                            {feed.descriere_activitate}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
                <div position="sticky">
                  <FormControl fontFamily="neuton" fontSize="1.5vw">
                    <input
                      placeholder="Select Another City:"
                      type="text"
                    ></input>
                  </FormControl>
                </div>
                <iframe
                  title="Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro"
                  width="100%"
                  height="80%"
                />
                <Text align="center" fontFamily="neuton">
                  Current City:<br></br>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#1C6F47",
                      fontFamily: "neuton",
                      fontSize: "2vw",
                      textShadow: "0px 2px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Iasi, Romania
                  </span>
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>

          <TabPanel>
            <Grid h="250px" templateColumns={"repeat(2, 1fr)"} gap={"5"}>
              <GridItem rowSpan={1}>
                <Accordion
                  allowToggle
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  {feed.map((feed) => {
                    return (
                      <AccordionItem
                        w="50vw"
                        backgroundColor="#FFFDF1"
                        alignItems={"center"}
                        borderColor="#FFCB30"
                        m="1vw"
                        pr="1vw"
                        borderRadius="10px"
                        borderWidth="1px"
                        overflow="hidden"
                        boxShadow="0px 2px 2px rgba(0,0,0,0.3)"
                      >
                        <Stack
                          alignItems={"center"}
                          direction={{ base: "line", sm: "row" }}
                          align={"start"}
                          justify={"space-between"}
                        >
                          <Image
                            w="20%"
                            boxSize="100px"
                            alignItems="center"
                            mt="1.5vw"
                            ml="1.5vw"
                            src={feed.image}
                            borderWidth="1px"
                            borderRadius="15px"
                            overflow="hidden"
                            boxShadow="0px 2px 2px rgba(0,0,0,0.5)"
                          />
                          <AccordionButton w="65%">
                            <Box
                              flex="1"
                              textAlign="left"
                              alignItems={"center"}
                            >
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                  fontSize: "1.5vw",
                                }}
                              >
                                {feed.titlu_activitate}
                              </span>
                              <Text fontFamily="inter">{feed.nume_firma}</Text>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                Date: {feed.date}
                              </span>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          <Grid
                            h="50px"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            gap={"3"}
                          >
                            <GridItem rowSpan={1} colSpan={2}>
                              {" "}
                              <Center>
                                <Button variant="golden">Leave</Button>
                              </Center>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              {" "}
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                {feed.participanti}
                                <Image src="./2people.svg" w="50%" />{" "}
                              </span>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}>
                              {" "}
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                {feed.puncte} pts{" "}
                              </span>
                            </GridItem>
                          </Grid>
                        </Stack>
                        <br></br>
                        <AccordionPanel pb={4}>
                          <Grid
                            h="200px"
                            templateRows="repeat(6, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            gap={4}
                          >
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="golden" fontSize="1.1vw">
                                    Event Type:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  {feed.event_type}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="golden" fontSize="1.1vw">
                                    Duration:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  {feed.duration}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Flex>
                                <span style={{}}>
                                  <Text variant="golden" fontSize="1.1vw">
                                    Participants:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  <Text ml="1vw">{feed.participants}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={1}>
                              {" "}
                              <Text>
                                <span style={{}}>
                                  <Text variant="golden" fontSize="1.1vw">
                                    Event Schedule:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  {feed.event_schedule}
                                </span>
                              </Text>{" "}
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={1}>
                              {" "}
                              <Flex>
                                <span style={{}}>
                                  <Text variant="golden" fontSize="1.1vw">
                                    Points:{" "}
                                  </Text>
                                </span>{" "}
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    fontFamily: "inter",
                                  }}
                                >
                                  <Text ml="1vw">{feed.points}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                          </Grid>
                          <Text p={4} fontFamily="inter">
                            {feed.descriere_activitate}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
                <FormControl fontFamily="neuton" fontSize="1.5vw">
                  <input placeholder="Select Another City:" type="text"></input>
                </FormControl>
                <iframe
                  title="Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.84040659259!2d27.516930545568552!3d47.15611595595363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cf639ddbb%3A0x7ccb80da5426f53c!2zSWHImWk!5e0!3m2!1sro!2sro!4v1663429441856!5m2!1sro!2sro"
                  width="100%"
                  height="80%"
                />
                <Text align="center" fontFamily="neuton">
                  Current City:<br></br>
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "#B18037",
                      fontFamily: "neuton",
                      fontSize: "2vw",
                      textShadow: "0px 2px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    Iasi, Romania
                  </span>
                </Text>
              </GridItem>
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
export default VFeed;
