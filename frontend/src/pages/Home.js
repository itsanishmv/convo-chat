import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Box,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Box
    // backgroundImage={
    //   "https://i.pinimg.com/originals/20/e4/28/20e428e4cd16105000c71d68cfd569c6.gif"
    // }
    // backgroundRepeat="no-repeat"
    >
      <Box>
        <Navbar />
      </Box>

      <Container
        maxW={"md"}
        borderWidth="2px"
        borderRadius={"10px"}
        boxShadow="2xl"
        marginTop={"10"}
        padding="6"
        background={"#FAFAFA"}
      >
        <Tabs isFitted variant={"soft-rounded"} colorScheme="blue">
          <TabList
            borderBottom={"1px"}
            borderBottomColor="lightgray"
            padding="3"
          >
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}

export default Home;
