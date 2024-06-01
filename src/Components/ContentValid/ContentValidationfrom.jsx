import React, { useEffect, useState, useRef } from "react";
import { useToast, Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ContentValidationfrom() {
  const toast = useToast();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const [apidata, setapidata] = useState();
  const [randomIndex, setRandomIndex] = useState(null); // State to store the random index

  const name = useRef();
  const mobile = useRef();
  const address = useRef();
  const annualRevenue = useRef();
  const jobFunctional = useRef();
  const pinCode = useRef();
  const refreshAssignment = async () => {
    try {
      await getdatafrom(); // Fetch new assignment data
      setRandomIndex(Math.floor(Math.random() * 480)); // Set new random index
    } catch (error) {
      console.log(error);
    }
  };

  const getdatafrom = async () => {
    try {
      const response = await axios.get(
        "https://zemixbe.onrender.com/api/assignment/getallassignments"
        // {
        //   userId: userId,
        // }
      );
      console.log(response , "res")
      setapidata(response?.data?.assignments);
      setRandomIndex(Math.floor(Math.random() * 480));
      console.log(randomIndex , "randomIndex")
    } catch (error) {
      toast({
        title: "Error ",
        description: "Error",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(error.message);
    }
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/assignment/addassignment",
        {
          userId: userId,
        }
      );
      console.log(response, "mkninmiopn");
      if (response.status === 201) {
        toast({
          title: "Success",
          description: "Form submitted successfully",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        refreshAssignment();
        navigate("/");
        // Refresh the assignment data after submission
      }
    } catch (error) {
      toast({
        title: "Error ",
        description: `error: ${error.message}`,
        status: "error",
        duration: 10000,
        position: "top",
        isClosable: true,
      });
      console.log(error.message);
    }

    //navigate("/");
    //refreshAssignment(); // Refresh the assignment data after submission
  };

  useEffect(() => {
    getdatafrom();
  }, []);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Whisper&display=swap')
      </style>
      <Flex
        mt={["2rem", "0rem"]}
        justifyContent={"center"}
        gap={"2rem"}
        flexDirection={["column", "row"]}
      >
        <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="600px">
          <Flex direction="column" fontFamily="'Dancing Script', cursive">
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Name: {apidata?.[randomIndex]?.name}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Mobile: {apidata?.[randomIndex]?.phone}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Address: {apidata?.[randomIndex]?.address}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Annual Revenue: {apidata?.[randomIndex]?.annualRevenue}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Job Functional: {apidata?.[randomIndex]?.jobFunctional}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              Pin Code: {apidata?.[randomIndex]?.pinCode}
            </Text>
          </Flex>
        </Box>

        <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="1000px">
          <Flex width={["330px", "400px"]} direction="column">
            <Text>Name:</Text>
            <Input ref={name} />
            <Text>Mobile:</Text>
            <Input ref={mobile} />
            <Text>Address:</Text>
            <Input ref={address} />
            <Text>Annual Revenue:</Text>
            <Input ref={annualRevenue} />
            <Text>Job Functional:</Text>
            <Input ref={jobFunctional} />
            <Text>Pin Code:</Text>
            <Input ref={pinCode} />

            {/* <Button
          mt={"1rem"}
          mb={"1rem"}
          onClick={submitForm}>Submit</Button>

      <Button onClick={refreshAssignment}>Refresh</Button> */}
            <Button
              mt={"1rem"}
              mb={"1rem"}
              onClick={submitForm}
              color={"white"}
              bg="green" // Change to the desired color scheme
            >
              Submit
            </Button>

            {/* <Button
              onClick={refreshAssignment}
              bg={"#ff4d94"}
              leftIcon={<BiRefresh />}
            >
              {" "}

              Reload the Data
            </Button> */}
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default ContentValidationfrom;
