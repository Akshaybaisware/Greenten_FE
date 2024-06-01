import React from "react";
import { useForm } from "react-hook-form";
import { VStack, Text, Box, Center } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Select } from "@chakra-ui/select";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toast = useToast();
  const navigate = useNavigate();

  const emailafterregisteration = async (email, id) => {
    try {
      console.log(email, id);
      const response = await axios.post(
        "https://zemixbe.onrender.com/api/user/sendconfirmmail",
        {
          email: email,
        }
      );
      console.log(response, "dassdwedaewd");
    } catch (error) {
      console.log(error.message, "error message");
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await fetch(
        "https://zemixbe.onrender.com/api/user/addclient",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseData = await response.json();
      console.log(responseData, "after egitser");
      if (responseData.isAdded) {
        toast({
          title: "Success",
          description: "Client added successfully",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        emailafterregisteration(responseData.client.email);
        navigate("/registeration");
      } else {
        toast({
          title: "Error",
          description: "Client Alredy Exists",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <VStack
    // display={"flex"}
    // justifyContent={"center"}
    // textAlign={"center"}
    // alignItems={"center"}
    // width={["100%" , "50%"]}
    // spacing={4} align="stretch">
    //   <h1>Add Client</h1>
    //   <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
    //     <VStack spacing={4} align="stretch" w="100%">
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="name">Name</FormLabel>
    //         <Input isRequired type="text" id="name" {...register("name")} />
    //       </FormControl>
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="address">Address</FormLabel>
    //         <Input isRequired type="text" id="address" {...register("address")} />
    //       </FormControl>
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="email">Email</FormLabel>
    //         <Input isRequired type="email" id="email" {...register("email")} />
    //       </FormControl>
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="mobile">Mobile No</FormLabel>
    //         <Input
    //           isRequired
    //           type="text"
    //           maxLength="10"
    //           id="mobile"
    //           {...register("mobile", {
    //             pattern: {
    //               value: /^[0-9]{10}$/,
    //               message: "Invalid Mobile Number",
    //             },
    //           })}
    //         />
    //       </FormControl>
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="plan">Plan</FormLabel>
    //         <Select id="plan" {...register("plan")}>
    //           <option value="-">Plan</option>
    //           <option value="480">480</option>
    //         </Select>
    //       </FormControl>
    //       <FormControl isRequired>
    //         <FormLabel htmlFor="selectPlan">Caller</FormLabel>
    //         <Select id="selectPlan" {...register("selectPlan")}>
    //           <option value="-">Caller</option>
    //           {[1, 2, 3, 4, 5, 6].map((num) => (
    //             <option key={num} value={num}>
    //               {num}
    //             </option>
    //           ))}
    //         </Select>
    //       </FormControl>
    //       <Button type="submit">Submit</Button>
    //     </VStack>
    //   </form>
    // </VStack>
    <Box m={"1rem"} mt={["8%", "0rem"]}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <VStack
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
          width={["100%", "50%"]}
          spacing={4}
          align="stretch"
        >
          <Text
            p={"0.6rem"}
            borderRadius={"20%"}
            fontWeight={"800"}
            bg={"#b2b266"}
            color={"#ffffff"}
          >
            Add Client
          </Text>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <VStack spacing={4} align="stretch">
              <FormControl isRequired>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  isRequired
                  type="text"
                  id="name"
                  {...register("name")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="address">Address</FormLabel>
                <Input
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  isRequired
                  type="text"
                  id="address"
                  {...register("address")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  isRequired
                  type="email"
                  id="email"
                  {...register("email")}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="mobile">Mobile No</FormLabel>
                <Input
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  isRequired
                  type="text"
                  maxLength="10"
                  id="mobile"
                  {...register("mobile", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid Mobile Number",
                    },
                  })}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="plan">Plan</FormLabel>
                <Select
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  d="plan"
                  {...register("plan")}
                >
                  <option value="480">480</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="selectPlan">Caller</FormLabel>
                <Select
                  _hover={{ borderColor: "red" }}
                  border={"1px solid green"}
                  id="selectPlan"
                  {...register("selectPlan")}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </VStack>
            <Center>
              <Button
                mt={"1rem"}
                _hover={{ bg: " #ff6699" }}
                height={"3rem"}
                borderRadius={"10%"}
                fontWeight={"800"}
                bg={"#b2b266"}
                color={"#ffffff"}
                display={"flex"}
                justifyContent={"center"}
                textAlign={"center"}
                width={"30%"}
                type="submit"
              >
                Submit
              </Button>
            </Center>
          </form>
        </VStack>
      </div>
    </Box>
  );
}

export default AddClient;
