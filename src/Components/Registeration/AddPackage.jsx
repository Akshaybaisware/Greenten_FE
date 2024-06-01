import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";

function AddPackage() {
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const packagename = useRef(null); // Initialize with null
  const noOfForms = useRef(null); // Initialize with null
  const days = useRef(null); // Initialize with null

  const handlesubmitpackage = async () => {
    try {
      console.log("inside functions");
      console.log(
        "values",
        packagename.current.value,
        noOfForms.current.value,
        days.current.value
      );
      const response = await fetch(
        "https://zemixbe.onrender.com/api/package/addpackage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            packagename: packagename.current.value,
            noofFroms: noOfForms.current.value,
            days: days.current.value,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.isAdded) {
        toast({
          title: "Success",
          description: "Package added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Error",
          description: "Package not added",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Package not added",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      console.log(error.message);
    }
  };

  const onSubmit = (data) => {
    console.log(data); // You can handle form submission logic here
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    <VStack spacing={4}>
      <FormControl>
        <FormLabel htmlFor="packageName">Package Name</FormLabel>
        <Input
          ref={packagename}
          type="text"
          // id="packageName"
          // {...register("packageName")}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="noOfForms">No Of Forms</FormLabel>
        <Input
          ref={noOfForms}
          type="text"
          // id="noOfForms"
          // {...register("noOfForms")}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="days">Days</FormLabel>
        <Input
          ref={days}
          type="text"
          // id="days"
          // {...register("days")}
        />
      </FormControl>
      <Button type="button" onClick={handlesubmitpackage}>
        Add Package
      </Button>
    </VStack>
    // </form>
  );
}

export default AddPackage;
