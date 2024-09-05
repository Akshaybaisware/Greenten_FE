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
        { value: "salary", label: "Salary", trigger: "salary" },
        { value: "cancel_work", label: "Cancel Work", trigger: "cancel_work" },
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
      trigger: "user_input",
    },
    {
      id: "400_not_completed",
      message: "Please complete the 510 Assignment. For more queries, mail to greenhelplineservice19@gmail.com.",
      trigger: "user_input",
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
      trigger: "user_input",
    },
    {
      id: "question_in_assignment",
      message: "Ignore Form due to server problem it shows The assignment is over. You have to wait for the QC report after 5 days. For more queries, mail to greenhelplineservice19@gmail.com.",
      trigger: "user_input",
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
      trigger: "user_input",
    },
    {
      id: "qc_not_showing",
      message: "Make sure your 5 days are completed. After 5 days, log out and log in again; your QC will be there. For more queries, mail to greenhelplineservice19@gmail.com.",
      trigger: "user_input",
    },
    {
      id: "salary",
      message: "You will receive your salary via NEFT/GPay/PhonePe after 5 days if your correct percentage is more than 80%. For more queries, mail to greenhelplineservice19@gmail.com.",
      trigger: "user_input",
    },
    {
      id: "cancel_work",
      message: "To cancel your work, please mail to greenhelplineservice19@gmail.com. You cannot cancel from here.",
      trigger: "user_input",
    },
    {
      id: "user_input",
      user: true,
      trigger: "thank_you",
    },
    {
      id: "thank_you",
      message: "Thank you for connecting with us. We will look into your queries. For more information, contact greenhelplineservice19@gmail.com.",
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
      // setRandomIndex(Math.floor(Math.random() * 520));
      setRandomIndex(Math.floor(Math.random() * 1));
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
    <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Whisper&display=swap')
      </style>

      <Flex
        mt={["3rem", "5rem"]}
        justifyContent={"center"}
        gap={"2rem"}
        flexDirection={["column", "row"]}
        className="content"
      >
        <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="600px">
        <Flex direction="column" fontFamily="'Dancing Script', cursive">
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
             fontFamily="'Dancing Script', cursive" // Set the input font family
            width={["330px", "400px"]} direction="column">
            <Text>Name:</Text>
            <Input
              fontFamily="'Dancing Script', cursive" // Set the input font family
              ref={name} />
            <Text>Mobile:</Text>
            <Input
             fontFamily="'Dancing Script', cursive" // Set the input font family
              ref={mobile} />
            <Text>Address:</Text>
            <Input
              fontFamily="'Dancing Script', cursive" // Set the input font family
              ref={address} />
            <Text>Annual Revenue:</Text>
            <Input
             fontFamily="'Dancing Script', cursive" // Set the input font family
              ref={annualRevenue} />
            <Text>Job Functional:</Text>
            <Input
             fontFamily="'Dancing Script', cursive" // Set the input font family
              ref={jobFunctional} />
            <Text>Pin Code:</Text>
            <Input
              fontFamily="'Dancing Script', cursive" // Set the input font family
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


