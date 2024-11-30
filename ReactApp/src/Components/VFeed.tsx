import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  GridItem,
  Text,
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
import axios from "axios";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { Event } from "Models/Events";
import { useAuth } from "Context/useAuth";

const VFeed: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [joinedEvents, setJoinedEvents] = useState<number[]>([]);
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  const { user } = useAuth(); 

  axios.defaults.headers.common['ApiKey'] = "app key";
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("https://localhost:7096/api/event");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const fetchUserEvents = async () => {
    try {
      if(user?.id){
        const response = await axios.get(`https://localhost:7096/api/account/${user.id}/events`);
        setUserEvents(response.data);
      }
    } catch (error) {
      console.error("Error fetching user events:", error);
    }
  };

  const handleJoinEvent = async (eventId: number) => {
    try {
      if (user?.id) {
        await axios.post(`https://localhost:7096/api/account/${user.id}/events/${eventId}`);
        setJoinedEvents([...joinedEvents, eventId]); // Update the state to mark this event as joined
      }
    } catch (error) {
      console.error("Error joining event:", error);
    }
  };

  const handleLeaveEvent = async (eventId: number) => {
    try {
      if (user?.id) {
        console.log("Attempting to leave event with ID:", eventId);
        console.log("User ID:", user.id);
        await axios.delete(`https://localhost:7096/api/account/${user.id}/events/${eventId}`);
        setUserEvents(userEvents.filter(event => event.id !== eventId)); // Update the state to remove this event from joined events
      }
    } catch (error) {
      console.error("Error leaving event:", error);
    }
  };

  useEffect(() => {
    fetchUserEvents();
  }, [user?.id]);

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
            borderRadius="none"
            w="50%"
            borderWidth="1px"
            borderColor="blackAlpha.400"
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _selected={{ bgColor: "blackAlpha.300", color: "white" }}
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}
            p="1rem"
            fontSize="lg"
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
            w="50%"
            borderWidth="1px"
            borderColor="blackAlpha.400"
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _selected={{ bgColor: "blackAlpha.300", color: "white" }}
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}
            p="1rem"
            fontSize="lg"
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
            <Grid h="66vh" templateColumns={"repeat(2, 1fr)"} gap={"5"}>
              <GridItem rowSpan={1} overflowY="auto">
                <Accordion allowToggle>
                  {events.map((event) => (
                    <AccordionItem
                      key={event.id}
                      w="100%"
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
                        direction={{ base: "column", sm: "row" }} 
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Image
                          w="20%"
                          boxSize="100px"
                          alignItems="center"
                          mt="1.5vw"
                          ml="1.5vw"
                          src="./icon2.png" 
                          borderWidth="1px"
                          borderRadius="15px"
                          overflow="hidden"
                          boxShadow="0px 2px 2px rgba(0,0,0,0.5)"
                        />
                        <AccordionButton w="65%">
                          <Box flex="1" textAlign="left" alignItems={"center"}>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontFamily: "neuton",
                                fontSize: "1.5vw",
                              }}
                            >
                              {event.title}
                            </span>
                            <Text fontFamily="inter">{event.eventType}</Text>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontFamily: "neuton",
                              }}
                            >
                              Date: {new Date(event.date).toLocaleDateString()}
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
                              {!joinedEvents.includes(event.id) && ( // Check if the user has already joined this event
                                <Button
                                  variant="auth"
                                  onClick={() => handleJoinEvent(event.id)}
                                >
                                  Join
                                </Button>
                              )}
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
                                {event.participantsCount}
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
                              {event.points} pts{" "}
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
                                {event.eventType}
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
                                2 hours
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
                                <Text ml="1vw">{event.participantsCount}</Text>
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
                                10:00 AM - 12:00 PM
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
                                <Text ml="1vw">{event.points}</Text>
                              </span>
                            </Flex>{" "}
                          </GridItem>
                        </Grid>
                        <Text fontFamily="inter">
                          {event.description}
                        </Text> 
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
                <div style={{ position: "sticky" }}>
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
            <Grid h="66vh" templateColumns={"repeat(2, 1fr)"} gap={"5"}>
              <GridItem rowSpan={1} overflowY="auto">
                <Accordion allowToggle>
                  {userEvents.map((event) => (
                    <AccordionItem
                      key={event.id}
                      w="100%"
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
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Image
                          w="20%"
                          boxSize="100px"
                          alignItems="center"
                          mt="1.5vw"
                          ml="1.5vw"
                          src="./icon2.png" 
                          borderWidth="1px"
                          borderRadius="15px"
                          overflow="hidden"
                          boxShadow="0px 2px 2px rgba(0,0,0,0.5)"
                        />
                        <AccordionButton w="65%">
                          <Box flex="1" textAlign="left" alignItems={"center"}>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontFamily: "neuton",
                                fontSize: "1.5vw",
                              }}
                            >
                              {event.title}
                            </span>
                            <Text fontFamily="inter">{event.eventType}</Text>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontFamily: "neuton",
                              }}
                            >
                              Date: {new Date(event.date).toLocaleDateString()}
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
                              <Button variant="auth"
                               onClick={() => handleLeaveEvent(event.id)}
                               >Leave</Button>
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
                                {event.participantsCount}
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
                              {event.points} pts{" "}
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
                                {event.eventType}
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
                                2 hours
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
                                <Text ml="1vw">{event.participantsCount}</Text>
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
                                10:00 AM - 12:00 PM
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
                                <Text ml="1vw">{event.points}</Text>
                              </span>
                            </Flex>{" "}
                          </GridItem>
                        </Grid>
                        <Text fontFamily="inter">
                          {event.description}
                        </Text> 
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GridItem>
              <GridItem rowSpan={1}>
                <div style={{ position: "sticky" }}>
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
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default VFeed;
