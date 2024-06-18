// import React, { useEffect, useState, useRef } from "react";
// import { useToast, Box, Flex, Text, Input, Button } from "@chakra-ui/react";
// import { BiRefresh } from "react-icons/bi";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

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
//       setRandomIndex(Math.floor(Math.random() * 400)); // Set new random index
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
//       setRandomIndex(Math.floor(Math.random() * 400));
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

//     //navigate("/");
//     //refreshAssignment(); // Refresh the assignment data after submission
//   };

//   useEffect(() => {
//     getdatafrom();
//   }, []);

//   return (
//     <>
//       <style>
//         @import
//         url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Whisper&display=swap')
//       </style>
//       <Flex
//         mt={["2rem", "0rem"]}
//         justifyContent={"center"}
//         gap={"2rem"}
//         flexDirection={["column", "row"]}
//       >
//         <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="600px">
//           <Flex direction="column" fontFamily="'Dancing Script', cursive">
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Name: {apidata?.[randomIndex]?.name}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Mobile: {apidata?.[randomIndex]?.phone}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Address: {apidata?.[randomIndex]?.address}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Annual Revenue: {apidata?.[randomIndex]?.annualRevenue}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Job Functional: {apidata?.[randomIndex]?.jobFunctional}
//             </Text>
//             <Text fontSize={["1.5rem", "2.3rem"]}>
//               Pin Code: {apidata?.[randomIndex]?.pinCode}
//             </Text>
//           </Flex>
//         </Box>

//         <Box p="4" border="1px solid #ccc" borderRadius="md" maxW="1000px">
//           <Flex width={["330px", "400px"]} direction="column">
//             <Text>Name:</Text>
//             <Input ref={name} />
//             <Text>Mobile:</Text>
//             <Input ref={mobile} />
//             <Text>Address:</Text>
//             <Input ref={address} />
//             <Text>Annual Revenue:</Text>
//             <Input ref={annualRevenue} />
//             <Text>Job Functional:</Text>
//             <Input ref={jobFunctional} />
//             <Text>Pin Code:</Text>
//             <Input ref={pinCode} />

//             {/* <Button
//           mt={"1rem"}
//           mb={"1rem"}
//           onClick={submitForm}>Submit</Button>

//       <Button onClick={refreshAssignment}>Refresh</Button> */}
//             <Button
//               mt={"1rem"}
//               mb={"1rem"}
//               onClick={submitForm}
//               color={"white"}
//               bg="green" // Change to the desired color scheme
//             >
//               Submit
//             </Button>

//             {/* <Button
//               onClick={refreshAssignment}
//               bg={"#ff4d94"}
//               leftIcon={<BiRefresh />}
//             >
//               {" "}

//               Reload the Data
//             </Button> */}
//           </Flex>
//         </Box>
//       </Flex>
//     </>
//   );
// }

// // export default ContentValidationfrom;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ContentValidationForm() {
//   const videoUrl = "https://drive.google.com/file/d/16AbblD1rx_7FMz5szmsGhftzAv33crsg/preview";
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [videoNumber, setVideoNumber] = useState(1); // Initialize videonumber
//   const questionsPerPage = 5; // Number of questions per page
//   const userId = localStorage.getItem("userId"); // Get userId from localStorage
//   async function fetchQuestions() {
//     try {
//       const response = await fetch('http://localhost:5000/api/questions/getquestions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ videonumber: videoNumber, userId: userId }) // Include userId and videonumber
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch questions');
//       }
//       const data = await response.json();
//       // if (data.length === 0) {
//         // No questions fetched, increment videonumber
//         // const reloadPage = window.confirm("Your assignment for this video is complete. Click OK to reload the page.");
//       //   if (reloadPage) {
//       //     window.location.reload();
//       //   }
//       //   setVideoNumber(videoNumber + 1);
//       //   return;
//       // }
//       setQuestions(data.map((question, index) => ({ ...question, index: index }))); // Include index
//       setResponses(new Array(data.length).fill('')); // Initialize responses array
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   }

//   useEffect(() => {

//     fetchQuestions();
//   }, [userId, videoNumber]);

//   const handleResponseChange = (index, value) => {
//     const newResponses = [...responses];
//     newResponses[index] = value;
//     setResponses(newResponses);
//   };

