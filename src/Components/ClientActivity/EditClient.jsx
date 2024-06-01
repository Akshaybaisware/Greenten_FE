import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Center,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  Button,
} from "@chakra-ui/react";
import { color } from "framer-motion";

const EditClientComponent = () => {
  const location = useLocation();
  const toast = useToast();
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    otp: "",
    name: "",
    address: "",
    email: "",
    mobileNo: "",
    startDate: "",
    endDate: "",
    caller: "",
  });
  console.log(userData, "userData");

  // Extracting data from location.state if available
  const rowData = location.state?.data;
  const navigate = useNavigate();

  // Function to update state when rowData is available
  useEffect(() => {
    if (rowData) {
      setUserData(rowData);
    }
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "handle change");
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract user ID from the URL parameter
    // console.log(rawData, "asdasds");
    console.log(userData, "userdata");
    const userId = userData._id;

    // Send PUT request to update user details
    try {
      const response = await fetch(
        `https://zemixbe.onrender.com/api/user/edituser/${userId}`,
        // `http://localhost:5000/api/user/edituser/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      console.log(response, "responsee");
      if (response.ok) {
        // Handle success
        toast({
          title: "User details updated successfully!",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        navigate("/registeration");

        console.log("User details updated successfully!");
      } else {
        // Handle error
        toast({
          title: "Failed to update user details",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        console.error("Failed to update user details");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Box mt={"3rem"}>
        <Center fontWeight={800} color={"red"}>
          Client Details
        </Center>
        <Box p={"1rem"} maxW="600px" mx="auto" mt="4">
          <form onSubmit={handleSubmit}>
            <FormControl mb="4">
              <FormLabel>User Name</FormLabel>
              <Input
                name="userName"
                value={userData.email}
                onChange={handleChange}
                placeholder="User Name"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Address</FormLabel>
              <Textarea
                name="address"
                value={userData.address}
                onChange={handleChange}
                placeholder="Address"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>Mobile No</FormLabel>
              <Input
                type="tel"
                name="mobileNo"
                value={userData.mobile}
                onChange={handleChange}
                placeholder="Mobile No"
              />
            </FormControl>

            {/* <FormControl mb="4">
            <FormLabel>Start Date</FormLabel>
            <Input

              name="startDate"
              value={userData.startDate}
              onChange={handleChange}
            />
          </FormControl> */}
            <FormControl mb="4">
              <FormLabel>Start Date</FormLabel>
              <Input
                name="startDate"
                type="date"
                value={userData.startDate.slice(0, 10)}
                onChange={(event) => {
                  // Get the input value from the event
                  const inputValue = event.target.value;

                  // Parse the input value as a date
                  const date = new Date(inputValue);

                  // Format the date to 'yyyy-MM-dd' format to remove time
                  const formattedDate = format(date, "yyyy-MM-dd");

                  // Call handleChange with the formatted date
                  handleChange({
                    target: { name: event.target.name, value: formattedDate },
                  });
                }}
              />
            </FormControl>

            <FormControl mb="4">
              <FormLabel>End Date</FormLabel>
              <Input
                name="endDate"
                type="date"
                value={userData.endDate.slice(0, 10)}
                onChange={handleChange}
              />
            </FormControl>

            <Button type="submit" color={"white"} bg={"red"}>
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default EditClientComponent;
