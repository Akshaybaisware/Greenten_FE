// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import {
//   Avatar,
//   Box,
//   Button,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   Flex,
//   useToast,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";

// function Navbar() {
//   const [showModal, setShowModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMenuHover = () => setIsOpen(!isOpen);
//   const toast = useToast();

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/login";
//   };

//   const confirmpass = useRef(null);
//   const newpass = useRef(null);

//   const handleForgetPassword = () => {
//     setShowModal(true);
//   };

//   const userString = localStorage.getItem("user"); // Retrieve the user object as a string from localStorage
//   const user = JSON.parse(userString);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPasswordValue = newpass.current.value;
//     const confirmPasswordValue = confirmpass.current.value;

//     if (newPasswordValue !== confirmPasswordValue) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post("/api/user/changePassword", {
//         newPassword: newPasswordValue,
//       });

//       setSuccessMessage(response.data.message);
//       setErrorMessage("");
//       console.log(response, "response");
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Error changing password");
//     }
//   };

//   const handleForgetPasswordSubmit = async (e) => {
//     e.preventDefault();
//     const newPasswordValue = newpass.current.value;
//     const confirmPasswordValue = confirmpass.current.value;

//     if (newPasswordValue !== confirmPasswordValue) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/user/forgetpassword",
//         {
//           newPassword: newPasswordValue,
//           confirmPassword: confirmPasswordValue,
//           userEmail: user.email,
//         }
//       );

//       // setSuccessMessage(response.data.message);
//       // setErrorMessage("");

//       console.log(response, "response");

//       toast({
//         title: "Password changed successfully",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//         position: "top",
//       });
//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Error changing password");
//       toast({
//         title: "Error changing password",
//         status: "error",
//         duration: 9000,
//         isClosable: true,
//         position: "top",
//       });
//     }
//   };

//   useEffect(() => {
//     handleForgetPasswordSubmit();
//   }, []);

//   return (
//     <>
//        <Box width="100%" height="5rem" bg="#E19898">
//       <Box

//         display="flex"
//         alignItems="center"
//         textAlign="center"
//         justifyContent={["flex-end" ]} // Center horizontally on mobile, align to end on larger screens
//         flexDirection={{ xs: "column", md: "row" }} // Stack vertically on mobile, align in a row on larger screens
//         marginRight={{ xs: 0, md: "1rem" }}
//         height="100%"
//       >
//         <Menu>
//           <MenuButton
//           bg="#E19898"
//           // bg={"green"}
//             // as={Button}
//             size="sm"
//             cursor="pointer"
//             paddingRight="2rem"
//             // background="white"
//             // _hover="white"
//             rightIcon={<ChevronDownIcon height={8} width={8} boxShadow="white" />}
//           >
//             <Avatar
//               border="4px solid white"
//               bg="black"
//               borderRadius="50%"
//               src="Avatarimage.jpg"
//               cursor="pointer"
//             />
//           </MenuButton>
//           <MenuList>
//             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             <MenuItem onClick={handleForgetPassword}>Forget Password</MenuItem>
//           </MenuList>
//         </Menu>
//       </Box>
//     </Box>
//       <Box
//         p={"0.5rem"}
//         bg={"#A2678A"}
//         boxShadow="0 14px 60px rgba(0,10, 10, 0.1)"
//       >
//         <Flex
//           direction={{ base: "row", md: "row" }}
//           justifyContent="space-between"
//           paddingX="20px"
//           paddingY="4"
//         >
//           <Link to="/">
//             <Box fontSize={["1.5rem"]}>Dashboard</Box>
//           </Link>
//           <Menu>
//             <MenuButton
//               as={Box}
//               cursor="pointer" // Ensure cursor: pointer is applied
//               onMouseOver={handleMenuHover}
//               fontSize={["1.5rem"]}
//             >
//               User Actions
//               <ChevronDownIcon height={8} width={8} boxShadow={"white"} />
//             </MenuButton>
//             {isOpen && ( // Check if isOpen is true before rendering MenuList
//               <MenuList>
//                 <MenuItem as={RouterLink} to="/registeration">
//                   Registration
//                 </MenuItem>
//                 <MenuItem as={RouterLink} to="/pendingregisteration">
//                   Pending Registration
//                 </MenuItem>
//                 <MenuItem as={RouterLink} to="/cancelregisteration">
//                   Cancel Registration
//                 </MenuItem>
//                 <MenuItem as={RouterLink} to="/package">
//                   Package
//                 </MenuItem>
//               </MenuList>
//             )}
//           </Menu>

