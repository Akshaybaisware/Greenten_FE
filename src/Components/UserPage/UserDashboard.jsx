import { Box, Flex, Center } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card, Text, useToast } from "@chakra-ui/react";

import TotalCumstmer from "../../../public/totalCust.svg";
import TodaysFollowup from "../../../public/todays.svg";
import AssignedLeads from "../../../public/assigned.svg";
import Missed from "../../../public/missed.svg";
import Transfer from "../../../public/transfer.svg";
import nextDay from "../../../public/nextDay.svg";
import filter from "../../../public/filter.svg";
import upcomingImage from "../../../public/upcoming.svg";
import lostLeadsIcon from "../../../public/lostLeads.svg";

function UserDashboard() {
  const [data, setData] = useState(0);
  const [activeUsers, setActive] = useState(0);
  const [registerUsers, setRegisterUsers] = useState(0);
  const [pendingUsers, setPendingUsers] = useState(0);
  const [FrezzUsers, setFrezzUsers] = useState(0);
  const [cancelUsers, setCancelUsers] = useState(0);
  const [todaysRecovery, setTodaysRecovery] = useState(0);
  const [toatalasignment, setTotalAssignment] = useState(0);
  const [submitedassignment, setsubmittedassignment] = useState();
  const [dates, setdates] = useState();
  const toast = useToast();

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    totalragisterations();
    totlalActiveUser();
    totlalPendingUser();
    totlalFrezzUser();
    getallcancel();
    getuserdeeatilsbyid();
  }, []);

  const getallcancel = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/getallcancel`
      );
      console.log(response, "cancel");
      setCancelUsers(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  const totalragisterations = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/getallregistered`
      );
      console.log(response, "registerations");
      setRegisterUsers(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  const getuserdeeatilsbyid = async () => {
    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/user/getuserbyid",
        {
          userId: userId,
        }
      );
      console.log(response, "user details");
      setTotalAssignment(response.data.User.totalAssignmentLimit);
      setsubmittedassignment(response.data.User.submittedAssignmentCount);
      setdates(response?.data?.User?.endDate);
    } catch (error) {
      toast({
        title: "Error",
        description: "Error",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(error.message);
    }
  };

  const totlalActiveUser = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/getallactive`
      );

      console.log(response, "active");
      setActive(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  const totlalPendingUser = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/getallpending`
      );
      console.log(response, "pending");
      setPendingUsers(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  const gettodaysregisterations = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/gettodaysregisterations`
      );
      console.log(response, "todays");
    } catch (error) {
      console.error(error);
    }
  };

  const totlalFrezzUser = async () => {
    try {
      const response = await axios.get(
        `https://zemixbe.onrender.com/api/user/getallfreez`
      );

      console.log(response, "frezz");
      setFrezzUsers(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <Flex
        ml={["2rem"]}
        //  justifyContent={"center"}
        width={"100%"}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          justifyContent={["flex-startr", "space-around"]}
          width={["100%", "50%"]}
          direction={{ md: "column" }}
          // justifyContent="center"
          marginTop="30px"
          align="center"
        >
          <Link to={{ pathname: "/" }}>
            <Card
              as="flex"
              minWidth={["350%", "170%"]}
              maxWidth="170%"
              minHeight="10rem"
              maxHeight="10rem"
              textAlign="center"
              bg="white"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              direction={{ base: "column", md: "row", lg: "row" }}
              justifyContent={{ base: "center", md: "space-around" }}
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Total Number Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {toatalasignment}
              </Text>
            </Card>
          </Link>
        </Flex>
        <Flex
          direction={{ md: "column" }}
          gap="25px"
          justifyContent={["flex-start", "center"]}
          marginTop="30px"
          align="center"
        >
          <Link to={{ pathname: "/" }}>
            <Card
              ml={["-1rem", ""]}
              as="flex"
              minWidth={["700%", "230%"]}
              maxWidth="150%"
              minHeight="10rem"
              maxHeight="10rem"
              textAlign="center"
              bg="#65D088"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              direction={{ base: "column", md: "row", lg: "row" }}
              justifyContent={{ base: "center", md: "space-around" }}
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Saved Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {submitedassignment}
              </Text>
            </Card>
          </Link>
        </Flex>
      </Flex>

      <Flex
        // justifyContent={"space-around"}

        width={"100%"}
        direction={{ base: "column", md: "row" }}
        gap="25px"
      >
        <Flex
          direction={{ md: "column" }}
          gap="25px"
          width={["100%", "50%"]}
          justifyContent={["flex-start", "space-around"]}
          marginTop="30px"
          align="center"
        >
          <Link to={{ pathname: "/" }}>
            <Card
              as="flex"
              minWidth={["550%", "220%"]}
              maxWidth="150%"
              minHeight="10rem"
              maxHeight="10rem"
              textAlign="center"
              bg="#FFBB44"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              direction={{ base: "column", md: "row", lg: "row" }}
              justifyContent={{ base: "center", md: "space-around" }}
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Submit Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {submitedassignment}
              </Text>
            </Card>
          </Link>
        </Flex>
        <Flex
          direction={{ md: "column" }}
          gap="25px"
          justifyContent={["flex-start", "center"]}
          marginTop="30px"
          align="center"
        >
          <Link to={{ pathname: "/" }}>
            <Card
              as="flex"
              minWidth={["700%", "235%"]}
              maxWidth="150%"
              minHeight="10rem"
              maxHeight="10rem"
              textAlign="center"
              bg="#F32F53"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              direction={{ base: "column", md: "row", lg: "row" }}
              justifyContent={{ base: "center", md: "space-around" }}
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                End Date
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {dates?.slice(0, 10)}
              </Text>
            </Card>
          </Link>
        </Flex>
      </Flex> */}

      <Box
        width="100%"
        direction={{ base: "column", md: "column" }}
        justifyContent="center"
      >
        <Box width="100%" marginY={{ base: "30px", md: "30px" }} align="center">
          <Link to={{ pathname: "/" }}>
            <Card
              as="flex"
              minWidth="100%"
              minHeight="10rem"
              textAlign="center"
              bg="white"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Total Number Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {toatalasignment}
              </Text>
            </Card>
          </Link>
        </Box>
        <Box width="100%" marginY={{ base: "30px", md: "30px" }} align="center">
          <Link to={{ pathname: "/" }}>
            <Card
              ml={["0", ""]}
              as="flex"
              minWidth="100%"
              minHeight="10rem"
              textAlign="center"
              bg="#65D088"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Saved Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {submitedassignment}
              </Text>
            </Card>
          </Link>
        </Box>
      </Box>

      <Box
        width="100%"
        direction={{ base: "column", md: "column" }}
        justifyContent="center"
      >
        <Box width="100%" marginY={{ base: "30px", md: "30px" }} align="center">
          <Link to={{ pathname: "/" }}>
            <Card
              as="flex"
              minWidth="100%"
              minHeight="10rem"
              textAlign="center"
              bg="white"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                Submit Form
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {submitedassignment}
              </Text>
            </Card>
          </Link>
        </Box>
        <Box width="100%" marginY={{ base: "30px", md: "30px" }} align="center">
          <Link to={{ pathname: "/" }}>
            <Card
              ml={["0", ""]}
              as="flex"
              minWidth="100%"
              minHeight="10rem"
              textAlign="center"
              bg="#65D088"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
              <img src={TotalCumstmer} alt="Total Customers" />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                End Date
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
              >
                {dates?.slice(0, 10)}
              </Text>
            </Card>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default UserDashboard;