//   const handleSubmit = async (index, questionId) => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/questions/addassignment",
//         {
//           userId: userId,
//           questionId: questionId, // Include the _id of the question
//           videonumber: videoNumber, // Include videonumber if required
//           // Add other necessary data here based on your requirements
//         }
//       );
//       console.log("mkninmiopn");

//       // Remove the submitted question and response
//       const updatedQuestions = questions.filter((question, i) => i !== index);
//       setQuestions(updatedQuestions.map((question, index) => ({ ...question, index: index })));
//       const updatedResponses = responses.filter((response, i) => i !== index);
//       setResponses(updatedResponses);

//       if (indexOfLastQuestion === index) {
//         setCurrentPage(currentPage + 1);
//       }

//       if (updatedQuestions.length === 0) {
//         const reloadPage = window.confirm("Your assignment for this video is complete. Click OK to reload the page.");
//         if (reloadPage) {
//           setVideoNumber(videoNumber + 1)
//           fetchQuestions();
//           window.location.reload();
//         }
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error.message);
//     }
//   };


//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastQuestion = currentPage * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
//         <iframe
//           src={videoUrl}
//           width="800"
//           height="450"
//           allow="autoplay"
//           style={{ border: 'none' }}
//         ></iframe>
//       </div>
//       <div style={{ padding: '20px' }}>
//         {currentQuestions.map((question, index) => (
//           <div key={index} style={{ marginBottom: '20px' }}>
//             <p>{question.question}</p>
//             <input
//               type="text"
//               value={responses[indexOfFirstQuestion + index]}
//               onChange={(e) => handleResponseChange(indexOfFirstQuestion + index, e.target.value)}
//             />
//             <button onClick={() => handleSubmit(question.index, question._id)} >Submit</button>
//           </div>
//         ))}
//         <div style={{ marginTop: '20px' }}>
//           {questions.length > questionsPerPage && (
//             <div>
//               <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//               <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
//               <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastQuestion >= questions.length}>Next</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentValidationForm;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ContentValidationForm() {
//   const videoUrl = ["https://drive.google.com/file/d/16AbblD1rx_7FMz5szmsGhftzAv33crsg/preview" , "https://drive.google.com/file/d/1uoYKV3SG9TKOiTwXry1pKhXayxmoRqYY/view?usp=sharing" , "https://drive.google.com/file/d/1u5tUrOFV47xSq7BJ7AGX5VVuHgc6Zip2/view?usp=sharing" , "https://drive.google.com/file/d/1EX1Z9WcXPbcIzAx1JcF52aBiLlAz3dad/view?usp=sharing" , "https://drive.google.com/file/d/1FGLOib64-s-3EBQ_ehr19Ghs5toV3A1i/view?usp=sharing"];
//   const [questions, setQuestions] = useState([]);
//   const [responses, setResponses] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [videoNumber, setVideoNumber] = useState(1); // Initialize videonumber
//   const [videoUrls, setVideoUrls] = useState(videoUrl[0]); // videoUrl is the array of video URLs

//   const questionsPerPage = 5; // Number of questions per page
//   const userId = localStorage.getItem("userId"); // Get userId from localStorage
//   async function fetchQuestions() {
//     try {
//       const response = await fetch('http://localhost:5000/api/questions/getquestions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ videonumber: videoNumber, userId: userId }) // Include userId and videonumber
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch questions');
//       }
//       const data = await response.json();
//       // if (data.length === 0) {
//         // No questions fetched, increment videonumber
//         // const reloadPage = window.confirm("Your assignment for this video is complete. Click OK to reload the page.");
//       //   if (reloadPage) {
//       //     window.location.reload();
//       //   }
//       //   setVideoNumber(videoNumber + 1);
//       //   return;
//       // }
//       setQuestions(data.map((question, index) => ({ ...question, index: index }))); // Include index
//       setResponses(new Array(data.length).fill('')); // Initialize responses array
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   }

//   useEffect(() => {

//     fetchQuestions();
//   }, [userId, videoNumber]);

//   const handleResponseChange = (index, value) => {
//     const newResponses = [...responses];
//     newResponses[index] = value;
//     setResponses(newResponses);
//   };

//   const handleSubmit = async (index, questionId) => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/questions/addassignment",
//         {
//           userId: userId,
//           questionId: questionId, // Include the _id of the question
//           videonumber: videoNumber, // Include videonumber if required
//           // Add other necessary data here based on your requirements
//         }
//       );
//       console.log("mkninmiopn");

