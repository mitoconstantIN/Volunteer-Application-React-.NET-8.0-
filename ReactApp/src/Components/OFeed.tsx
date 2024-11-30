import {
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormLabel,
  useDisclosure,
  ModalCloseButton,
  FormControl,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import "@fontsource/inter";
import "@fontsource/neuton";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import axios from "axios";
import { Event } from "Models/Events";

const OFeed: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [events, setEvents] = useState<Event[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.currentTarget);
    const dateTimeValue = formData.get("date")?.toString() || '';
  
    const data = {
      title: formData.get("title")?.toString() || '',
      description: formData.get("description")?.toString() || '',
      eventType: formData.get("eventType")?.toString() || '',
      participantsCount: parseInt(formData.get("participantsCount")?.toString() || '0', 10),
      date: dateTimeValue,
      points: parseInt(formData.get("points")?.toString() || '0', 10),
    };
  
    axios.defaults.headers.common['ApiKey'] = "app key";
    
    try {
      const response = await fetch("https://localhost:7096/api/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ApiKey":"app key"
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log("Event created successfully!");
        onClose();
        fetchEvents();
      } else {
        console.error("Failed to create event.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://localhost:7096/api/event");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <RemoveScrollBar />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={6}>
        <GridItem>
          <Button
            leftIcon={<AddIcon color="yellow.600" />}
            onClick={onOpen}
            variant="outline"
            borderColor="blackAlpha.400"
            bg="white"
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _active={{ bgColor: "blackAlpha.300", color: "white" }}
            w="100%"
            p={10}
            fontSize="lg"
            borderRadius="md"
            boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
            mb="1em"
            bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
          >
            <Text fontWeight="bold" color="white" fontFamily="neuton">
              Create An Event
            </Text>
          </Button>

          <Box height="60vh" overflowY="auto" pr={4}>
            <Accordion allowToggle>
              {events.map((event) => (
                <AccordionItem
                  key={event.id}
                  w="90%"
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
                       mt="0.5 vw"
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
                          Date: {new Date(event.date).toLocaleString()}
                        </span>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Stack>
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
                            <Text variant="authEffect">Participants: </Text>
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
                            <Text variant="authEffect">Event Schedule: </Text>
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
                    <Text fontFamily="inter">{event.description}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </GridItem>
        <GridItem>
          <FormControl fontFamily="neuton" fontSize="1.5vw">
            <Input placeholder="Select Another City:" type="text" />
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

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={"center"}
            fontFamily="neuton"
            fontWeight={"700"}
            letterSpacing="0.2em"
            color="#B18037"
            textShadow="0px 2px 2px rgba(0,0,0,0.25)"
          >
            Create an Event
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>  
          <ModalBody pb={6}>
            <FormControl
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input placeholder=" " ref={initialRef} name="title" />
              <FormLabel variant="golden">Title</FormLabel>
            </FormControl>
            
            <FormControl
              mt={4}
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input placeholder=" " name="description" />
              <FormLabel variant="golden">Description</FormLabel>
            </FormControl>

            <FormControl
              mt={4}
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input placeholder=" " name="eventType" />
              <FormLabel variant="golden">Event Type</FormLabel>
            </FormControl>

            <FormControl
              mt={4}
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input type="number" placeholder=" " name="participantsCount" />
              <FormLabel variant="golden">Participants Count</FormLabel>
            </FormControl>

            <FormControl
              mt={4}
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input type="datetime-local" placeholder=" " name="date" />
              <FormLabel variant="golden">Date</FormLabel>
            </FormControl>

            <FormControl
              mt={4}
              variant="floating"
              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
              isRequired
            >
              <Input type="number" placeholder=" " name="points" />
              <FormLabel variant="golden">Points</FormLabel>
            </FormControl>
            <ModalFooter justifyContent={"center"}>
              <Button type="submit" variant="golden" mb="1vw">
                Create
              </Button>
            </ModalFooter>
            
          </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OFeed;
