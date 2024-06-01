import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";

function ViewDetails() {
  const datafromlocation = useLocation();
  console.log(datafromlocation.state.data, "dadasdfngndgnfdjgn");
  const data = datafromlocation.state.data;

  const downloadReport = () => {
    const pdf = new jsPDF({
      orientation: "landscape",
    });

    // Starting positions
    let startX = 20;
    let startY = 30;
    const rowHeight = 10;
    const colWidth = 90; // Width of each column

    // Set up table header
    pdf.setFontSize(16);
    pdf.text("User Details Report", startX, 20);

    // Helper function to add row in a tabular format
    const addRow = (label, value, x, y) => {
      pdf.setFontSize(12);
      pdf.text(`${label}: ${value || "Not provided"}`, x, y); // Adding 'Not provided' for undefined or null values
    };

    // Calculate column start positions (assuming two columns)
    let column1X = startX;
    let column2X = startX + colWidth + 40; // Second column starts after the first column plus some space

    // Add data in two columns
    addRow("Name", data.name, column1X, startY);
    addRow("Mobile", data.mobile, column2X, startY);
    addRow("Email", data.email, column1X, startY + rowHeight);
    addRow(
      "Start Date",
      data?.startDate?.slice(0, 10),
      column2X,
      startY + rowHeight
    );
    addRow(
      "End Date",
      data?.endDate?.slice(0, 10),
      column1X,
      startY + 2 * rowHeight
    );
    addRow(
      "Total Forms",
      data.totalAssignmentLimit,
      column2X,
      startY + 2 * rowHeight
    );
    addRow(
      "Filled Forms",
      data.submittedAssignmentCount,
      column1X,
      startY + 3 * rowHeight
    );
    addRow("Correct Forms", data.rightForms, column2X, startY + 3 * rowHeight);
    addRow(
      "Incorrect Forms",
      data.wrongForms || "0",
      column1X,
      startY + 4 * rowHeight
    );

    // Save PDF
    pdf.save(`Report_${data.name}.pdf`);
  };

  const qcreportdata = async () => {
    try {
      const reposne = await axios.post(
        "https://zemixbe.onrender.com/api/assignment/getassignments",
        { userId: userId }
      );
      console.log(reposne, "jasdbasjkdbaksjb");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Center fontSize={20}>User Details</Center>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input value={data.name} type="text" placeholder="Enter your name" />
        </FormControl>

        <FormControl id="mobile">
          <FormLabel>Mobile</FormLabel>
          <Input
            value={data.mobile}
            type="tel"
            placeholder="Enter your mobile number"
          />
        </FormControl>

        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            value={data.email}
            type="email"
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl id="startDate">
          <FormLabel>Caller Start Date</FormLabel>
          <Input value={data?.startDate?.slice(0, 10)} type="date" />
        </FormControl>

        <FormControl id="endDate">
          <FormLabel>End Date</FormLabel>
          <Input value={data?.endDate?.slice(0, 10)} type="date" />
        </FormControl>

        <FormControl id="totalForms">
          <FormLabel>Total Forms</FormLabel>
          <NumberInput min={0} value={data.totalAssignmentLimit}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="filledForm">
          <FormLabel>Filled Form</FormLabel>
          <NumberInput min={0} value={data.submittedAssignmentCount}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="rightForm">
          <FormLabel>Right Form</FormLabel>
          <NumberInput value={data.rightForms} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl id="incorrectForm">
          <FormLabel>Incorrect Form</FormLabel>
          <NumberInput value={data.wrongForms} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <Box p={5} shadow="md" borderWidth="1px">
          <VStack spacing={4} align="stretch">
            {/* Existing form controls */}
            {/* Button to trigger PDF download */}
            {}
            <Button colorScheme="blue" onClick={downloadReport}>
              Download PDF
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default ViewDetails;
