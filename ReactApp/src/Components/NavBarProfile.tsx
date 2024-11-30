import {
  Text,
  Flex,
  Image,
  Grid,
  GridItem,
  Box,
  Avatar,
  HStack,
  Progress,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import "@fontsource/inter";
import "@fontsource/neuton";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useAuth } from "Context/useAuth";

const NavBarProfile: React.FC = () => {
  const { isLoggedIn, user, logout} = useAuth();
  return (
    <Grid
      h="100%"
      templateColumns="repeat(10,1fr)"
      gap="0"
      boxShadow="0px 4px 4px rgba(0,0,0,0.5)"
    >
      <GridItem colSpan={7}>
        <Flex
          align="center"
          w="100%"
          h="100%"
          bgGradient="linear(269.6deg, yellow -100.25%, green.400 48.24% ,  green.200 98.25%)"
        >
          <Image
            src="./LeafLogo.svg"
            alt="leaf"
            pl="8vw"
            w={["15%", "15%", "15%"]}
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
      </GridItem>
      <GridItem
        colSpan={3}
        bgGradient="linear(180deg, rgba(255, 254, 254, 0.5) -20%, #FFCB30 100%)"
      >
        <Grid
          h="100%"
          templateColumns="repeat(17,1fr)"
          gap="0"
          alignItems="center"
        >
          <GridItem colSpan={3}>
            <Box>
              <Avatar
                name="Charles Ludwigen"
                src="./Charles.jpg"
                boxSize="4vw"
                ml="2vw"
                boxShadow="0px 4px 4px rgba(0,0,0,0.3)"
                borderWidth={1}
                borderColor="black"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={11} m={5}>
            <Grid templateRows="repeat(2,1fr)" gap={2}>
              <GridItem>
                <HStack spacing={12}>
                  <Box>
                    <Text
                      color="black"
                      fontFamily="neuton"
                      fontWeight="300"
                      fontSize="1.5vw"
                      letterSpacing="0.005em"
                    >
                     Welcome, {user?.userName}
                    </Text>
                  </Box>
                  <Avatar
                    alignItems="center"
                    bg="white"
                    boxSize="2.5vw"
                    borderRadius="50%"
                    boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                  >
                    <Text
                      color="black"
                      align="center"
                      fontSize="1.3vw"
                      m="0.5vw"
                    >
                      10
                    </Text>
                  </Avatar>
                </HStack>
              </GridItem>
              <GridItem>
                <Progress
                  value={30}
                  colorScheme="red"
                  boxShadow="0px 4px 4px rgba(0,0,0,0.25)"
                />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={3}>
            <Menu>
              <MenuButton>
                <TriangleDownIcon
                  boxSize="3vw"
                  m={1}
                  color="white"
                  textShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
                />
              </MenuButton>
              <MenuList
                bgGradient={
                  "linear-gradient(180deg, rgba(255, 203, 48, 0.8) 0%, rgba(44, 170, 110, 0.8) 100%), #FFFFFF;"
                }
                opacity={0.8}
              >
                <MenuItem
                  justifyContent="center"
                  _hover={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "http://localhost:3000/UProfile";
                  }}
                >
                  Your Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  justifyContent="center"
                  _hover={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "http://localhost:3000/Shop";
                  }}
                >
                  Shop
                </MenuItem>
                <MenuDivider />
                {isLoggedIn() ? (
                  <MenuItem
                  justifyContent="center"
                  _hover={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={logout}
                >
                  Log Out
                </MenuItem>
                ) : (
                  <MenuItem
                  justifyContent="center"
                  _hover={{ background: "rgba(255,255,255,0.4)" }}
                  onClick={logout}
                >
                  Log Out
                </MenuItem>
                )}
                
              </MenuList>
            </Menu>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default NavBarProfile;
