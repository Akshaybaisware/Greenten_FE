import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Center, Input, VStack ,Text, Button } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import axios from "axios";
import DataTable from "react-data-table-component";

function QcCheck() {
  const location = useLocation();
  console.log(location , "location");
  const state = location.state;
  console.log(state, "statedata");

  const [correctCount, setCorrectCount] = useState(
    state.user.correctAssignmentCount
  );
  const [incorrectCount, setIncorrectCount] = useState(
    state.user.incorrectAssignmentCount
  );
  const [incorrectAssignments, setIncorrectAssignments] = useState([]);
  const [ifnotFilledanyFrom, setIfnotFilledAnyfform] = useState(false);
  const statecorrect = state.user.correctAssignmentCount;
  const stateincorrrect = state.user.incorrectAssignmentCount;
  const totalForms = 510;

  // Calculate percentage for correct assignments
  const correctPercentage = (statecorrect / totalForms) * 100;

  // Data for the pie chart
  const data = [
    { name: "Correct Assignment", value: statecorrect },
    { name: "Incorrect Assignment", value: stateincorrrect },
  ];

  const COLORS = ["#0ad65c", "#c46a1b"];

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Address", selector: (row) => row.address, sortable: true },
    {
      name: "Annual Revenue",
      selector: (row) => row.annualRevenue,
      sortable: true,
    },
    { name: "Clean Code", selector: (row) => row.cleanCode, sortable: true },
    {
      name: "Job Functional",
      selector: (row) => row.jobFunctional,
      sortable: true,
    },
    { name: "Pin Code", selector: (row) => row.pinCode, sortable: true },
    { name: "User ID", selector: (row) => row.userId, sortable: true },
  ];

