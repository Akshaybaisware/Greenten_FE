// import React, { useState, useRef, useEffect } from "react";

// import logo from "../../assets/logo.png";
// import { NavLink } from "react-router-dom";
// import { Box, Button, Center, Image, Input } from "@chakra-ui/react";
// import axios from "axios";

// function Login() {
//   const username = useRef();
//   const password = useRef();

//   const handleLogin = async (e) => {
//     const user = {
//       email: username.current.value,
//       password: password.current.value,
//     };
//     console.log(user);
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/login",
//         user
//       );
//       console.log(response);
//       if (response.data) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         localStorage.setItem("token", response.data.token);
//         window.location.replace("/");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <>
//       <Box
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         height="100vh" // Center content vertically on the page
//       >
//         <Center>ADMIN</Center>

//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           maxWidth="400px" // Set a maximum width for responsiveness
//           width="100%" // Take up full width on smaller screens
//         >
//           <Box height={"3rem"} width="80%" borderRadius="6px">
//             <Input ref={username} placeholder="UserName" />
//           </Box>
//           <Box height={"3rem"} width="80%" borderRadius="6px">
//             <Input ref={password} placeholder="Password" />
//           </Box>
//           <NavLink to="/" style={{ textDecoration: "none", width: "100%" }}>
//             <Button
//               height={"3rem"}
//               width="80%"
//               borderRadius="6px"
//               // border="2px solid black"
//               color="#fff"
//               background="teal"
//               fontWeight={700}
//               fontFamily='"Poppins", sans-serif'
//               mt="20px"
//               _hover={{ background: "FloralWhite", color: "black" }}
//               onClick={handleLogin}
//             >
//               Log In
//             </Button>
//           </NavLink>
//           <NavLink
//             to="/userlogin"
//             style={{ textDecoration: "none", width: "100%" }}
//           >
//             <Button
//               height={"3rem"}
//               width="80%"
//               borderRadius="6px"
//               border="2px solid black"
//               color="#fff"
//               background="teal"
//               fontWeight={700}
//               fontFamily='"Poppins", sans-serif'
//               mt="20px"
//               _hover={{ background: "FloralWhite", color: "black" }}
//             >
//               System Users Login From Hear
//             </Button>
//           </NavLink>
//         </Box>

//         <Box
//           width={"400px"}
//           display={"flex"}
//           justifyContent={"flex-end"}
//           fontWeight={"700"}
//           color={"#901810"}
//           marginTop={"1rem"}
//           textAlign={"right"}
//         >
//           <NavLink
//             to="/signup"
//             style={{ textDecoration: "none", width: "100%" }}
//           >
//             <Button
//               borderRadius={"1rem"}
//               _hover={{ background: "FloralWhite", color: "black" }}
//               w={"200px"}
//             ></Button>
//           </NavLink>
//         </Box>
//       </Box>
//     </>
//   );
// }

// export default Login;

import React, { useState, useRef, useEffect } from "react";

import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Image,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";

function Login() {
  const [loader, setLoader] = useState(false);
  const username = useRef();
  const password = useRef();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleLogin = async (e) => {
    const user = {
      username: username.current.value,
      password: password.current.value,
    };
    console.log(user);
    setLoader(true);
    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/auth/adminsignin",
        user
      );

      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);

        toast({
          title: "Login Success",
          description: "Welcome to Cropton Service",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setLoader(false);
        window.location.replace("/");
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid Credentials",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setLoader(false);
      console.log(error);
    }
  };

  const handleshow = () => {
    setShow(!show);
    if (show) {
      password.current.type = "password";
    } else {
      password.current.type = "text";
    }
  };
  return loader ? (
    <Center height={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <>
      <Box
        bg={"whitesmoke"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh" // Ensure the content takes up at least the full viewport height
      >
        <Box width={["300px", "500px"]} padding={"2rem"} bg={"white"}>
          <Center fontSize={"1.5rem"} fontWeight={"600"}>
            ADMIN
          </Center>

          <Box
            display="flex"
            justifyContent={"center"}
            flexDirection="column"
            alignItems="center"
            textAlign={"center"}
            // Set a maximum width for responsiveness
            // Take up 90% of the parent container's width
            mt="20px" // Add margin at the top
          >
            <Box width="100%" mb="20px">
              {" "}
              {/* Adjust width and add margin-bottom */}
              <Input ref={username} placeholder="UserName" />
            </Box>
            <Box width="100%" mb="20px">
              <Input type="password" ref={password} placeholder="Password" />
              <button onClick={handleshow}>Show</button>
            </Box>
            <Button
              height="3rem"
              width="100%"
              borderRadius="6px"
              color="#fff"
              background="teal"
              fontSize={["0.9rem", "1.3rem"]}
              fontWeight={700}
              fontFamily='"Poppins", sans-serif'
              mb="20px" // Add margin-bottom
              _hover={{ background: "FloralWhite", color: "black" }}
              onClick={handleLogin}
            >
              Log In
            </Button>
            <NavLink
              to="/userlogin"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                height="3rem"
                width="100%" // Take up 100% width
                borderRadius="6px"
                fontSize={["0.9rem", "1.3rem"]}
                color="#fff"
                background="teal"
                fontWeight={700}
                fontFamily='"Poppins", sans-serif'
                mb="20px" // Add margin-bottom
                _hover={{ background: "FloralWhite", color: "black" }}
              >
                System Users Login From Hear
              </Button>
            </NavLink>
            <NavLink
              to="/forgetpassword"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button
                height="3rem"
                width="100%" // Take up 100% width
                borderRadius="6px"
                fontSize={["0.9rem", "1.3rem"]}
                color="#fff"
                background="teal"
                fontWeight={700}
                fontFamily='"Poppins", sans-serif'
                mb="20px" // Add margin-bottom
                _hover={{ background: "FloralWhite", color: "black" }}
              >
                Forget Password
              </Button>
            </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
