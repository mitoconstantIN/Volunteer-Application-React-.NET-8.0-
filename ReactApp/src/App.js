import * as React from "react";
import { Route, Routes } from "react-router-dom";

import Description from "./Components/description";
import NavBar from "./Components/NavBar";
import UpperHomePage from "./Components/UpperHomePage";

import OSignUp from "./Components/OSignUp";
import VSignUp from "./Components/VSignUp";
import Login from "./Components/Login";
import NavBarProfile from "./Components/NavBarProfile";
import CSignUp from "./Components/CSignUp";
import UProfile from "./Components/UProfile";
import OProfile from "./Components/OProfile"
import Shop from "./Components/Shop";
import CollaboratorShop from "./Components/CollaboratorShop";



import { ChakraProvider } from "@chakra-ui/react";
import { mainTheme } from "./styles/theme";
import "@fontsource/inter";
import "@fontsource/neuton";
import VFeed from "./Components/VFeed";
import OFeed from "./Components/OFeed";
import { VFeedData } from "./Components/VFeedData";
import { OFeedData } from "./Components/OFeedData";
import { ShopData } from "./Components/ShopData";
import {ProfileData} from "./Components/ProfileData"

function App() {
  return (
    <ChakraProvider resetCSS theme={mainTheme}>
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <UpperHomePage />
              <Description />
            </>
          }
        />
        <Route
          path="/OSignUp"
          element={
            <>
              <NavBar/>
              <OSignUp />
            </>
          }
        />
        <Route
          path="/VSignUp"
          element={
            <>
              <NavBar/>
              <VSignUp />
            </>
          }
        />
        <Route
          path="/CSignUp"
          element={
            <>
              <NavBar />
              <CSignUp />
            </>
          }
        />
        <Route
          path="/Login"
          element={
            <>
              <NavBar/>
              <Login />
            </>
          }
        />
        <Route
          path="/VFeed"
          element={
            <>
              <NavBarProfile />
              <VFeed feed={VFeedData} />
            </>
          }
        />
        <Route path="/OFeed" element={<><NavBarProfile /><OFeed/></>} />
        <Route

          path="/UProfile"
          element={
            <>
              <NavBarProfile />
              <UProfile feed={VFeedData} />
            </>
          }
        />
        <Route
          path="/OProfile"
          element={
            <>
              <NavBarProfile />
              <OProfile feed={VFeedData} />
            </>
          }
        />
      <Route
          path="/Shop"
          element={
            <>
              <NavBarProfile />
              <Shop feed={ShopData} />
            </>
          }
        />
        <Route
          path="/CollaboratorShop"
          element={
            <>
              <NavBarProfile />
              <CollaboratorShop feed={ShopData} />
            </>
          }
        />
        

        </Routes>
    </ChakraProvider>
  );
}

export default App;