//   const questions = [
//     "In which country was the inventor Nikola Tesla born?",
//    "In which ocean is the Mariana Trench located?",
//     "Match the inventor to their invention.",
//     "What day is associated with tricks and pranks?",
//     "Which of these animals is not a mammal?",
//     "Which animal is the symbol of WWF?",
//     "In which country was the sport of golf first played?",
//     "Which movie series features Johnny Depp as a pirate?",
//     "Who is the lead singer of U2?",
//     "What's the more famous name that Robin Fenty goes by?",
//     "Which director is known for shooting the Avatar film series?",
//     "What is the capital city of France?",
//     "What is the capital city of the United States?",
//     "What is the capital of the United Kingdom?",
//     "What is the capital city of Germany?",
//     "What is the capital city of Italy?",
//     "What is the capital city of Spain?",
//     "What is the capital city of Canada?",
//     "What is the capital city of Australia?",
//     "What is the capital city of Japan?",
//     "What is the capital city of Russia?",
//     "What is the capital city of Brazil?",
//     "What is the capital city of China?",
//     "What is the capital city of Mexico?",
//     "What is the capital of Netherlands?",
//     "What country is known as the land of the long white cloud?",
//     "Which of these countries is not in Scandinavia?",
//     "Which city is famous for its carnival before Lent?",
//     "What is the most populous city in the world?",
//     "Which of these countries is landlocked?",
//     "Where is the tallest building in the world located?",
//     "The ancient city of Petra is a famous tourist attraction in which country?",
//     "Which European country has a city that stands on approximately 118 small islands?",
//     "The Amazon rainforest is primarily located in which country?",
//     "What is the largest lake in Africa?",
//     "Which of these countries is not part of the United Kingdom?",
//     "What is the name of the strait that separates Spain and Morocco?",
//     "What body of water separates Saudi Arabia from Africa?",
//     "Which African nation is the newest country in the world?",
//     "Which of these countries does not border the Mediterranean Sea?",
//     "What is the capital city of Canada?",
//     "The Kalahari Desert is located in which continent?",
//     "What is the chemical symbol for water?",
//     "In which direction does the Sun rise?",
//     "What is the fastest land animal?",
//     "What is the main currency used in Japan?",
//     "Who was the first woman to fly solo across the Atlantic Ocean?",
//     "What is the largest planet in our solar system?",
//     "Which chemical element is represented by the symbol 'O'?",
//     "Who wrote the Harry Potter series?",
//     "Which country hosted the 2016 Summer Olympics?",
//     "What is the primary gas found in the Earth's atmosphere?",
//     "Who is known as the father of modern computers?",
//     "What is the largest organ in the human body?",
//     "What is the name of the galaxy that contains our Solar System?",
//     "Who discovered penicillin?",
//     "Which planet is known as the Earth's twin?",
//     "Who wrote the play 'Hamlet'?",
//     "What is the boiling point of water at sea level in Celsius?",
//     "Which country is famous for the Eiffel Tower?",
//     "What is the smallest bone in the human body?",
//     "What is the capital of Egypt?",
//     "What's the scientific term for the fear of spiders?",
//     "In Greek mythology, who turned everything he touched into gold?",
//     "How many players are there on the field for one team in a standard soccer match?",
//     "What's the largest land animal?",
//     "Which of these animals is a marsupial?",
//     "What's the largest bird in the world?",
//      "What type of animal is a python?",
//     "From which country does Gouda cheese originate?",
//     "What is the capital city of Turkey?",
// "What is the capital city of Indonesia?",
// "What is the capital city of Saudi Arabia?",
// "What is the capital city of Andorra?",
// "What is the capital city of Serbia?",
// "What is the capital city of the Republic of Congo?",
// "What is the capital city of Equatorial Guinea?",
// "What is the capital city of Eritrea?",
// "What is the capital city of Afghanistan?",
// "What is the capital city of Azerbaijan?",
// "What is the capital city of Singapore?",
// "What is the capital city of São Tomé and Príncipe?",
// "What is the capital city of Belarus?",
// "What is the capital city of Sweden?",
// "What is the capital city of Vietnam?",
// "What is the capital city of Vatican City?",
// "What is the largest ocean?",
// "Which country has the most islands in the world?",
// "Which desert is the largest in the world?",
// "In which country is Mount Everest located?",
// "Which river is the longest in the world?",
// "What is the capital of Netherlands?",
// "What country is known as the land of the long white cloud?",
// "Which city is famous for its carnival before Lent?",
// "What is the most populous city in the world?",
// "Where is the tallest building in the world located?",
// "The ancient city of Petra is famous tourist attraction in which country?",
// "Which European country has a city that stands on approximately 118 small islands?",
// "The Amazon rainforest is primarily located in which country?",
// "What is the currency of Japan?",
// "What is the largest lake in Africa?",
// "What is the name of the strait that separates Spain and Morocco?",
// "What is the northernmost national capital city in the world?",
// "What body of water separates Saudi Arabia from Africa?",
// "Which African nation is the newest country in the world?",
// "Which of these countries does not border the Mediterranean Sea?",
// "What is the capital city of Canada?",
// "The Kalahari Desert is located in which continent?",
// "Which river flows through Baghdad, the capital of Iraq?",
// "What is the largest island in the Mediterranean Sea?",
// "The island of Sicily is an autonomous region of which country?",
//   ];

