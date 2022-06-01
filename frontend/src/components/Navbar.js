import { Box, Container, HStack } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      align="start"
      background={"#FAFAFA"}
      textColor="black"
      padding={"15px"}
      fontWeight="800"
      fontSize={"20px"}
      borderBottom="1px"
      borderBottomColor={"lightgrey"}
      justifyItems="center"
      display={"flex"}
    >
      <Container maxW={"5xl"}>CONVO.</Container>

      <Container
        justifyContent={"space-between"}
        display="flex"
        fontSize="15px"
        textColor="gray"
        fontWeight="600"
        maxW={"sm"}
      >
        <Box>Home</Box>
        <Box>About</Box>
        <Box>Enquire</Box>
      </Container>
    </Box>
  );
}

export default Navbar;
