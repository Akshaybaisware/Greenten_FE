import React from "react";
import { Text } from "@chakra-ui/react";

function PdfPhotoAdding() {
  return (
    <>
      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        max={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
      />
      <Text>
        Upload Pdf :
        <input type="file" />
      </Text>
      <Text>
        Upload Sign Pdf :
        <input type="file" />
      </Text>
      <button>Submit</button>
    </>
  );
}

export default PdfPhotoAdding;
