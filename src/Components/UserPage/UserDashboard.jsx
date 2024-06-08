import { Box, Flex, Center } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card, Icon, Text, useToast } from "@chakra-ui/react";

import TotalCumstmer from "../../../public/totalCust.svg";
import TodaysFollowup from "../../../public/todays.svg";
import AssignedLeads from "../../../public/assigned.svg";
import Missed from "../../../public/missed.svg";
import Transfer from "../../../public/transfer.svg";
import nextDay from "../../../public/nextDay.svg";
import filter from "../../../public/filter.svg";
import upcomingImage from "../../../public/upcoming.svg";
import lostLeadsIcon from "../../../public/lostLeads.svg";
import { FaUser, FaSpinner , FaUserCheck , FaUserTimes , FaUserPlus , FaSave, FaPaperPlane, FaCalendarAlt, FaListUl } from 'react-icons/fa'; // You can import a different user icon from another icon library

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
        `https://greentenbe-production.up.railway.app/api/user/getallcancel`
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
        `https://greentenbe-production.up.railway.app/api/user/getallregistered`
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
        "https://greentenbe-production.up.railway.app/api/user/getuserbyid",
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
        `https://greentenbe-production.up.railway.app/api/user/getallactive`
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
        `https://greentenbe-production.up.railway.app/api/user/getallpending`
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
        `https://greentenbe-production.up.railway.app/api/user/gettodaysregisterations`
      );
      console.log(response, "todays");
    } catch (error) {
      console.error(error);
    }
  };

  const totlalFrezzUser = async () => {
    try {
      const response = await axios.get(
        `https://greentenbe-production.up.railway.app/api/user/getallfreez`
      );

      console.log(response, "frezz");
      setFrezzUsers(response.data.users.length);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>


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
              bg="linear-gradient(to right, #288cba,  #248f24, #85b185 , #00ffcc)"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
             <Icon as={FaListUl} boxSize={6} />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
              >
                Total Question
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
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
              bg="linear-gradient(to right, #095375,  #d2c143, #882222 , #9c1cd3)"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
          <Icon as={FaSave} boxSize={6} />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
              >
                Saved Question
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
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
              bg="linear-gradient(to left,  #e6e6ff,  #3333ff,  #49499c , #ff80ff)"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
        <Icon as={FaPaperPlane} boxSize={6} />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
              >
                Submit Question
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
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
              bg="linear-gradient(to right, #ffcccc,    #ff0000, #800000 )"
              borderRadius="12px"
              boxShadow="md"
              p="2"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              gap="20px"
            >
             <Icon as={FaCalendarAlt} boxSize={6} />
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
              >
                End Date
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "1.2rem" }}
                fontWeight="bold"
                color={"white"}
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
