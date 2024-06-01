import React, { useState, useEffect, useRef } from "react";
import { Box, Text, Center, Image, Button } from "@chakra-ui/react";
import sign from "../../assets/cropto stamp.svg";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

const NOC = () => {
  const [allUsersData, setAllUsersData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const datafromrecovery = useLocation();
  console.log(datafromrecovery, "location data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://zemixbe.onrender.com/api/user/getallclient"
        );
        // Initialize each user data with a selectedDate property
        const usersWithDate = response?.data?.data.map((user) => ({
          ...user,
          selectedDate: "",
        }));
        setAllUsersData(usersWithDate);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // const generatePDF = async () => {
  //   const input = document.getElementById("noc-content");
  //   input.scrollIntoView(false);

  //   // Adjust styles for mobile view
  //   const isMobile = window.matchMedia(
  //     "only screen and (max-width: 430px)"
  //   ).matches;
  //   if (isMobile) {
  //     const style = document.createElement("style");
  //     style.innerHTML = `
  //       .noc-content {
  //         font-size: 10px;
  //       }
  //       .noc-content h2 {
  //         font-size: 10px;
  //       }
  //       .noc-content .heading {
  //         font-size: 11px;
  //       }
  //       .noc-content .sincerely {
  //         font-size: 10px;
  //         position: relative;
  //         top: -10px;
  //       }
  //       .noc-content .signature {
  //         position: relative;
  //         top: -50px;
  //         left: 0;
  //         width: 100%;
  //         text-align: center;
  //       }
  //     `;
  //     document.head.appendChild(style);
  //   }

  //   // Debounce the function to prevent multiple calls
  //   const debouncedGeneratePDF = _.debounce(async () => {
  //     const canvas = await html2canvas(input);
  //     const imgData = canvas.toDataURL("image/png");

  //     const doc = new jsPDF();
  //     const imgProps = doc.getImageProperties(imgData);
  //     const pdfWidth = doc.internal.pageSize.getWidth();
  //     const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  //     doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //     // Adjust layout for mobile view
  //     if (isMobile) {
  //       const pageHeight = doc.internal.pageSize.getHeight();
  //       if (pdfHeight > pageHeight) {
  //         const scaleFactor = pageHeight / pdfHeight;
  //         const newPdfWidth = pdfWidth * scaleFactor;
  //         const newPdfHeight = pdfHeight * scaleFactor;
  //         doc.addPage();
  //         doc.addImage(
  //           imgData,
  //           "PNG",
  //           0,
  //           -(pdfHeight - pageHeight),
  //           newPdfWidth,
  //           newPdfHeight
  //         );
  //       }
  //     }

  //     doc.save("noc.pdf");
  //   }, 500);

  //   debouncedGeneratePDF();
  // };
  const generatePDF = async () => {
    const input = document.getElementById("noc-content");
    input.scrollIntoView(false);
  
    // Debounce the function to prevent multiple calls
    const debouncedGeneratePDF = _.debounce(async () => {
        // Capture the full page using html2canvas
        const canvas = await html2canvas(input, { scale: 1 });
        const imgData = canvas.toDataURL("image/png");
  
        // Create a new jsPDF instance
        const doc = new jsPDF();
  
        // Get image properties
        const imgProps = doc.getImageProperties(imgData);
  
        // Calculate PDF width and height
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();
        const imgAspectRatio = imgProps.width / imgProps.height;
  
        // Calculate required image height based on aspect ratio
        const imgHeight = pdfWidth / imgAspectRatio;
  
        // Calculate number of pages based on content height
        const numPages = Math.ceil(imgHeight / pdfHeight);
  
        // Add image data to each page
        for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
            // Calculate y-coordinate for each page
            const yOffset = -pageIndex * pdfHeight;
  
            // Calculate new image width and height
            const newImgWidth = pdfWidth;
            const newImgHeight = imgHeight;
  
            // Add image to the document at the appropriate position
            doc.addImage(imgData, "PNG", 0, yOffset, newImgWidth, newImgHeight);
  
            // If not the last page, add a new page
            if (pageIndex < numPages - 1) {
                doc.addPage();
            }
        }
  
        // Save the PDF
        doc.save("noc.pdf");
    }, 500);
  
    debouncedGeneratePDF();
};


  return (
    <>
      <Box id="noc-content" position="relative">
      
        <Center>
          <Text
            marginTop={"10rem"}
            fontSize="4xl"
            fontWeight="bold"
            color="Black"
            // textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            NOC(NO-OBJECTION-CERTIFICATE)
          </Text>
        </Center>

        <Center>
          <Text
            mb={"3rem"}
            fontSize="5xl"
            fontWeight="bold"
            color="red.500"
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          >
            Cropton Services
          </Text>
        </Center>
        <Box ml="1rem" bg="brown">
          .
        </Box>
        <Text fontWeight={700} ml="1rem" fontSize="2xl" padding={"2px"} mt={4}>
          Name: {datafromrecovery.state.row.name}
        </Text>
        <Text ml="1rem" fontSize="2xl" padding={"2px"} mt={4}>
          Address: {datafromrecovery.state.row.address}
        </Text>
        <Text ml="1rem" fontSize="2xl" padding={"2px"} mt={4}>
          Date:{" "}
          {datafromrecovery.state.row.selectedDate ||
            new Date().toLocaleDateString()}
        </Text>
        <Text ml="1rem">_________________________________________</Text>
        <Text ml="1rem">_________________________________________</Text>
        <Text
          fontWeight={600}
          color="blue"
          fontSize="2xl"
          mt={"2rem"}
          ml="1rem"
        >
          Respected Sir/Maam
        </Text>
        <Text mt={4}></Text>
        <Box fontSize="2xl" padding={"1rem"}>
          This is to certify that{" "}
          <span style={{ fontWeight: "bold" }}>Cropton Services</span>, located
          at block number: 23 Hanuman Nagar Ajmer Road S.O, Jaipur, 302006, has
          been engaged in data processing services with Cropton Services. <br />
          <br />
          <span style={{ fontWeight: "bold" }}>Cropton Services</span> is
          responsible for inputting provided data field-wise online, adhering to
          guidelines provided by{" "}
          <span style={{ fontWeight: "bold" }}>Cropton Service</span>, with data
          supply and preservation of the output file conducted in real-time.
          Compensation for form-filling services rendered is INR 38 per form,
          contingent upon achieving a cutoff above 450, with invoices raised by
          <br />
          <br />
          Cropton Services and QC reports provided within 72 hours. Cropton
          Services provides a workload of 480 forms over 5 days,
          <br />
          Cropton Services has 5 days, including holidays, to complete the
          workload and submit it, with Cropton Enterprise furnishing an accuracy
          report within 72 hours. Data formats and necessary information are
          provided by Cropton Servicesat the time of data provision. Any
          applicable telecommunication costs are to be borne by the respective
          parties.
        </Box>

        <Text ml={"1rem"} fontSize="2xl" fontWeight={"500"}>
          (A) In the matter of fact failure, not submitted or succeed company is
          entitled to receive amount by any cost. If you achieve the accuracy
          which mentioned above, then Utility charges will be deduct from your
          work payment and if you fail to achieve accuracy in given timeline,
          then also you have to pay as a liability which describe above.
          <br />
          <br />
          (B) This charges related to service, development and maintenance cost
          of the platform where you working online.
          <br />
          <br /> (c) If you deny paying the said amount then company will take
          this matter legally & all the legal expenses will be clear by your
          side, company is not liable for the same.
        </Text>
        <br />
        <Box ml="1rem" bg="brown">
          .
        </Box>
        <Text fontSize="2xl" padding={"1rem"}>
          I understand that obtaining the NOC may involve certain formalities
          and procedures, and I am prepared to fulfill any requirements or
          provide any documentation necessary to expedite the process. I kindly
          request your assistance in processing this request at your earliest
          convenience. <br />
          <br />
          If there are any forms or documents that I need to fill out or
          provide, please let me know, and I will ensure their prompt
          submission. Thank you for your attention to this matter. I look
          forward to your positive response and cooperation in facilitating this
          request.
          <br />
          Please let me know if you require any further information from my end.
          <br />
          <br />
        
          <br />
          Sincerely,
          <br />
          <br />
          Thanking You
          <br />
        </Text>
        <Image width={["50%", "35%"]} src={sign} />
      </Box>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="0"
        opacity="0.5"
        boxShadow="inset 0 0 10px rgba(0, 0, 0, 0.5)" // Apply shadow effect to the entire content
      >
        {/* <Text
          id="cropton-logo"
          fontSize={["10rem", "8rem"]}
          fontWeight="bold"
          color="#ccffe6"
          textShadow="2px 2px 4px rgba(0, 0, 0, 0.5)"
          transform="rotate(-70deg)" // Rotate text diagonally
          position="absolute" // Position absolutely
          top="25%" // Adjust positioning as needed
          left={["-35%", "20%"]} // Adjust positioning as needed
          zIndex="1000" // Ensure text is below other content
        >
          Cropton
        </Text> */}
      </Box>
      <Button 
      m="2rem"
      color={"white"}
      bg={"green"}
      onClick={generatePDF}>Download</Button>
    </>
  );
};

export default NOC;
