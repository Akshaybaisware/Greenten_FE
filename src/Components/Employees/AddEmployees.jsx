// import React, { useState, useRef } from "react";
// import { useForm, Controller } from "react-hook-form";
// import {
//   Box,
//   Button,
//   Input,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   Flex,
//   Spacer,
//   useToast,
//   Center,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";

// function AddEmployees() {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const toast = useToast();

//   const onSubmit = (data) => {
//     console.log(data); // You can handle form submission here
//   };
//   const name = useRef();
//   const email = useRef();
//   const mobile = useRef();
//   const branch = useRef();
//   const address = useRef();
//   const designation = useRef();

//   const handleSubmitemployee = async (e) => {
//     try {
//       const response = await fetch(
//         "https://zemixbe.onrender.com/api/employee/addemployee",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: name.current.value,
//             email: email.current.value,
//             mobile: mobile.current.value,
//             branch: branch.current.value,
//             address: address.current.value,
//             designation: designation.current.value,
//           }),
//         }
//       );
//       const responseData = await response.json();
//       console.log(responseData);
//       if (responseData.isAdded) {
//         toast({
//           title: "Success",
//           description: "Employee added successfully",
//           status: "success",
//           duration: 3000,
//           position: "top",
//           isClosable: true,
//         });
//         navigate("/employees");
//       }
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Error adding employee",
//         status: "error",
//         duration: 3000,
//         position: "top",
//         isClosable: true,
//       });

//       console.error("Error adding employee:", error);
//     }
//   };
//   return (
//     <>
//       <Center mt={4} mb={4}>
//         Add Employees
//       </Center>
//       <Box>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Flex>
//             <Box flex="1" mr={4}>
//               <FormControl isInvalid={errors.name}>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Controller
//                   name="name"
//                   control={control}
//                   defaultValue=""
//                   // rules={{ required: "Name is required" }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="name"
//                       ref={name}
//                       placeholder="Enter your name"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.name && errors.name.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>

//             <Box flex="1" ml={4}>
//               <FormControl isInvalid={errors.mobileno}>
//                 <FormLabel htmlFor="email">Mobile No</FormLabel>
//                 <Controller
//                   name="text"
//                   control={control}
//                   defaultValue=""
//                   // rules={{
//                   //   required: "Mobile is required",
//                   //   pattern: {
//                   //     value: /^\S+@\S+$/i,
//                   //     message: "Invalid Mobile address",
//                   //   },
//                   // }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="mobile"
//                       ref={mobile}
//                       placeholder="Enter your Mobile"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.mobile && errors.mobile.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>
//           </Flex>

//           <Flex mt={4}>
//             <Box flex="1" mr={4}>
//               <FormControl isInvalid={errors.email}>
//                 <FormLabel htmlFor="designation">Email</FormLabel>
//                 <Controller
//                   name="email"
//                   control={control}
//                   defaultValue=""
//                   // rules={{ required: "email is required" }}
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="email"
//                       ref={email}
//                       placeholder="Enter your email"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.email && errors.email.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>

//             <Box flex="1" ml={4}>
//               <FormControl isInvalid={errors.branch}>
//                 <FormLabel htmlFor="branch">branch</FormLabel>
//                 <Controller
//                   name="branch"
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="branch"
//                       ref={branch}
//                       placeholder="Enter branch name"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.branch && errors.branch.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>
//           </Flex>

//           <Flex mt={4}>
//             <Box flex="1" ml={4}>
//               <FormControl isInvalid={errors.desiganation}>
//                 <FormLabel htmlFor="branch">Desiganation</FormLabel>
//                 <Controller
//                   name="desiganation"
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="desiganation"
//                       ref={designation}
//                       placeholder="Enter desiganation name"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.desiganation && errors.desiganation.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>

//             <Box flex="1" ml={4}>
//               <FormControl isInvalid={errors.address}>
//                 <FormLabel htmlFor="branch">Address</FormLabel>
//                 <Controller
//                   name="address"
//                   control={control}
//                   defaultValue=""
//                   render={({ field }) => (
//                     <Input
//                       {...field}
//                       id="address"
//                       ref={address}
//                       placeholder="Enter address name"
//                     />
//                   )}
//                 />
//                 <FormErrorMessage>
//                   {errors.address && errors.address.message}
//                 </FormErrorMessage>
//               </FormControl>
//             </Box>
//           </Flex>

//           {/* Other fields similarly */}

//           <Button
//             mt={4}
//             onClick={handleSubmitemployee}
//             colorScheme="teal"
//             type="submit"
//           >
//             Submit
//           </Button>
//         </form>
//       </Box>
//     </>
//   );
// }

// export default AddEmployees;
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  useToast,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function AddEmployees() {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const toast = useToast();
  const name = useRef();
  const email = useRef();
  const mobile = useRef();
  const branch = useRef();
  const address = useRef();
  const designation = useRef();

  const handleSubmitemployee = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://zemixbe.onrender.com/api/employee/addemployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          mobile: mobile.current.value,
          branch: branch.current.value,
          address: address.current.value,
          designation: designation.current.value,
        }),
      });
      const responseData = await response.json();
      if (responseData.isAdded) {
        toast({
          title: "Success",
          description: "Employee added successfully",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        navigate("/employees");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error adding employee",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Center mt={10} mb={4}>
        <Heading size="lg">Add Employees</Heading>
      </Center>
      <Box
        as="form"
        onSubmit={handleSubmitemployee}
        maxWidth="600px"
        mx="auto"
        p={4}
        boxShadow="md"
        borderRadius="md"
      >
        <FormControl isInvalid={errors.name} mb={4}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="name"
                ref={name}
                placeholder="Enter name"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="email"
                ref={email}
                placeholder="Enter email"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.mobile} mb={4}>
          <FormLabel htmlFor="mobile">Mobile</FormLabel>
          <Controller
            name="mobile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="mobile"
                ref={mobile}
                placeholder="Enter mobile"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.mobile && errors.mobile.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.branch} mb={4}>
          <FormLabel htmlFor="branch">Branch</FormLabel>
          <Controller
            name="branch"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="branch"
                ref={branch}
                placeholder="Enter branch"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.branch && errors.branch.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.address} mb={4}>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="address"
                ref={address}
                placeholder="Enter address"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.address && errors.address.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.designation} mb={4}>
          <FormLabel htmlFor="designation">Designation</FormLabel>
          <Controller
            name="designation"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                id="designation"
                ref={designation}
                placeholder="Enter designation"
                isFullWidth
              />
            )}
          />
          <FormErrorMessage>
            {errors.designation && errors.designation.message}
          </FormErrorMessage>
        </FormControl>

        <Button colorScheme="teal" width="full" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
}

export default AddEmployees;

