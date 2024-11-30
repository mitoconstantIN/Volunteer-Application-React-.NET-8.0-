import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Badge,
  Button,
  Grid,
  GridItem,
  Center,
  Text,
  Flex,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

const CollaboratorShop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [feed, setFeed] = useState([]);


  const fetchData = async () => {
    try {
      const response = await axios.get("https://localhost:7096/api/card");
      setFeed(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7096/api/card");
        setFeed(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      id: 0,
      title: formData.get("title"),
      points: parseInt(formData.get("points")),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
    };

    try {
      const response = await axios.post("https://localhost:7096/api/card", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        console.log("Card added successfully!");
        fetchData(); // Refresh the feed
        onClose();
      } else {
        console.error("Failed to add card.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Box w="100%">
      <Stack
        spacing={0}
        direction="row"
        align="center"
        bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
      >
        
      </Stack>
      <Center>
        <Button 
            onClick={onOpen}
            variant="outline"
            borderColor="blackAlpha.400"
            bg="white"
            _hover={{ bgColor: "blackAlpha.300", color: "white" }}
            _focus={{ bgColor: "blackAlpha.300", color: "white" }}
            _active={{ bgColor: "blackAlpha.300", color: "white" }}
            w="50%"
            p={10}
            fontSize="lg"
            borderRadius="md"
            boxShadow="0px 2px 2px rgba(0,0,0,0.25)"
            mb="1em"
            mt="3"
            bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)">
          Add Card
        </Button>
      </Center>
      <Center>
        <Grid
          templateRows="repeat(autofill)"
          templateColumns="repeat(3, 1fr)"
          gap={20}
          mt="5"
        >
          {feed.map((shopitem) => (
            <GridItem key={shopitem.id} rowSpan={1} colSpan={1}>
              <Box
                borderWidth="1px"
                borderRadius="3xl"
                //bg="#A203ED"
                 bgGradient="linear(269.6deg, yellow.100 -7.25%, green.100 48.24% ,  green.200 98.25%)"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                overflow="hidden"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
              >
                <Image
                  src={shopitem.img ? shopitem.img : "./Rectangle 64a.png"}
                  alt="Card Image"
                />
                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Badge
                      borderRadius="full"
                      px="5"
                      colorScheme="#B18037"
                      fontWeight="bold"
                      border="1px"
                      bg="rgba(154, 88, 88, 0.35)"
                      ml="24"
                    >
                      <Text fontWeight="bold" fontSize="10">
                        5 LEFT
                      </Text>
                    </Badge>
                  </Box>

                  <Box
                    mt="1"
                    color="black"
                    fontWeight="bold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {shopitem.title}
                  </Box>
                  <Box display="flex" alignItems="baseline">
                    <Box as="span" color="black" fontSize="m" fontWeight="bold">
                      Sponsor: UAIC
                    </Box>

                    <Box ml="1">{shopitem.sponsor}</Box>
                  </Box>
                  <Box display="flex" mt="2" alignItems="center">
                    <Badge
                      borderRadius="full"
                      px="5"
                      colorScheme="yellow"
                      fontWeight="bold"
                      border="1px"
                      bg="rgba(255, 203, 48, 0.35)"
                    >
                      Price: {shopitem.points}
                    </Badge>
                    
                  </Box>
                </Box>
              </Box>
            </GridItem>
          ))}
          
        </Grid>
      </Center>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Card</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input ref={initialRef} placeholder="Title" name="title" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Points</FormLabel>
                <Input placeholder="Points" name="points" type="number" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input placeholder="Image URL" name="imageUrl" />
              </FormControl>

              <FormControl mt={4} isRequired>
                <FormLabel>Description</FormLabel>
                <Input placeholder="Description" name="description" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CollaboratorShop;
