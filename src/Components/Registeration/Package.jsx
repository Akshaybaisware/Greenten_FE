import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Box, Center, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";

function Package() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const columns = [
    {
      name: "Package Name",
      selector: (row) => row.packagename,
      sortable: true,
    },
    {
      name: "No. of Forms",
      selector: (row) => row.noofFroms,
      sortable: true,
    },
    {
      name: "Plan Duration",
      selector: (row) => row.days + " days",
      sortable: true,
    },
  ];

  const getallpackages = async () => {
    try {
      const response = await fetch(
        "https://zemixbe.onrender.com/api/package/getallpackages",
        {
          method: "GET",
          headers: {
            "Content-Type": "application",
          },
        }
      );
      const res = await response.json();
      setData(res.allpackages);
      setFilteredData(res.allpackages); // Initialize filteredData with all packages
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallpackages();
  }, []);

  useEffect(() => {
    if (!search) {
      // If search query is empty, show all data
      setFilteredData(data);
    } else {
      // Filter data based on search query
      const filteredResults = data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredData(filteredResults);
    }
  }, [search, data]);

  return (
    <>
      <Flex alignItems="center" justify="space-between">
        <Text fontSize="md">Packages</Text>

        <Link to="/addpackage">
          <Button colorScheme="blue">Add Package</Button>
        </Link>
      </Flex>
      <Center>
        <Box width={{ base: "90vw", md: "70vw" }} overflowX="auto" p={4}>
          <Center mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Packages
            </Text>
          </Center>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : (
            <DataTable
              columns={columns}
              data={filteredData} // Display filtered data
              pagination
              highlightOnHover
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
          )}
        </Box>
      </Center>
    </>
  );
}

export default Package;