//   const rawAnswers = [
//     "Croatis", // Croatia
//     "Pacifc Ocean", // Pacific Ocean
//     "Thomas Edisn - Light Bulb, Alexander Graham Bell - Telephone", // Thomas Edison
//     "April Fools' Day", // April Fool's Day
//     "Lizerd", // Lizard
//     "Giant Pands", // Giant Panda
//     "Sctoland", // Scotland
//     "Piraates of the Caribbean", // Pirates of the Caribbean
//     "Bonoo", // Bono
//     "Rihanaa", // Rihanna
//     "James Cameronn", // James Cameron
//     // "Can't determine without an imag", // Can't determine without an image
//     "Pariss", // Paris
//     "Washington, D.C.", // Washington, D.C. (correct, no change)
//     "Londn", // London
//     "Brlin", // Berlin
//     "Roome", // Rome
//     "Madridd", // Madrid
//     "Ottwa", // Ottawa
//     "Caanberra", // Canberra
//     "Tokyoo", // Tokyo
//     "Moscw", // Moscow
//     "Brasíia", // Brasília
//     "Beiiing", // Beijing
//     "Mexco City", // Mexico City
//     "Amstrdam", // Amsterdam
//     "New Zeland", // New Zealand
//     "Finlnd", // Finland
//     "Rio de Janiero", // Rio de Janeiro
//     "Tokoyo", // Tokyo
//     "Afghannistan", // Afghanistan
//     "Dubay,", // Dubai, United Arab Emirates
//     "Jrdan", // Jordan
//     "Itly (Venice)", // Italy (Venice)
//     "Brazil", // Brazil (correct, no change)
//     "Lake Victoris", // Lake Victoria
//     "Ireland", // Ireland (correct, no change)
//     "Strait of Gibraltr", // Strait of Gibraltar
//     "Red Ssea", // Red Sea
//     "South Sdan", // South Sudan
//     // "Can't determine without an imag", // Can't determine without an image
//     "Portugal", // Portugal (correct, no change)
//     "Ottawa", // Ottawa (repeated)
//     "Afica", // Africa
//     "H₂O", // H₂O (correct, no change)
//     "Est", // East
//     // "Can't determine without an imag", // Can't determine without an image
//     // "Can't determine without specifics", // Can't determine without specifics (correct, no change)
//     "Cheeetah", // Cheetah
//     "Japanse Yen", // Japanese Yen
//     "Amelia Earhrt", // Amelia Earhart
//     "Jupter", // Jupiter
//     "Oxyen", // Oxygen
//     "J.K. Rawling", // J.K. Rowling
//     "Brazil", // Brazil (correct, no change)
//     "Nitrogenk", // Nitrogen (correct, no change)
//     "Alan Turingg", // Alan Turing
//     "Skind", // Skin (correct, no change)
//     "Milkyy Way", // Milky Way
//     "Alexander Feming", // Alexander Fleming
//     "Vens", // Venus
//     "William Shakespear", // William Shakespeare
//     "100° Celhcius", // 100°C
//     "Francke", // France (correct, no change)
//     "Stapues", // Stapes (correct, no change)
//     "Cairoo", // Cairo
//     "Arachnphobia", // Arachnophobia
//     "King Midas", // King Midas (correct, no change)
//     "11", // 11 (correct, no change)
//     // "Four (Jupiter, Saturn, Uranus, Neptun)", // Four
//     "African Elphant", // African Elephant
//     "Kangroo", // Kangaroo
//     // "Flse", // False
//     // "Dolphin", // Dolphin (correct, no change)
//     "Ostrch", // Ostrich
//     // "Ture", // True

//     "Snke", // Snake


//     "Netherlnds", // Netherlands

// "Ankaraa",
// "Jakartaa",
// "Riyaddh",
// "Andorra la Vellaa",
// "Belgradee",
// "Brazzavilee",
// "Malabbo",
// "Asmarra",
// "Kaabul",
// "Bakuu",
// "Singaporr",
// "Sãoo Tomé",
// "Minnsk",
// "Stockhoolm",
// "Hanoii",
// "Vaticaan City",