//           <Link to="/blockusersss">
//             <Box fontSize={["1.5rem"]}>Deactivate User</Box>
//           </Link>

//           <Link to="/qccheck">
//             <Box fontSize={["1.5rem"]}>QC Report</Box>
//           </Link>

//           <Link to="/recovery">
//             <Box fontSize={["1.5rem"]}>Recovery</Box>
//           </Link>

//           <Link to="/employees">
//             <Box fontSize={["1.5rem"]}>Employee</Box>
//           </Link>

//           <Link to="/systemusers">
//             <Box fontSize={["1.5rem"]}>System Users</Box>
//           </Link>

//           {/* <Box
//             display="flex"
//             flexDirection={{ xs: "row", md: "column" }}
//             alignItems="center"
//             textAlign="center"
//             marginRight={{ xs: 0, md: "1rem" }}
//           >
//             <Menu>
//               <Box
//                 display={"flex"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//               >
//                 <Avatar
//                   bg={"black"}
//                   borderRadius="50%"
//                   src="Avatarimage.jpg"
//                   cursor="pointer"
//                 />
//                 <MenuButton
//                   as={Button}
//                   size="sm"
//                   width="0.5rem"
//                   height={"0rem"}
//                   cursor="pointer"
//                   paddingRight={"2rem"}
//                   background={"white"}
//                   _hover={"white"}
//                   rightIcon={
//                     <ChevronDownIcon height={8} width={8} boxShadow={"white"} />
//                   }
//                 />
//               </Box>
//               <MenuList>
//                 <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                 <MenuItem onClick={handleForgetPassword}>
//                   Forget Password
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </Box> */}
//         </Flex>

//         <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Forget Password</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <form onSubmit={handleForgetPasswordSubmit}>
//                 <Box mb={4}>
//                   <label htmlFor="newPassword">New Password:</label>
//                   <input
//                     type="password"
//                     ref={newpass}
//                     // onChange={(e) => setNewPassword(e.target.value)}
//                   />
//                 </Box>
//                 <Box mb={4}>
//                   <label htmlFor="confirmPassword">Confirm Password:</label>
//                   <input
//                     type="password"
//                     ref={confirmpass}
//                     // onChange={(e) => setConfirmPassword(e.target.value)}
//                   />
//                 </Box>
//                 <Button type="submit">Submit</Button>
//                 {errorMessage && <Box color="red">{errorMessage}</Box>}
//                 {successMessage && <Box color="green">{successMessage}</Box>}
//               </form>
//             </ModalBody>
//             <ModalFooter>
//               {/* Additional footer content if needed */}
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </Box>
//     </>
//   );
// }

// export default Navbar;

