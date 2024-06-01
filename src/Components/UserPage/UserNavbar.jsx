import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  Text,
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

function UserNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuHover = () => setIsOpen(!isOpen);
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen); // Toggle isOpen state
  };
  const toast = useToast();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/userlogin";
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
        "https://zemixbe.onrender.com/api/user/forgetpassword",
        {
          newPassword: newPasswordValue,
          confirmPassword: confirmPasswordValue,
          userEmail: user.email,
        }
      );

      console.log(response, "response");

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
            bg="#183D3D"
            boxShadow="md"
            height={"100%"}
          >
            <Box>
              <Menu>
                <MenuButton
                  // as={Button}
                  bg="#183D3D"
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
                  {/* <MenuItem onClick={handleForgetPassword}>
                  Forget Password
                </MenuItem> */}
                </MenuList>
              </Menu>
            </Box>
            <Box height={"100%"}>
              <Menu>
                <MenuButton
                  as={Button}
                  bg="white"
                  size="sm"
                  cursor="pointer"
                  borderRadius={"30%"}
                >
                  <HamburgerIcon height={6} width={6} />
                </MenuButton>
                <MenuList height={"300%"}>
                  ``
                  <MenuItem as={Link} to="/">
                    Dashboard
                  </MenuItem>
                  <MenuItem as={Link} to="/workload">
                    Current Work Load
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    All Forms
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    Saved Form
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/">
                    {" "}
                    Submit Form
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        ) : (
          <Box width="100%" height="5rem" bg="#183D3D">
            <Box
              display="flex"
              alignItems="center"
              textAlign="center"
              justifyContent="space-between"
              flexDirection="row"
              marginRight={{ xs: 0, md: "1rem" }}
              height="100%"
            >
              <Box
                paddingX="30px"
                display={"flex"}
                justifyContent={"flex-start"}
                fontSize={["3rem"]}
                color={"white"}
              >
                Cropton Services
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    bg="#183D3D"
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
                    {/* <MenuItem onClick={handleForgetPassword}>
                    Forget Password
                  </MenuItem> */}
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Box>
        )}

        {!isMobileView && (
          <Box p="0.5rem" bg="#5C8374">
            <Flex
              direction={{ base: "row", md: "row" }}
              paddingX="30px"
              paddingY="10px"
            >
              <Link to="/">
                <Box paddingX="30px" fontSize={["1.5rem"]}>
                  Dashboard
                </Box>
              </Link>

              {/* <Menu paddingX="30px">
              <MenuButton
                paddingX="30px"
                as={Box}
                cursor="pointer"
                onMouseOver={handleMenuHover}
                fontSize={["1.5rem"]}
              >
                Work Load
                <ChevronDownIcon height={8} width={8} />
              </MenuButton>
              {isOpen && (
                <MenuList>
                  <MenuItem as={Link} to="/workload">
                    Current Work Load
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    All Forms
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    Saved Forms
                  </MenuItem>
                  <MenuItem>Submit Forms</MenuItem>
                </MenuList>
              )}
            </Menu> */}

              <Menu isOpen={isOpen} onOpen={toggleMenu} onClose={toggleMenu}>
                <MenuButton as={Box} cursor="pointer" fontSize={["1.5rem"]}>
                  Work Load
                  <ChevronDownIcon height={8} width={8} />
                </MenuButton>
                <MenuList>
                  <MenuItem as={Link} to="/workload">
                    Current Work Load
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    All Forms
                  </MenuItem>
                  <MenuItem as={Link} to="/">
                    Saved Forms
                  </MenuItem>
                  <MenuItem>Submit Forms</MenuItem>
                </MenuList>
              </Menu>
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

export default UserNavbar;
