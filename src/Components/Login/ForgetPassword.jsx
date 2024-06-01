import React, { useState } from "react";
import axios from "axios"; // Don't forget to import axios
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match!",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/auth/adminforgetpassword",
        {
          newPassword: password,
          confirmPassword: confirmPassword,
          userEmail: email,
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
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error changing password",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box p={4} maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="text">Email</FormLabel>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb={3}>
          <FormLabel htmlFor="password">New Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl isRequired mb={6}>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <InputGroup>
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button type="submit" colorScheme="blue" width="full">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ForgetPassword;
