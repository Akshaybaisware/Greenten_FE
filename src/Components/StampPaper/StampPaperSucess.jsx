import { Box, Center, Text, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React from "react";

function StampPaperSubmission() {
  return (
    <Box textAlign="center" mt="10">
      <Text fontWeight="bold">
        Thank You for Submitting
        <Icon as={CheckCircleIcon} ml="2" color="green.500" />
      </Text>
    </Box>
  );
}

export default StampPaperSubmission;
