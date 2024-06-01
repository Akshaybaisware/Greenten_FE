import React, { useState, useEffect } from "react";
import { Text, Box, Input, Button, Center, Image } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import axios from "axios";
import jsPDF from "jspdf";
import sign from "../../assets/cropto stamp.svg";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";

function Recovery() {
  const [allUsersData, setAllUsersData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deletestate, setDeleetestate] = useState();
  const navigate = useNavigate();
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
  useEffect(() => {
    fetchData();
  }, [deletestate]);

  useEffect(() => {
    setTableData(allUsersData);
  }, [allUsersData]);

  const handleSearch = () => {
    let filteredData = allUsersData.filter((item) => {
      return (
        (!searchText ||
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchText.toLowerCase())
          )) &&
        (!startDate || new Date(item.selectedDate) >= new Date(startDate)) &&
        (!endDate || new Date(item.selectedDate) <= new Date(endDate))
      );
    });

    setTableData(filteredData);
  };

  useEffect(() => {
    handleSearch(); // Call this function every time searchText, startDate, or endDate changes
  }, [searchText, startDate, endDate, allUsersData]);

  const handleDateChange = (date, id) => {
    const newData = allUsersData.map((item) =>
      item.id === id ? { ...item, selectedDate: date } : item
    );
    setAllUsersData(newData);
  };

  const generatePDF = async (name, address, date) => {
    const doc = new jsPDF();

    // NOC content
    const nocContent = `
    <div id="noc-content" style="text-align: justify; padding: 0 2rem;">
  <div style="text-align: center;">
    <h2 style="font-size: 24px; font-weight: bold; color: black;">NOC(NO-OBJECTION-CERTIFICATE)</h2>
    <h2 style="font-size: 24px; font-weight: bold; color: red; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Cropton Services</h2>
    <hr style="background-color: brown; height: 1px; width: 50%; margin: 0 auto;"/>
  </div>
  <p style="padding: 1rem 0;">Date: ${date}</p>
  <div style="padding: 1rem 0;">
    <p>
      This is to certify that <span style="font-weight: bold;">Cropton Services</span>, located at block number: 23 Hanuman Nagar Ajmer Road S.O, Jaipur, 302006, has been engaged in data processing services with Cropton Services.
    </p>
    <br />
    <p>
      <span style="font-weight: bold;">Cropton Services</span> is responsible for inputting provided data field-wise online, adhering to guidelines provided by <span style="font-weight: bold;">Cropton Service</span>, with data supply and preservation of the output file conducted in real-time. Compensation for form-filling services rendered is INR 38 per form, contingent upon achieving a cutoff above 450, with invoices raised by
    </p>
    <br />
    <p>
      Cropton Services and QC reports provided within 72 hours. Cropton Services provides a workload of 480 forms over 5 days,
    </p>
    <br />
    <p>
      Cropton Services has 5 days, including holidays, to complete the workload and submit it, with Cropton Enterprise furnishing an accuracy report within 72 hours. Data formats and necessary information are provided by Cropton Services at the time of data provision. Any applicable telecommunication costs are to be borne by the respective parties.
    </p>
  </div>
  <hr style="background-color: brown; height: 1px; width: 50%; margin: 0 auto;"/>
  <div style="text-align: left; padding: 1rem 0;">
    <p>Sincerely,</p>
    <img src="${sign}" alt="Signature" width="200" style="display: block; margin: 0 auto;"/>
  </div>
</div>

    `;

    // Convert HTML to canvas
    const div = document.createElement("div");
    div.innerHTML = nocContent;
    document.body.appendChild(div);

    // Use html2canvas to capture the NOC content as an image
    const canvas = await html2canvas(document.querySelector("#noc-content"));

    // Remove the NOC content from the DOM
    document.body.removeChild(div);

    // Add canvas to PDF
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvasHeight * pdfWidth) / canvasWidth;

    doc.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Save PDF
    doc.save("Cropton-NOC.pdf");
  };
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

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: (row) => row.mobile,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Date",
      cell: (row) => (
        <Input
          type="date"
          value={row.selectedDate}
          onChange={(e) => handleDateChange(e.target.value, row.id)}
        />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        // <Button
        //   color={"white"}
        //   bg={"green"}
        //   onClick={() =>
        //     generatePDF(
        //       row.name,
        //       row.address,
        //       row.selectedDate || new Date().toLocaleDateString()
        //     )
        //   }
        // >
        //   Download NOC
        // </Button>
        <Button
          color={"white"}
          bg={"green"}
          onClick={() =>
            navigate("/noc", {
              state: { row },
            })
          }
        >
          View Deatils
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

  return (
    <>
      <Box mt={["3rem", "3rem"]}>
        <Center color={"#336600"} fontWeight={800} fontSize="3xl">
          NOC-Certificate
        </Center>
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        textAlign={"center"}
        alignItems={"center"}
        gap="2"
      >
        <Input
          border={"1px solid gray"}
          w={["200px", "400px"]}
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Box>
      <DataTable
        columns={columns}
        data={tableData}
        pagination
        paginationPerPage={10}
      />
    </>
  );
}

export default Recovery;
