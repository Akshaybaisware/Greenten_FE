// RootLayout.jsx
import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import UserNavbar from "../UserPage/UserNavbar";

function RootLayout() {
  const role = localStorage.getItem("role");
  return (
  //   <Flex direction="column" height="100vh">
  //   {role === "admin" ? <Navbar /> : <UserNavbar />}
  //   <Flex flexGrow={1} position="relative">
  //     <Box
  //     mt={["16%" , "10%"]}
  //     bg="lightgray" flexBasis={{ base: "100%", md: "100%" }} overflowY="auto">
  //       <Outlet />
  //     </Box>
  //   </Flex>
  // </Flex>
<>
<Flex direction="column" height="100vh">
      {/* Navbar */}
      <Box>
        {role === "admin" ? <Navbar /> : <UserNavbar />}
      </Box>

      {/* Outlet */}
      <Flex flexGrow={1} position="relative" mt={"10%"}>
        <Box flexBasis="100%" overflowY="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  </>
  );
}


export default RootLayout;


