import React, { useState, useEffect } from "react";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import DataTable from "react-data-table-component";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

import { BiSolidPhoneCall } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

function PendingRegisteration() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [dependancy, setDependeancy] = useState();
  const [deletedependency, setDeletedependance] = useState();
  const [reload, setReload] = useState(false);

  const iconsarray = [BiSolidPhoneCall, TbReload, IoIosClose];
  const [pendinglist, setPendinglist] = useState();
  const emailsendingpassword = async (id) => {
    try {
      console.log(id, "asdasdasd");
      const reponse = await axios.post(
        "https://zemixbe.onrender.com/api/user/senduserinfo",
        {
          userID: id,
        }
      );
      console.log(reponse, "email response");
      toast({
        title: "Email Sent Sucessfullty ",
        description: "Email  Successfully",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } catch (error) {
      console.log(error.messgae);
      toast({
        title: "Error",
        description: "Error Occured ",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };
  const deleteclientinfo = async (id) => {
    try {
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/user/deleteclient",
        {
          id: id,
        }
      );
      console.log(response, "deleted response");

      // setFilter(filter.filter((item) => item._id !== id));
      if (response.status === 200) {
        setDeletedependance(response);
        return response;
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error Occured ",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      console.log(error);
    }
  };

  const filterdata = (id) => {
    console.log(id, "functions");
    const filtereddata = pendinglist.filter(
      (item) => item.id && item.id.includes(id)
    );

    console.log(filtereddata, "filtereddata");
  };

  const handleAction = async (row, index) => {
    if (index === 0) {
      console.log(row);
      const id = row._id;
      console.log(id, "id");
      await emailsendingpassword(id);
      // filterdata(row._id);
      setReload(true);

      //deleteclientinfo(id);
    } else if (index === 1) {
      console.log("Reload");
    } else if (index === 2) {
      filterdata(row._id);
      setReload(true);
      //deleteclientinfo(row._id);
    }
  };
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
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
      name: "Registration Date",
      selector: (row) => row?.createdAt?.slice(0, 10),
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate?.slice(0, 10),
      sortable: true,
    },
    {
      name: "Caller",
      selector: (row) => `1`, // Prepend static number 1 to the caller value
      sortable: true,
  },

    // {
    //   name: "Status",
    //   selector: (row) => row.submittedAssignmentCount,
    //   sortable: true,
    // },
    {
      name: "Status",
      selector: (row) => {
          // Determine which icon to display based on submittedAssignmentCount
          if (row.submittedAssignmentCount > 10) {
              return (
                  <div style={{ color: 'green' }}>
                      <FaCheckCircle />
                  </div>
              );
          } else if (row.submittedAssignmentCount < 0) {
              return (
                  <div style={{ color: 'orange' }}>
                      <FaClock />
                  </div>
              );
          } else {
              return (
                  <div style={{ color: 'red' }}>
                      <FaTimesCircle />
                  </div>
              );
          }
      },
      sortable: true,
  },

  
    {
      name: "Action",
      cell: (row) => (
        // <Flex>
        //   {iconsarray.map((Icon, index) => (
        //     <Button
        //       key={index}
        //       colorScheme="green"
        //       size="sm"
        //       variant="outline"
        //       onClick={() => handleAction(row, index)}
        //       leftIcon={<Icon />}
        //       mr={2}
        //       mb={2}
        //     />
        //   ))}
        // </Flex>
        <Flex>
    {iconsarray.map((Icon, index) => {
        // Determine the appropriate background color based on the icon index
        let colorScheme;
        if (index === 0) {
            colorScheme = "green"; // Green background for FaCheckCircle
        } else if (index === 1) {
            colorScheme = "blue"; // Orange background for FaClock
        } else if (index === 2) {
            colorScheme = "red"; // Red background for FaTimesCircle
        }

        return (
            <Button
                key={index}
                colorScheme={colorScheme} // Apply the determined color scheme
                size="sm"
                variant="outline"
                onClick={() => handleAction(row, index)}
                leftIcon={<Icon />}
                mr={2}
                mb={2}
            />
        );
    })}
</Flex>

      ),
    },
  ];

  const pendingdata = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://zemixbe.onrender.com/api/user/getallpending"
      );

      console.log(response.data.users, "pending list ");

      setPendinglist(response.data.users);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    pendingdata();
  }, [dependancy, deletedependency, reload]);
  return loading ? (
    <Center height={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <>
      <Center mt={["2rem", "1rem"]}>
        <Box width={{ base: "100vw", md: "90vw" }} overflowX="auto" p={4}>
          <Center mb={4}>
            <Text fontSize="2xl" fontWeight={"800"} color="red">
              Pending Registrations
            </Text>
          </Center>

          <DataTable
            columns={columns}
            data={pendinglist}
            pagination
            responsive
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  border: "1px solid gray",
                  borderRadius: "15px",
                  padding: "10px",
                  paddingLeft: "15px",
                  width: "100%",
                }}
              />
            }
          />
        </Box>
      </Center>
    </>
  );
}

export default PendingRegisteration;
