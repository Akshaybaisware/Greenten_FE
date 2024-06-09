// import { Box, Center, Text, Icon } from "@chakra-ui/react";
// import { CheckCircleIcon } from "@chakra-ui/icons";
// import React from "react";

// function StampPaperSubmission() {
//   return (
//     <Box textAlign="center" mt="10">
//       <Text fontWeight="bold">
//         Thank You for Submitting
//         <Icon as={CheckCircleIcon} ml="2" color="green.500" />
//       </Text>
//     </Box>
//   );
// }

// export default StampPaperSubmission;

import { Box, Center, Text, Icon, VStack } from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import React from "react";

function StampPaperSubmission() {
  return (
    <Box
      textAlign="center"
      mt="10"
      p="10"
      bgGradient="linear(to-r, green.200, blue.500)"
      borderRadius="md"
      boxShadow="xl"
    >
      <Center>
        <Icon as={CheckCircleIcon} boxSize="12" color="green.500" mb="5" />
      </Center>
      <Text fontWeight="bold" fontSize="2xl" fontFamily="Arial, sans-serif" color="white">
        Submission Successful!
        <Icon as={CheckCircleIcon} ml="2" color="green.300" />
      </Text>
      <Text mt="4" fontSize="lg" fontFamily="Arial, sans-serif" color="white">
        Thank you for your submission. We will review it and get back to you shortly.
      </Text>
      <Center mt="6">
        <VStack spacing="4">
          <Icon as={InfoIcon} boxSize="8" color="white" />
          <Text fontSize="md" fontFamily="Arial, sans-serif" color="white">
            If you have any questions, please contact support.
          </Text>
        </VStack>
      </Center>
    </Box>
  );
}

export default StampPaperSubmission;
