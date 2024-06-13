import {
  Grid,
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
  GridItem,
  Text,
  Select,
  Spacer,
  Flex,
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
  Heading,
  Center,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import React, { useEffect, useState } from "react";
import "@fontsource/inter";
import "@fontsource/neuton";
import Moment from 'moment';
import OFeedData from './OFeedData';

const OFeed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [eventsInArea, setEventsInArea] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7256/api/Event/GetEvents", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEventsInArea(data));
  }, []);

  const [yourEvents, setYourEvents] = useState([]);
  useEffect(() => {
    fetch("https://localhost:7256/api/Event/GetEventsByVolunteerEmail/test@email.com", {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setYourEvents(data));
  }, []);

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
            size="lg"
            w="50%"
            borderWidth="1px"
            borderColor="blackAlpha.400"
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _selected={{ bgColor: "blackAlpha.300", color: "white" }}
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}

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
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _selected={{ bgColor: "blackAlpha.300", color: "white" }}
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}
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
                  <AccordionItem
                    w="50vw"
                    h="8vw"
                    borderBottom="1px"
                    borderLeft={"1px"}
                    borderRight="1px"
                    borderColor="yellow.600"
                    borderBottomColor="yellow.600"
                    borderRightColor="yellow.600"
                    borderLeftColor="yellow.600"
                    boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                    borderRadius="5px"
                    overflow="hidden"
                    m="1vw"
                  >
                    <AccordionButton
                      alignItems="center"
                      w="100%"
                      h="100%"
                      onClick={onOpen}
                    >
                      <Grid
                        templateColumns="repeat(2, 1fr)"
                        templateRows={"repeat(1,1fr)"}
                        gap={5}
                        fontSize="2vw"
                      >
                        <GridItem w="150%" alignItems={"center"}>
                          <Text>
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              <AddIcon color="yellow.600" />
                            </span>
                          </Text>
                        </GridItem>
                        <GridItem w="215%">
                          <Text>
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "#B18037",
                                fontFamily: "neuton",
                              }}
                            >
                              Create An Event
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
                          <ModalBody pb={6}>
                            <FormControl
                              variant="floating"
                              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                              isRequired
                              isInvalid
                            >
                              <Input placeholder=" " ref={initialRef} />
                              <FormLabel variant="golden">
                                Event Title:
                              </FormLabel>
                            </FormControl>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                              mt={4}
                            >
                              <FormLabel mt={2} ml={4} w="40%">
                                Event Type:
                              </FormLabel>
                              <FormControl
                                variant="floating"
                                boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                isRequired
                                isInvalid
                              >
                                <Select placeholder=" ">
                                  <option value='rec'>Recycling</option>
                                  <option value='tree'>Tree Planting</option>
                                  <option value='misc'>Miscellaneous</option>
                                </Select>
                              </FormControl>
                            </Stack>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Start Date:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <span style={{ fontWeight: "bold" }}>_</span>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                  isRequired
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    End Date:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                            <Stack
                            mt={4}
                              direction={{ base: "column", sm: "row" }}
                              justify={"space-between"}
                            >
                              <Input placeholder=" " />
                              <FormLabel variant="golden">
                                Hours/Day
                              </FormLabel>
                            </Stack>
                            <FormControl
                              mt={4}
                              variant="floating"
                              boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                              isRequired
                              isInvalid
                            >
                              <Input placeholder=" " />
                              <FormLabel variant="golden">
                                Descprition:
                              </FormLabel>
                            </FormControl>
                            <Stack
                              direction={{ base: "column", sm: "row" }}
                              align={"center"}
                              justify={"space-between"}
                            >
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                  isInvalid
                                >
                                  <Input placeholder=" " />
                                  <FormLabel variant="golden">
                                    Add Sponsors:
                                  </FormLabel>
                                </FormControl>
                              </div>
                              <div>
                                <FormControl
                                  mt={4}
                                  variant="floating"
                                  boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
                                  isInvalid
                                >
                                  <Input
                                    placeholder="photo"
                                    type="file"
                                    id="Photos"
                                  />
                                  <FormLabel variant="golden">
                                    Add Photos:
                                  </FormLabel>
                                </FormControl>
                              </div>
                            </Stack>
                          </ModalBody>
                          <ModalFooter justifyContent={"center"}>
                            <Button onClick={onClose} variant="golden" mb="1vw">
                              Create
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </AccordionButton>
                  </AccordionItem>
                  <br></br>
                  {eventsInArea.map((ofeed) => {
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
                            src={
                              ofeed.type === "tree" ? "./icon1.png"
                                : ofeed.type === "rec" ? "./icon2.png"
                                  : "./icon3.png"}
                            alignItems="center"
                            mt="1.5vw"
                            ml="1.5vw"
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

                              <Heading variant="golden">
                                {ofeed.title}
                              </Heading>
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
                                {ofeed.organizationName}
                              </p>

                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                  fontSize: "1.5vw",
                                }}
                              >
                                {ofeed.titlu_activitate}
                              </span>
                              <Text fontFamily="inter">{ofeed.nume_firma}</Text>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                Date: {Moment(ofeed.dateStart).format('DD-MM-YYYY')}
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
                                  {ofeed.join ? "Join" : "Joined"}
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
                                  {ofeed.participanti}
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
                                <Image
                                  src="./2people.svg"
                                  w="50%"
                                  h="auto"
                                  ml="0.6vw"
                                />
                                {ofeed.currentNumberOfParticipants}
                              </span>
                              <Spacer />
                              <span
                                style={{
                                  fontStyle: "inter",
                                  fontWeight: "700",
                                }}
                              >
                                {ofeed.pointsGiven} pts{" "}
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
                                  {ofeed.event_type}
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
                                  {ofeed.duration}
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
                                  <Text ml="1vw">{ofeed.participants}</Text>
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
                                  {ofeed.event_schedule}
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
                                  <Text ml="1vw">{ofeed.points}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                          </Grid>
                          <Text fontFamily="inter">
                            {ofeed.description}
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

          <Grid
              h='250px'
              templateColumns={'repeat(2, 1fr)'}
              gap={'5'}
            >

              <GridItem rowSpan={1}>
                <Accordion
                  allowToggle
                  backgroundColor="yellow.500"
                  borderColor="yellow.600"
                  style={{ overflowY: "scroll", height: "66vh" }}
                >
                  {yourEvents.map((ofeed) => {
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
                            src={
                              ofeed.type === "tree" ? "./icon1.png"
                                : ofeed.type === "rec" ? "./icon2.png"
                                  : "./icon3.png"}
                            alignItems="center"
                            mt="1.5vw"
                            ml="1.5vw"
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
                              <Heading variant="golden">
                                {ofeed.title}
                              </Heading>
                              <p
                                variant="auth"
                                fontWeight="400"
                                fontSize="1.5vw"
                              >
                                {ofeed.organizationName}
                              </p>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                  fontSize: "1.5vw",
                                }}
                              >
                                {ofeed.titlu_activitate}
                              </span>
                              <Text fontFamily="inter">{ofeed.nume_firma}</Text>
                              <span
                                style={{
                                  fontWeight: "bold",
                                  fontFamily: "neuton",
                                }}
                              >
                                Date: {ofeed.date}
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

                                <Image
                                  src="./2people.svg"
                                  w="50%"
                                  h="auto"
                                  ml="0.6vw"
                                />
                                {ofeed.currentNumberOfParticipants}
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
                                {ofeed.pointsGiven} pts{" "}
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
                                  {ofeed.event_type}
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
                                  {ofeed.duration}
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
                                  <Text ml="1vw">{ofeed.participants}</Text>
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
                                  {ofeed.event_schedule}
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
                                  <Text ml="1vw">{ofeed.points}</Text>
                                </span>
                              </Flex>{" "}
                            </GridItem>
                          </Grid>
                          <Text p={4} fontFamily="inter">
                            {ofeed.description}
                          </Text>
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>

              </GridItem>
              <GridItem rowSpan={1}>

                <FormControl fontFamily="neuton" fontSize="1.5vw">
                  <input placeholder="Select Location:" type="text"></input>

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
export default OFeed;