//       // Remove the submitted question and response
//       const updatedQuestions = questions.filter((question, i) => i !== index);
//       setQuestions(updatedQuestions.map((question, index) => ({ ...question, index: index })));
//       const updatedResponses = responses.filter((response, i) => i !== index);
//       setResponses(updatedResponses);

//       if (indexOfLastQuestion === index) {
//         setCurrentPage(currentPage + 1);
//       }

//       if (updatedQuestions.length === 0) {
//         const reloadPage = window.confirm("Your assignment for this video is complete. Click OK to reload the page.");
//         if (reloadPage) {
//           setVideoNumber(videoNumber + 1)
//           setVideoUrls(videoUrl[videoNumber - 1]);
//           // fetchQuestions();
//           // window.location.reload();
//         }
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error.message);
//     }
//   };


//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastQuestion = currentPage * questionsPerPage;
//   const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
//   const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
//         <iframe
//           src={videoUrls}
//           width="800"
//           height="450"
//           allow="autoplay"
//           style={{ border: 'none' }}
//         ></iframe>
//       </div>
//       <div style={{ padding: '20px' }}>
//         {currentQuestions.map((question, index) => (
//           <div key={index} style={{ marginBottom: '20px' }}>
//             <p>{question.question}</p>
//             <input
//               type="text"
//               value={responses[indexOfFirstQuestion + index]}
//               onChange={(e) => handleResponseChange(indexOfFirstQuestion + index, e.target.value)}
//             />
//             <button onClick={() => handleSubmit(question.index, question._id)} >Submit</button>
//           </div>
//         ))}
//         <div style={{ marginTop: '20px' }}>
//           {questions.length > questionsPerPage && (
//             <div>
//               <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//               <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
//               <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastQuestion >= questions.length}>Next</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContentValidationForm;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Center, Flex } from '@chakra-ui/react';