// 2nd attemt

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const role = localStorage.getItem("role");

  const handleMenuHover = () => setIsOpen(!isOpen);
  const toast = useToast();

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle isOpen state
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const confirmpass = useRef(null);
  const newpass = useRef(null);

  const handleForgetPassword = () => {
    setShowModal(true);
  };

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPasswordValue = newpass.current.value;
    const confirmPasswordValue = confirmpass.current.value;

    if (newPasswordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("/api/user/changePassword", {
        newPassword: newPasswordValue,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage("");
      console.log(response, "response");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error changing password");
    }
  };

  const handleForgetPasswordSubmit = async (e) => {
    e.preventDefault();
    const newPasswordValue = newpass.current.value;
    const confirmPasswordValue = confirmpass.current.value;

    if (newPasswordValue !== confirmPasswordValue) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/auth/adminforgetpassword",
        {
          newPassword: newPasswordValue,
          confirmPassword: confirmPasswordValue,
          userEmail: user.email,
        }
      );

      console.log(response, "response");

      if (role === "admin") {
        Navigate("/login");
      }

      toast({
        title: "Password changed successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Error changing password");
      toast({
        title: "Error changing password",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    handleForgetPasswordSubmit();
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 999 }}>
        {isMobileView ? (
          <Flex
            align="center"
            justify="space-between"
            p="1rem"
            bg="#E19898"
            boxShadow="md"
            height={"100%"}
          >
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="#E19898"
                  size="sm"
                  cursor="pointer"
                  paddingRight="2rem"
                  rightIcon={<ChevronDownIcon height={8} width={8} />}
                >
                  <Avatar
                    border="4px solid white"
                    bg="black"
                    borderRadius="50%"
                    src="Avatarimage.jpg"
                    cursor="pointer"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem onClick={handleForgetPassword}>
                    Forget Password
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box height={"100%"}>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="#E19898"
                  size="sm"
                  cursor="pointer"
                  borderRadius={"30%"}
                >
                  <HamburgerIcon height={6} width={6} />
                </MenuButton>
                <MenuList height={"300%"}>
                  ``
                  <MenuItem as={RouterLink} to="/">
                    Dashboard
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/registeration">
                    Registration
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/pendingregisteration">
                    Pending Registration
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/qcreport">
                    QC Report
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/recovery">
                    Recovery
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/employees">
                    Employee
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        ) : (
          <Box width="100%" height="5rem" bg="#E19898">
            <Box
              padding={"0.7rem"}
              display="flex"
              alignItems="center"
              textAlign="center"
              justifyContent="flex-end"
              flexDirection="row"
              marginRight={{ xs: 0, md: "1rem" }}
              height="100%"
            >
              <Menu>
                <MenuButton
                  bg="#E19898"
                  size="sm"
                  cursor="pointer"
                  paddingRight="2rem"
                  rightIcon={<ChevronDownIcon height={8} width={8} />}
                >
                  <Avatar
                    border="4px solid white"
                    bg="black"
                    borderRadius="50%"
                    src="Avatarimage.jpg"
                    cursor="pointer"
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem onClick={handleForgetPassword}>
                    Forget Password
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        )}

        {!isMobileView && (
          <Box
            p="0.5rem"
            bg="#A2678A"
            boxShadow="0 14px 60px rgba(0,10, 10, 0.1)"
          >
            <Flex
              direction={{ base: "row", md: "row" }}
              justifyContent="space-between"
              paddingX="20px"
              paddingY="4"
            >
              <Link to="/">
                <Box fontSize={["1.5rem"]}>Dashboard</Box>
              </Link>
           

              <Menu isOpen={isOpen} onOpen={toggleMenu} onClose={toggleMenu}>
                <MenuButton as={Box} cursor="pointer" fontSize={["1.5rem"]}>
                  User Actions
                  <ChevronDownIcon height={8} width={8} />
                </MenuButton>
                <MenuList>
                  <MenuItem as={RouterLink} to="/registeration">
                    Registration
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/pendingregisteration">
                    Pending Registration
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/cancelregisteration">
                    Cancel Registration
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/addpackage">
                    Package
                  </MenuItem>
                </MenuList>
              </Menu>
              <Link to="/blockusersss">
                <Box fontSize={["1.5rem"]}>Deactivate User</Box>
              </Link>

              <Link to="/qcreport">
                <Box fontSize={["1.5rem"]}>QC Report</Box>
              </Link>

              <Link to="/recovery">
                <Box fontSize={["1.5rem"]}>Recovery</Box>
              </Link>

              <Link to="/employees">
                <Box fontSize={["1.5rem"]}>Employee</Box>
              </Link>

              <Link to="/">
                <Box fontSize={["1.5rem"]}>System Users</Box>
              </Link>
            </Flex>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Forget Password</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleForgetPasswordSubmit}>
                    <Box mb={4}>
                      <label htmlFor="newPassword">New Password:</label>
                      <input type="password" ref={newpass} />
                    </Box>
                    <Box mb={4}>
                      <label htmlFor="confirmPassword">Confirm Password:</label>
                      <input type="password" ref={confirmpass} />
                    </Box>
                    <Button type="submit">Submit</Button>
                    {errorMessage && <Box color="red">{errorMessage}</Box>}
                    {successMessage && (
                      <Box color="green">{successMessage}</Box>
                    )}
                  </form>
                </ModalBody>
                <ModalFooter />
              </ModalContent>
            </Modal>
          </Box>
        )}
      </div>
    </>
  );
}

export default Navbar;
