import { Box, Flex, Center } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
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

import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import "semantic-ui-css/semantic.min.css";

// import ChatbotImage from "../assets/chatbot.webp"; // Replace with the correct path to your image
// import image from "../assets/chatbot.webp";
// Define the blinking keyframes for the logo
import chatbotimage from "../../assets/chatbot.webp"
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

// Create a styled component for the blinking logo
const BlinkingImage = styled.img`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  animation: ${blink} 1s step-end infinite;
  border-radius: 50%; /* Adjust the value as needed */
 box-shadow: 0 8px 16px rgba(167, 9, 9, 0.3); /* Increased blur radius and spread */
`;


const BlinkingLogo = ({ onClick }) => {
  return (
    <BlinkingImage
      src={chatbotimage} // Example logo
      alt="Chatbot"
      onClick={onClick}
    />
  );
};

const ChatBotComponent = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const chatBotRef = useRef(null);

  const handleClickOutside = (event) => {
    if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
      setShowChatBot(false);
    }
  };

  useEffect(() => {
    if (showChatBot) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showChatBot]);

  // const steps = [
  //   {
  //     id: "Greet",
  //     message: "Hello, Welcome to our services",
  //     trigger: "Ask Name",
  //   },
  //   {
  //     id: "Ask Name",
  //     message: "Please enter your name",
  //     trigger: "waiting1",
  //   },
  //   {
  //     id: "waiting1",
  //     user: true,
  //     trigger: "Name",
  //   },
  //   {
  //     id: "Name",
  //     message: "Hi {previousValue}, select your issue",
  //     trigger: "issues",
  //   },
  //   {
  //     id: "issues",
  //     options: [
  //       { value: "React", label: "React", trigger: "React" },
  //       { value: "Angular", label: "Angular", trigger: "Angular" },
  //     ],
  //   },
  //   {
  //     id: "React",
  //     message: "Thanks for telling your React issue",
  //     end: true,
  //   },
  //   {
  //     id: "Angular",
  //     message: "Thanks for telling your Angular issue",
  //     end: true,
  //   },
  // ];
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to Greenten Services",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your Name",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "qc", label: "QC-Report", trigger: "qc" },
        { value: "assignment", label: "Assignment", trigger: "assignment" },
        { value: "login", label: "Login", trigger: "login" },
      ],
    },
    {
      id: "qc",
      options: [
        { value: "400_completed", label: "510 Form Completed", trigger: "400_completed" },
        { value: "400_not_completed", label: "510 Form pending", trigger: "400_not_completed" },
      ],
    },
    {
      id: "400_completed",
      message: "Your QC report will be generated after your end-date. Till then, please wait for the result. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    },
    {
      id: "400_not_completed",
      message: "Please complete the 510 Assignment. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    },
    {
      id: "assignment",
      options: [
    
        { value: "assignment_completed", label: "Assignment Completed", trigger: "assignment_completed" },
        { value: "question_in_assignment", label: "Form in showing After Completion of Assignment", trigger: "question_in_assignment" },
      ],
    },
    
    {
      id: "assignment_completed",
      message: "Wait for the QC report which will be displayed after your end-date in Your dashboard. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    },
    {
      id: "question_in_assignment",
      message: "Ignore Form due to server problem it shows The assignment is over. You have to wait for the QC report after 5 days. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    },
    {
      id: "login",
      options: [
        { value: "login_problem", label: "Login Problem", trigger: "login_problem" },
        { value: "qc_not_showing", label: "After Login QC is Not Showing", trigger: "qc_not_showing" },
      ],
    },
    {
      id: "login_problem",
      message: "Make sure to copy-paste your user ID and password properly. Don't copy any extra spaces before or after the credentials, as this can cause login issues. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    },
    {
      id: "qc_not_showing",
      message: "Make sure your 5 days are completed. After 5 days, log out and log in again; your QC will be there. For more queries, mail to greenhelplineservice19@gmail.com.",
      end: true,
    }
  ];
  

  return (
    <>
      {showChatBot && (
        <Segment ref={chatBotRef} style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: 1000 }}>
          <ChatBot steps={steps} />
        </Segment>
      )}
      <BlinkingLogo onClick={() => setShowChatBot(!showChatBot)} />
    </>
  );
};





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
        <Box width="100%" marginY={{ base: "50px", md: "30px" }} align="center">
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
      <ChatBotComponent />
    </>
  );
}

export default UserDashboard;
