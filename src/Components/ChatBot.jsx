// import React from "react";
// import ChatBots from "react-simple-chatbot";
// import { Segment } from "semantic-ui-react";

// function ChatBot() {
//   const steps = [
//     {
//       id: "Greet",
//       message: "Hello,Welcome to our services",
//       trigger: "Ask Name",
//     },
//     {
//       id: "Ask Name",
//       message: "plz enter your name",
//       trigger: "waiting1",
//     },
//     {
//       id: "waiting1",
//       user: true,
//       trigger: "Name",
//     },
//     {
//       id: "Name",
//       message: "Hi {previousValue} , select your issue",
//       trigger: "issues",
//     },
//     {
//       id: "issues",
//       options: [
//         { value: "React", label: "React", trigger: "React" },
//         { value: "Angular", label: "Angular", trigger: "Angular" },
//       ],
//     },

//     {
//       id: "React",
//       message: "Thanks for telling your  react issue",
//       end: true,
//     },
//     {
//       id: "Angular",
//       message: "Thanks for telling your angular issue",
//       end: true,
//     },
//   ];

//   return (
//     <>
//       <Segment floated="right">
//         <ChatBots steps={steps} />
//       </Segment>
//     </>
//   );
// }

// export default ChatBot;


import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import 'semantic-ui-css/semantic.min.css';
import Chatbot from "../assets/chatbot.webp";
// Define the blinking keyframes for the logo
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
      src={Chatbot}// Example logo
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

const App = () => {
  return (
    <div>
      {/* <h1>Welcome to the Chatbot Service</h1> */}
      <ChatBotComponent />
    </div>
  );
};

export default App;


