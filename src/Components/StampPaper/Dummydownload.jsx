// import axios from "axios";
// import React, { useState } from "react";

// function Dummydownload() {

//     const downloadPDF = () => {
//         fetch("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")
//           .then(response => {
//             return response.blob();
//           })
//           .then(blob => {
//             // Create a temporary link element
//             const url = window.URL.createObjectURL(new Blob([blob]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', 'downloaded.pdf');
    
//             // Append the link to the body
//             document.body.appendChild(link);
    
//             // Trigger the download
//             link.click();
    
//             // Clean up
//             link.parentNode.removeChild(link);
//             window.URL.revokeObjectURL(url);
//           })
//           .catch(error => {
//             console.error('Error downloading PDF:', error);
//           });
//       }



//   return (
//     <div className="text-center">
//       <button onClick={()=>{
//         downloadPDF()
//       }}>
// download
//       </button>
//     </div>
//   );
// }

// export default Dummydownload;


import React from 'react'

function Dummydownload() {
  return (
    <div width="1520px">Dummydownload

    </div>
  )
}

export default Dummydownload