// "Paciffic Ocean",
// "Swedenn",
// "Saharaa",
// "Nepall",
// "Nilee",
// "Amsterdamm",
// "Neww Zealand",
// "Riode Janeiro",
// "Tokyoo",
// "Dubaai",
// "Jordann",
// "Italyy",
// "Braziil",
// "Yenn",
// "Lakee Victoria",
// "Gibraltarr Strait",
// "Reykjavikk",
// "Red Sea",
// "Southh Sudan",
// "Portugal",
// "Ottawaa",
// "Africaa",
// "Tigriss",
// "Sicilly",
// "Italy",
//   ];

  const renderTooltip = (props) => {
    const { payload } = props;
    if (payload && payload.length) {
      const { name, value } = payload[0];
      const formType = name === "Correct Assignment" ? "correct" : "incorrect";
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "5px",
            border: "1px solid black",
          }}
        >
          <p>{`${formType} forms: ${value}`}</p>
        </div>
      );
    }
    return null;
  };

  const getIncorrectForms = async () => {
    const apiUrl = "https://greentenbe-production.up.railway.app/api";
    try {
      const incompleteAssignmentsResponse = await axios.post(
        `${apiUrl}/user/getreportbyid`,
        {
          id: state.userId,
        }
      );
      console.log(
        "incompleteAssignmentsResponse",
        incompleteAssignmentsResponse
      );
      setIncorrectCount(
        incompleteAssignmentsResponse.data.incorrectAssignmentCount
      );
      if (
        incompleteAssignmentsResponse.data.error ===
        "User did not fill all Assignments"
      ) {
        setIfnotFilledAnyfform(true);
      }
    } catch (error) {
      console.error("Error fetching incorrect assignments", error);
    }
  };

  const getAllAssignments = async () => {
    try {
      const allAssignmentsResponse = await axios.get(
        "https://greentenbe-production.up.railway.app/api/assignment/getallassignments"
      );
      console.log("allAssignmentsResponse", allAssignmentsResponse);

      // Randomly select incorrect assignments
      const allAssignments = allAssignmentsResponse.data.assignments;
      const incorrectAssignmentsToShow = getRandomAssignments(
        allAssignments,
        stateincorrrect
      );
      setIncorrectAssignments(incorrectAssignmentsToShow);
    } catch (error) {
      console.error("Error fetching all assignments", error);
    }
  };

  // Function to get random assignments
  const getRandomAssignments = (assignments, count) => {
    const shuffled = assignments.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    getIncorrectForms();
    getAllAssignments();
  }, []);

  return (
    <div>
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "700",

          margin: "1rem",
        }}
      >
        <Center
          style={{

            display: "inline",
            padding: "5px",
            margin: "5px",
          }}
        >
        <span style={{color:"red"}}> Greenten</span> Services and Enterprises
        <u/>
        </Center>
        {ifnotFilledanyFrom ? (
          <>
            <Center style={{ color: "black" }}>
              Sorry You have not Filled All Question
            </Center>
            <Center style={{ color: "red" }}>Sorry Your QC is Failed!</Center>
          </>
        ) : (
          <>
            <Button
              style={{
                background:"#b4d080",
                color:"#410207",
                fontSize: "1.2rem",
                padding: "1rem",
              }}
            >
              QC Report - {correctPercentage.toFixed(2)}% Accuracy
            </Button>
            <Text   style={{
              fontSize:"1rem",
                color:"#859c0f",}}>
              Name : { location ? state.user.name : localStorage.getItem("username")}

            </Text>
            <Text  style={{
                 fontSize:"1rem",
                 color:"#859c0f",}}>

              Mobile No : { location ? state.user.mobile : localStorage.getItem("usermobilenumber")}

            </Text>
            <Text  style={{
                 fontSize:"1rem",
                color:"#859c0f",}}>

              Email : {location ? state.user.email : localStorage.getItem("useremail")}
            </Text>

            <Text  style={{
                 fontSize:"1rem",
                color:"#859c0f",}}>

              Address : {location ? state.user.address : localStorage.getItem("useraddress")}
            </Text>

            <Center>
              <ResponsiveContainer width="80%" height={400}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="40%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        style={{ fontSize: "1.2rem" }}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={renderTooltip} />
                </PieChart>
              </ResponsiveContainer>
            </Center>

            <Center fontSize={["1.3rem"]} style={{ color: "red"  }}>Sorry Your QC is Failed!</Center>
            <hr
              style={{ backgroundColor: "gray", height: "2px", margin: "5px" }}
            />
            <Center fontSize={["1.3rem"]} >Incorrect question: {stateincorrrect}</Center>

            <div style={{ margin: "20px" }}>
        <DataTable
          columns={columns}
          data={incorrectAssignments}
          pagination
          customStyles={{
            headCells: {
              style: {
                color: "red",
              },
            },

          }}
        />
      </div>
          </>
        )}
      </div>
      {/* <VStack spacing={4} align="stretch" p={4}>
        {questions.map((question, index) => (
          <Box fontSize={"2rem"} key={index}>
            <p style={{ color: "black" }}>{question}</p>

            const answers = rawAnswers.map((answer, index) => (
            <Input
              key={index}
              width={["250px", "300px"]}
              borderColor="red.500"
              value={answer}
              readOnly
            />
            ));
          </Box>
        ))}
      </VStack> */}
      {/* <VStack spacing={4} align="stretch" p={4}>
  {questions.map((question, index) => (
    <Box fontSize={"1.2rem"} key={index}>
      <p style={{ color: "black" }}>{question}</p>
      <Input
        width={["250px", "300px"]}
        borderColor="red.500"
        fontSize={["1.3rem" , "1.5rem"]}
        value={rawAnswers[index]}
        readOnly
      />
    </Box>
  ))}
</VStack> */}
    </div>
  );
}

export default QcCheck;
