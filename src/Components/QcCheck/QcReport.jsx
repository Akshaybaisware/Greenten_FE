import React, { useLayoutEffect } from "react";
import { Text, Box, Input, Button, Flex, Center } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaDownload } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useToast, Icon } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import axios from "axios";
import jsPDF from "jspdf";

function QcReport() {
  const icons = [FaPencilAlt, FaEye, FaRupeeSign];
  const navigate = useNavigate();
  const [allusersdata, setAllusersData] = useState([]);
  const toast = useToast();
  const [incorrectAssignments, setIncorrectAssignments] = useState({});

  const handleIconClick = (rowData, iconIndex) => {
    // Perform actions based on rowData and iconIndex
    console.log("Clicked on icon:", iconIndex);
    console.log("Row data:", rowData);
    console.log(rowData, "filteredData");

    if (true) {
      switch (iconIndex) {
        case 0:
          navigate("/editclient", {
            state: { data: rowData },
          });
          break;
        case 1:
          navigate("/downloadreport", {
            state: { data: rowData },
          });

          break;
        case 2:
          //handledownload(rowData._id);
          emailsending(rowData?.email);
          break;
        case 3:
          navigate("/downloadreport", {
            state: { data: rowData },
          });
          break;
        case 4:
          deleteclientinfo(rowData?._id);
          break;
        default:
          // Handle default case
          break;
      }
    }
  };

  // const handleviewdetails = (rowdata) => {
  //   console.log(rowdata, "rowdata");
  //   navigate("/viewdetails", {});
  // };
  function handleViewDetails(rowData) {
    return () => {
      console.log(rowData, "rowData");
      navigate("/viewdetails", {
        state: { data: rowData },
      });
    };
  }

  // const downloadReport = async (data) => {
  //   console.log(data, "data received for report");
  //   const pdf = new jsPDF({
  //     orientation: "landscape",
  //   });

  //   try {
  //     const response = await axios.post(
  //       // "https://zemixbe.onrender.com/api/assignment/getassignments",
  //       `http://localhost:5000/api/user/getreportbyid`,
  //       // `http://localhost:5000/api/assignment/getassignments`,

  //       { id : data._id }
  //       // {
  //       //   email: data.email,
  //       // }
  //     );
  //     console.log(response.data, "Assignments data");

  //     let startX = 20;
  //     let startY = 30;
  //     const rowHeight = 20;
  //     const colWidth = 90;
  //     const pageHeight = pdf.internal.pageSize.height; // Get the page height

  //     pdf.setFontSize(16);
  //     pdf.text("User Details Report", startX, 20);

  //     // Function to add row with automatic new page handling
  //     const addRow = (label, value, x, y) => {
  //       if (y > pageHeight - 40) {
  //         // Check if y exceeds the page height minus some margin
  //         pdf.addPage(); // Add a new page
  //         y = 30; // Reset y position to the top of the new page
  //       }
  //       pdf.setFontSize(12);
  //       pdf.text(`${label}: ${value || "Not provided"}`, x, y);
  //       return y + rowHeight; // Increment y for the next row
  //     };

  //     let column1X = startX;
  //     let column2X = startX + colWidth + 40;

  //     startY = addRow("Name", data?.name, column1X, startY);
  //     startY = addRow("Mobile", data?.mobile, column2X, startY - rowHeight); // Adjust y for column continuity
  //     startY = addRow("Email", data?.email, column1X, startY);
  //     startY = addRow(
  //       "Start Date",
  //       data?.startDate?.slice(0, 10),
  //       column2X,
  //       startY - rowHeight
  //     );
  //     startY = addRow(
  //       "End Date",
  //       data?.endDate?.slice(0, 10),
  //       column1X,
  //       startY
  //     );
  //     startY = addRow(
  //       "Total Forms",
  //       data?.totalAssignmentLimit,
  //       column2X,
  //       startY - rowHeight
  //     );
  //     startY = addRow(
  //       "Filled Forms",
  //       data?.submittedAssignmentCount,
  //       column1X,
  //       startY
  //     );
  //     startY = addRow(
  //       "Correct Forms",
  //       data?.rightForms,
  //       column2X,
  //       startY - rowHeight
  //     );
  //     startY = addRow(
  //       "Incorrect Forms",
  //       data?.wrongForms || "0",
  //       column1X,
  //       startY
  //     );

  //     if (startY > pageHeight - 40) {
  //       pdf.addPage();
  //       startY = 30;
  //     }
  //     pdf.setFontSize(16);
  //     pdf.text("Assignments:", startX, startY);
  //     startY += rowHeight;

  //     response.data.assignments.forEach((assignment, index) => {
  //       if (startY > pageHeight - 40) {
  //         pdf.addPage();
  //         startY = 30;
  //       }
  //       startY = addRow(`Name`, assignment.name, startX, startY);
  //       startY = addRow(`Address`, assignment.address, startX, startY);
  //       startY = addRow(`Pin Code`, assignment.pinCode, startX, startY);
  //       startY = addRow(
  //         `Job Functional`,
  //         assignment.jobFunctional,
  //         startX,
  //         startY
  //       );
  //       startY = addRow(`Phone`, assignment.phone, startX, startY);
  //       startY = addRow(
  //         `Annual Revenue`,
  //         assignment.annualRevenue,
  //         startX,
  //         startY
  //       );
  //     });

  //     pdf.save(`Report_${data?.name}.pdf`);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

const downloadReport = async (data) => {
  console.log(data, "data received for report");
  const pdf = new jsPDF({
    orientation: "landscape",
  });

  try {
    const userResponse = await axios.post(
      `https://zemixbe.onrender.com/api/user/getreportbyid`,
      { id: data._id }
    );
    console.log(userResponse.data, "User Report data");

    const allAssignmentsResponse = await axios.get(
      "https://zemixbe.onrender.com/api/assignment/getallassignments"
    );
    console.log(allAssignmentsResponse.data, "All Assignments data");

    const user = userResponse.data.user;
    const incorrectAssignmentCount = user.incorrectAssignmentCount;

    let startX = 20;
    let startY = 30;
    const rowHeight = 20;
    const colWidth = 90;
    const pageHeight = pdf.internal.pageSize.height; // Get the page height

    pdf.setFontSize(16);
    pdf.text("User Details Report", startX, 20);

    // Function to add row with automatic new page handling
    const addRow = (label, value, x, y) => {
      if (y > pageHeight - 40) {
        // Check if y exceeds the page height minus some margin
        pdf.addPage(); // Add a new page
        y = 30; // Reset y position to the top of the new page
      }
      pdf.setFontSize(12);
      pdf.text(`${label}: ${value || "Not provided"}`, x, y);
      return y + rowHeight; // Increment y for the next row
    };

    let column1X = startX;
    let column2X = startX + colWidth + 40;

    startY = addRow("Name", user?.name, column1X, startY);
    startY = addRow("Mobile", user?.mobile, column2X, startY - rowHeight); // Adjust y for column continuity
    startY = addRow("Email", user?.email, column1X, startY);
    startY = addRow(
      "Start Date",
      user?.startDate?.slice(0, 10),
      column2X,
      startY - rowHeight
    );
    startY = addRow(
      "End Date",
      user?.endDate?.slice(0, 10),
      column1X,
      startY
    );
    startY = addRow(
      "Total Forms",
      user?.totalAssignmentLimit,
      column2X,
      startY - rowHeight
    );
    startY = addRow(
      "Filled Forms",
      user?.submittedAssignmentCount,
      column1X,
      startY
    );
    startY = addRow(
      "Correct Forms",
      user?.correctAssignmentCount,
      column2X,
      startY - rowHeight
    );
    startY = addRow(
      "Incorrect Forms",
      user?.incorrectAssignmentCount || "0",
      column1X,
      startY
    );

    if (startY > pageHeight - 40) {
      pdf.addPage();
      startY = 30;
    }
    pdf.setFontSize(16);
    pdf.text("Incorrect Assignments:", startX, startY);
    startY += rowHeight;

    const incorrectAssignments = allAssignmentsResponse.data.assignments.filter(
      (assignment) =>
        assignment.correctAssignmentCount !== user.correctAssignmentCount
    );

    // Randomly select incorrect assignments
    const selectedIncorrectAssignments = [];
    for (let i = 0; i < incorrectAssignmentCount; i++) {
      const randomIndex = Math.floor(
        Math.random() * incorrectAssignments.length
      );
      selectedIncorrectAssignments.push(incorrectAssignments[randomIndex]);
      incorrectAssignments.splice(randomIndex, 1);
    }

    selectedIncorrectAssignments.forEach((assignment) => {
      if (startY > pageHeight - 40) {
        pdf.addPage();
        startY = 30;
      }
      startY = addRow(`Name`, assignment.name, startX, startY);
      startY = addRow(`Address`, assignment.address, startX, startY);
      startY = addRow(`Pin Code`, assignment.pinCode, startX, startY);
      startY = addRow(
        `Job Functional`,
        assignment.jobFunctional,
        startX,
        startY
      );
      startY = addRow(`Phone`, assignment.phone, startX, startY);
      startY = addRow(
        `Annual Revenue`,
        assignment.annualRevenue,
        startX,
        startY
      );
    });

    pdf.save(`Report_${user?.name}.pdf`);
  } catch (error) {
    console.log(error.message);
  }
};



  // Assuming you have startDate and endDate states as well

  const [tableData, setTableData] = useState(allusersdata);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deletestate, setDeleetestate] = useState();

  const userId = localStorage.getItem("userId");

  const qcdata = async () => {
    try {
      const response = await axios.get(
        "https://zemixbe.onrender.com/api/user/getallclient"
        // `http://localhost:5000/user/getreportbyid`,{
          //  userId: userId
        // }
      );
      console.log(response, "response");

      if (response.isAvailable === false) {
        toast({
          title: "Error",
          description: "No Data Available",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
      setAllusersData(response?.data?.data);
      console.log(response, response?.data?.data, "allusersdata");
    } catch (error) {
      console.log(error.message);
    }
  };

  const qcreportdata = async () => {
    try {
      const reposne = await axios.post(
        // "https://zemixbe.onrender.com/api/assignment/getassignments",
        `https://zemixbe.onrender.com/api/user/getreportbyid`,
        { id : userId }
      );
      console.log(reposne, "jasdbasjkdbaksjb");
    } catch (error) {
      console.log(error);
    }
  };



  useLayoutEffect(() => {
    qcdata();
    qcreportdata();
  }, [deletestate]);
  const handleDelete = async (row) => {
    try {
      const id = row._id;
      const res = await axios.post(
        "https://zemixbe.onrender.com/api/user/deleteuser",
        // "http://localhost:5000/api/user/deleteuser",
        {
          userId: id,
        }
      );
      console.log(res);
      setDeleetestate(res);
    } catch (error) {
      console.log(error.message);
    }
    // fetchData();
  };
  //useEffect(() => {
  //getincorrectassignments();
  //}, []);

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: (row) => row?.mobile,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row?.startDate?.slice(0, 10),
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row?.endDate?.slice(0, 10),
      sortable: true,
    },
    {
      name: "Total Forms",
      selector: (row) => row?.totalAssignmentLimit,
      sortable: true,
    },
    {
      name: "Saved Forms",
      selector: (row) => row?.submittedAssignmentCount,
      sortable: true,
    },
    {
      name: "Submitted Forms",
      selector: (row) => row?.submittedAssignmentCount,
      sortable: true,
    },
    {
      name: "Wrong Forms",
      cell: (row) =>
        row?.incorrectAssignmentCount ? row?.incorrectAssignmentCount : 0,
    },
    {
      name: "Right Forms",
      selector: (row) =>
        row?.correctAssignmentCount ? row?.correctAssignmentCount : 0,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button
          width={"22rem"}
          p={"1.2rem"}
          bg={"green"}
          onClick={() => {
            if (row.submittedAssignmentCount >= 480) {
              downloadReport(row);
              toast({
                title: "Success",
                description: "Pdf Downloading",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            } else {
              toast({
                title: "Error",
                description: "Please Submit All Forms ",
                status: "error",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
            }
          }}
        >
          <Icon as={DownloadIcon} mr="2" />
          Download
        </Button>
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <Button color={"white"} bg={"red"} onClick={() => handleDelete(row)}>
          Delete
        </Button>
      ),
      sortable: true,
    },
  ];

  // Function to handle text and date filtering
  const handleSearch = () => {
    let filteredData = allusersdata;

    // Filter by text
    if (searchText) {
      filteredData = filteredData.filter((item) =>
        Object.keys(item).some(
          (key) =>
            item[key] &&
            item[key]
              .toString()
              .toLowerCase()
              .includes(searchText.toLowerCase())
        )
      );
    }

    // start and end date filter
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Include the entire end day

      filteredData = filteredData.filter((item) => {
        const itemStartDate = new Date(item.startDate);
        const itemEndDate = new Date(item.endDate);
        return itemStartDate >= start && itemEndDate <= end;
      });
    }

    // Filter by date range
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999); // Include the entire end day

      filteredData = filteredData.filter((item) => {
        const itemStartDate = new Date(item.startDate);
        const itemEndDate = new Date(item.endDate);
        return itemStartDate >= start && itemEndDate <= end;
      });
    }

    setTableData(filteredData);
  };

  useEffect(() => {
    handleSearch(); // Call handleSearch to apply initial filters on component mount
  }, [searchText, startDate, endDate, allusersdata]);

  return (
    <>
      <Box mt={["3rem", "1rem"]}>
        <Box>
          <Center color={"gray"} fontWeight={800} fontSize={["1.5rem", "2rem"]}>
            QC Report
          </Center>
        </Box>
        {/* <Box display="flex" gap="2">
        <Input type="date" onChange={(e)=> setStartDate(e.target.value)} />
        <Input type="date" onChange={(e) => setEndDate(e.target.value)} />
        <Button onClick={handleSearch}>Search Dates</Button>
      </Box> */}
        <Box
          m={"1rem"}
          // w={["rem", "400px"]}
          display={{ base: "block", md: "flex" }}
          flexWrap="wrap"
          gap="2"
        >
          <Box>
            <Input
              mb={"1rem"}
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Box>
          <Box>
            <Input
              mb={"1rem"}
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
          <Box>
            <Button color="white" bg={"#5c5c8a"} onClick={handleSearch}>
              Search Dates
            </Button>
          </Box>
        </Box>

        <Box display="flex" gap="2">
          <Input
            border={"1px solid brown"}
            m={"1rem"}
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
        <DataTable
          // title="QC Reports"
          columns={columns}
          data={tableData}
          pagination
          paginationPerPage={10}
        />
      </Box>
    </>
  );
}

export default QcReport;