function ContentValidationForm() {
  const videoUrls = [
    "https://drive.google.com/file/d/16AbblD1rx_7FMz5szmsGhftzAv33crsg/preview",
    "https://drive.google.com/file/d/1uoYKV3SG9TKOiTwXry1pKhXayxmoRqYY/preview",
    "https://drive.google.com/file/d/1u5tUrOFV47xSq7BJ7AGX5VVuHgc6Zip2/preview",
    "https://drive.google.com/file/d/1EX1Z9WcXPbcIzAx1JcF52aBiLlAz3dad/preview",
    "https://drive.google.com/file/d/1FGLOib64-s-3EBQ_ehr19Ghs5toV3A1i/preview"
  ];
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videoNumber, setVideoNumber] = useState(1);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(0);// Use videoUrls for the array of video URLs

  const [submitbuttonclick , setSubmitbuttomclick] = useState(false);

  const questionsPerPage = 5; // Number of questions per page
  const userId = localStorage.getItem("userId"); // Get userId from localStorage
  const useremail = localStorage.getItem("email");

  async function fetchQuestions(videoNumber) {
    try {
      const response = await fetch(
        'https://greentenbe-production.up.railway.app/api/questions/getquestions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videonumber: videoNumber, userId: userId }), // Include userId and videonumber
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      if (data.length === 0) {
        // No questions fetched, increment videonumber
        const reloadPage = window.confirm(
          'Your assignment for this video is complete. Click OK to move to the next video.'
        );
        if (reloadPage) {
          const newVideoNumber = videoNumber + 1;
          setVideoNumber(newVideoNumber);
          setCurrentVideoUrl(videoUrls[newVideoNumber - 1]);
          fetchQuestions(newVideoNumber); // Fetch new questions for the next video
        }
        return;
      }
      setQuestions(
        data.map((question, index) => ({ ...question, index: index }))
      ); // Include index
      setResponses(new Array(data.length).fill('')); // Initialize responses array
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, [userId, videoNumber]);

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = async (index, questionId) => {
    setSubmitbuttomclick(true);
    try {
      await axios.post(
        "https://greentenbe-production.up.railway.app/api/questions/addassignment",
        {
          userId: userId,
          questionId: questionId, // Include the _id of the question
          videonumber: videoNumber, // Include videonumber if required
          // Add other necessary data here based on your requirements
        }
      );
      console.log("Assignment submitted");

      // Remove the submitted question and response
      const updatedQuestions = questions.filter((question, i) => i !== index);
      setQuestions(updatedQuestions.map((question, index) => ({ ...question, index: index })));
      const updatedResponses = responses.filter((response, i) => i !== index);
      setResponses(updatedResponses);



      if (updatedQuestions.length === 0) {
        const reloadPage = window.confirm("Your assignment for this video is complete. Click OK to move to the next video.");
        if (reloadPage) {
          const newVideoNumber = videoNumber + 1;
setVideoNumber(newVideoNumber);
setCurrentVideoUrl(videoUrls[newVideoNumber - 1]);
fetchQuestions(newVideoNumber);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }finally{
      setSubmitbuttomclick(false);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateVidenumber = async() =>{
    try{
      const res = await axios.post("http://localhost:5000/api/questions/updatevideocount",
        {
          videonumber : videoNumber,
          userId : userId
        }
      );
      console.log(res , "updated video number");
    }catch(error){
      console.log(error.message);

    }
  }

  useEffect(() => {
    const getuserdetails = async () => {
      try {
        const res = await axios.post(
          "https://greentenbe-production.up.railway.app/api/user/getuserdetailsbymail",
          { email: useremail }
        );
        console.log(res.data.response.videoNumber, "userdetails");
        const initialVideoNumber = res.data.response.videoNumber;
        setVideoNumber(initialVideoNumber);
        setCurrentVideoUrl(videoUrls[initialVideoNumber - 1]);
        fetchQuestions(initialVideoNumber); // Fetch questions after setting the initial video number
        await updateVidenumber(initialVideoNumber + 1);
      } catch (error) {
        console.log(error.message);
      }
    };
    if(useremail) {
      getuserdetails(); // Fetch user details to get the initial video number
    }
  }, [useremail
  ]);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
  const submittedcount = localStorage.getItem("usersubmitedforms");
  const enddate = localStorage.getItem("userend");
  console.log(enddate , "enddate");

  return (
    <>
    { submittedcount === "400" ?
  <Center>

    You will get your qc report after {enddate.slice(0,10)}
    </Center>
    :


    <div>
        <style>
         @import
       url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Whisper&display=swap')
      </style>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh'  , marginTop:"5%"}}>
        <iframe
          src={currentVideoUrl}
          width="800"
          height="450"
          allow="autoplay"
          style={{ border: 'none' }}
        ></iframe>
      </div>
      <div style={{ padding: '20px'  , justifyContent:"center" , alignItems:"center"}}>
        {currentQuestions.map((question, index) => (
          <div key={index} style={{ marginBottom: '20px', fontFamily: "'Dancing Script', cursive" , fontWeight:"1000" }}
          >
            <p style={{fontSize:"1.2rem"}} >{question.question}</p>
            <input
            height={"1.2rem"}
             style={{ border: "1px solid green" ,  height:"2rem" }}
              type="text"
              value={responses[indexOfFirstQuestion + index]}
              onChange={(e) => handleResponseChange(indexOfFirstQuestion + index, e.target.value)}
            />
            <button
      disabled={submitbuttonclick}


            style={{
              color:"white",
              marginLeft: "1rem",
              backgroundColor: submitbuttonclick ? "gray" :  "#21a34e",
              borderRadius: "10px",  // Border radius
              padding: "0.5rem 1rem",  // Padding for better appearance
              border: "1px solid #ccc",  // Optional border for better contrast
              cursor: submitbuttonclick ? 'not-allowed' : 'pointer',

            }}
            onClick={() => handleSubmit(indexOfFirstQuestion + index, question._id)}>Submit</button>
          </div>
        ))}
        <div style={{ marginTop: '20px' , display:"flex" , alignContent:"center" , justifyContent:"center" }}>
          {questions.length > questionsPerPage && (
            <div  style={{
              color:"white",
              // marginLeft: "1rem",
              backgroundColor: "#4a4ec6",  // Light background color
              borderRadius: "10px",  // Border radius
              padding: "0.5rem 1rem",  // Padding for better appearance
              border: "1px solid #ccc"  // Optional border for better contrast
            }}>
              <button  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
              <span style={{ margin: '0 10px' }}>Page {currentPage}</span>
              <button

              onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastQuestion >= questions.length}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>

  }
  </>
  );
}

export default ContentValidationForm;





