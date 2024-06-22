// Testing full part
// import React, { useEffect, useState, useRef } from "react";
// import { useToast, Box, Flex, Text, Input, Button } from "@chakra-ui/react";
// import { BiRefresh } from "react-icons/bi";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./contentvalidation.css"

// function ContentValidationfrom() {
//   const toast = useToast();
//   const navigate = useNavigate();

//   const userId = localStorage.getItem("userId");

//   const [apidata, setapidata] = useState();
//   const [randomIndex, setRandomIndex] = useState(null); // State to store the random index

//   const name = useRef();
//   const mobile = useRef();
//   const address = useRef();
//   const annualRevenue = useRef();
//   const jobFunctional = useRef();
//   const pinCode = useRef();
//   const refreshAssignment = async () => {
//     try {
//       await getdatafrom(); // Fetch new assignment data
//       setRandomIndex(Math.floor(Math.random() * 510)); // Set new random index
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getdatafrom = async () => {
//     try {
//       const response = await axios.get(
//         "https://greentenbe-production.up.railway.app/api/assignment/getallassignments"
//         // {
//         //   userId: userId,
//         // }
//       );
//       console.log(response , "res")
//       setapidata(response?.data?.assignments);
//       setRandomIndex(Math.floor(Math.random() * 520));
//       console.log(randomIndex , "randomIndex")
//     } catch (error) {
//       toast({
//         title: "Error ",
//         description: "Error",
//         status: "error",
//         duration: 3000,
//         position: "top",
//         isClosable: true,
//       });
//       console.log(error.message);
//     }
//   };

//   const submitForm = async () => {
//     try {
//       const response = await axios.post(
//         "https://greentenbe-production.up.railway.app/api/assignment/addassignment",
//         {
//           userId: userId,
//         }
//       );
//       console.log(response, "mkninmiopn");
//       if (response.status === 201) {
//         toast({
//           title: "Success",
//           description: "Form submitted successfully",
//           status: "success",
//           duration: 3000,
//           position: "top",
//           isClosable: true,
//         });
//         refreshAssignment();
//         navigate("/");
//         // Refresh the assignment data after submission
//       }
//     } catch (error) {
//       toast({
//         title: "Error ",
//         description: `error: ${error.message}`,
//         status: "error",
//         duration: 10000,
//         position: "top",
//         isClosable: true,
//       });
//       console.log(error.message);
//     }

 
//   };

//   useEffect(() => {
//     getdatafrom();
//   }, []);

//   return (
//     <>
   
//       <Flex
//         mt={["2rem", "0rem"]}
//         justifyContent={"center"}
//         gap={"2rem"}
//         flexDirection={["column", "row"]}
//         className="content"
//       >
//         <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="600px">
//           <Flex direction="column" 
//              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//           >
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.name}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.phone}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.address}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.annualRevenue}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.jobFunctional}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               {apidata?.[randomIndex]?.pinCode}
//             </Text>
//           </Flex>
//         </Box>

//         <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="1000px">
//           <Flex 
//              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//           width={["330px", "400px"]} direction="column">
//             <Text>Name:</Text>
//             <Input
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={name} />
//             <Text>Mobile:</Text>
//             <Input 
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={mobile} />
//             <Text>Address:</Text>
//             <Input
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={address} />
//             <Text>Annual Revenue:</Text>
//             <Input 
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={annualRevenue} />
//             <Text>Job Functional:</Text>
//             <Input
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={jobFunctional} />
//             <Text>Pin Code:</Text>
//             <Input
//                style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic' , fontWeight:"bold" }}
//             ref={pinCode} />

//             <Button
//               mt={"1rem"}
//               mb={"1rem"}
//               onClick={submitForm}
//               color={"white"}
//               bg="green" // Change to the desired color scheme
//             >
//               Submit
//             </Button>

          
//           </Flex>
//         </Box>
//       </Flex>
//     </>
//   );
// }

// export default ContentValidationfrom;


// testing with chatbot

import React, { useEffect, useState, useRef } from "react";
import { useToast, Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import { BiRefresh } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import "./contentvalidation.css";
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

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our services",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
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
        { value: "React", label: "React", trigger: "React" },
        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },
    {
      id: "React",
      message: "Thanks for telling your React issue",
      end: true,
    },
    {
      id: "Angular",
      message: "Thanks for telling your Angular issue",
      end: true,
    },
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
      setRandomIndex(Math.floor(Math.random() * 510)); // Set new random index
    } catch (error) {
      console.log(error);
    }
  };

  const getdatafrom = async () => {
    try {
      const response = await axios.get(
        "https://greentenbe-production.up.railway.app/api/assignment/getallassignments"
      );
      console.log(response, "res");
      setapidata(response?.data?.assignments);
      setRandomIndex(Math.floor(Math.random() * 520));
      console.log(randomIndex, "randomIndex");
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
        "https://greentenbe-production.up.railway.app/api/assignment/addassignment",
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
  };

  useEffect(() => {
    getdatafrom();
  }, []);

  return (
    <>
      <Flex
        mt={["2rem", "0rem"]}
        justifyContent={"center"}
        gap={"2rem"}
        flexDirection={["column", "row"]}
        className="content"
      >
        <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="600px">
          <Flex direction="column" style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.name}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.phone}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.address}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.annualRevenue}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.jobFunctional}
            </Text>
            <Text fontSize={["1.5rem", "2.3rem"]}>
              {apidata?.[randomIndex]?.pinCode}
            </Text>
          </Flex>
        </Box>

        <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="1000px">
          <Flex
            style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
            width={["330px", "400px"]} direction="column">
            <Text>Name:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={name} />
            <Text>Mobile:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={mobile} />
            <Text>Address:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={address} />
            <Text>Annual Revenue:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={annualRevenue} />
            <Text>Job Functional:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={jobFunctional} />
            <Text>Pin Code:</Text>
            <Input
              style={{ fontFamily: 'BILLY ARGEL FONT', fontStyle: 'italic', fontWeight: "bold" }}
              ref={pinCode} />

            <Button
              mt={"1rem"}
              mb={"1rem"}
              onClick={submitForm}
              color={"white"}
              bg="green" // Change to the desired color scheme
            >
              Submit
            </Button>
          </Flex>
        </Box>
      </Flex>
      <ChatBotComponent />
    </>
  );
}

export default ContentValidationfrom;


