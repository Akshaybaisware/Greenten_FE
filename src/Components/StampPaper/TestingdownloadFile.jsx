// import {
//     Box,
//     Heading,
//     Text,
//     Image,
//     Table,
//     Tr,
//     Td,
//     Input,
//     Button,
//     FormControl,
//     FormLabel,
//     Flex,
//   } from "@chakra-ui/react";
//   import { useLocation } from "react-router-dom";
//   // import image from "./SVG STAM.svg";
//   import frontpage from "../../assets/frontpage.jpg";
//   import { useEffect, useState,useRef  } from "react";

//   import axios from "axios";
//   import { useParams } from "react-router-dom";

//   import jsPDF from "jspdf";
//   import html2canvas from "html2canvas";
//   import { usePDF } from "react-to-pdf";
//   import sign from "../../assets/cropto stamp.svg";

//   const StampPaperViewTesting = () => {
//     const { toPDF, targetRef } = usePDF({ filename: "Legal-Agreement.pdf" });
//     const pdfRef = useRef();
//     const locationdata = useLocation();
//     const { id } = useParams();
//     console.log(id, "userId");
//     const appUrl = import.meta.env.VITE_APP_API_URL;
//     const [doc, setDoc] = useState(null);
//     const [inputField, setInputField] = useState({
//       name: "",
//       email: "",
//       startdate: "",
//       address: "",
//       photo: "",
//       signature: "",
//     });

//     const [photoPreview, setPhotoPreview] = useState(null);
//     const [signaturePreview, setSignaturePreview] = useState(null);
//     console.log(photoPreview);
//     const userId = localStorage.getItem("userId");

//     const [loader, setLoader] = useState(false);

//     const downlodePDF = async (photoPreview, signaturePreview) => {
//       console.log(downlodePDF, "downlodePD");
//       const capture = document.querySelector(".downLodeBox");
//       setLoader(true);

//       html2canvas(capture).then((canvas) => {
//         const imgData = canvas.toDataURL("img/png");
//         const doc = new jsPDF({
//           orientation: "portrait",
//           unit: "mm",
//           format: [canvas.width, canvas.height],
//           marginLeft: 0,
//           marginRight: 0,
//         });

//         const marginLeft = 0;
//         const marginTop = 0;
//         const contentWidth = doc.internal.pageSize.getWidth() - 2 * marginLeft;
//         const contentHeight = doc.internal.pageSize.getHeight() - 2 * marginTop;

//         const aspectRatio = canvas.width / canvas.height;

//         let imgWidth = contentWidth; // Set the initial image width to content width

//         // Adjust the image width based on the viewport width
//         const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
//         if (viewportWidth < contentWidth) {
//           imgWidth = viewportWidth; // Set the image width to the viewport width
//         }

//         let imgHeight = imgWidth / aspectRatio;

//         if (imgHeight > contentHeight) {
//           imgHeight = contentHeight;
//           imgWidth = contentHeight * aspectRatio;
//         }

//         const imgX = marginLeft + (contentWidth - imgWidth) / 2; // Center the image horizontally
//         const imgY = marginTop + (contentHeight - imgHeight) / 2;

//         doc.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);

//         // Adjust positions for photoPreview and signaturePreview
//         const photoX = marginLeft + 520;
//         const photoY = doc.internal.pageSize.getHeight() - 580;
//         const signatureX = marginLeft + 850;
//         const signatureY = doc.internal.pageSize.getHeight() - 580;

//         if (photoPreview) {
//           doc.addImage(photoPreview, "JPEG", photoX, photoY, 270, 345);
//         }
//         if (signaturePreview) {
//           doc.addImage(signaturePreview, "PNG", signatureX, signatureY, 270, 345);
//         }

//         setLoader(false);
//         doc.save("Agreement.pdf");
//       });
//     };

//     const handlePhotoChange = (e) => {
//       const selectedPhoto = e.target.files[0];
//       setPhoto(selectedPhoto);
//       setPhotoPreview(URL.createObjectURL(selectedPhoto));
//     };

//     const handleSignatureChange = (e) => {
//       const selectedSignature = e.target.files[0];
//       setSignature(selectedSignature);
//       setSignaturePreview(URL.createObjectURL(selectedSignature));
//     };

//     // useEffect to call
//     useEffect(() => {
//       const fetchUserDetails = async () => {
//         try {
//           const response = await axios.post(
//             `http://localhost:5000/api/aggriment/getaggrimentdetails`,
//             {
//               //email:
//               //locationdata?.state?.data?.email || "kaustubhraut135@gmail.com",
//               email: id,
//             }
//           );
//           const data = response.data;
//           console.log(response.data.data.signature, "signmature");
//           console.log(data, "data hai ye");
//           console.log(data?.User);
//           const startDate = response.data.data?.startdate ? new Date(response.data.data.startdate).toLocaleDateString() : '';
//           //console.log(`${appUrl} / data?.signature`);
//           setInputField({
//             name: response.data.data?.name,
//             email: response.data.data?.email,
//             // startdate: response.data.data?.startdate,
//             startdate: startDate,
//             address: response.data.data?.address,
//             signature: response.data.data?.signature,
//             photo: response.data.data?.photo,
//           });
//           console.log(inputField, "inputField");
//           setPhotoPreview(response.data.data.photo);
//           setSignaturePreview(response.data.data?.signature);

//           console.log(photoPreview, "photoPreview");
//           console.log(signaturePreview, "signaturePreview");
//         } catch (error) {
//           console.error("Error fetching user details:", error);
//         }
//       };

//       fetchUserDetails();
//     }, [id]);

//     const onChangeHandler = (e) => {
//       const { name, value } = e.target;

//       setInputField({
//         ...prevValue,
//         [name]: value,
//       });
//     };
//     console.log("onChangeHandler", onChangeHandler);

//     const handleFileChange = (e, field) => {
//       const file = e.target.files[0];

//       // Check if a file is selected
//       if (file) {
//         // Read the file as a data URL
//         const reader = new FileReader();
//         reader.onload = () => {
//           setInputField({
//             ...inputField,
//             [field]: reader.result,
//           });
//         };
//         reader.readAsDataURL(file);
//       }
//     };

//     return (
//       <>
//         <div  className="downLodeBox">
//           <div

//         //   ref={targetRef}

//           >

//           <div>
//         <p>

//               meaningfully described in the column Scope of Work, through their
//               principals. AND WHEREAS the Business Associate is engaged inter
//               alias, in the business of providing a wide Spectrum of online form
//               filling & services. The Business Associate has acquired the
//               necessary expertise and developed the requisite skill base and
//               infrastructure for successful execution of Form Filling Projects.
//               This Agreement represents the business Agreement and operational
//               understandings between the parties and shall remain in effect for a
//               period of ELEVEN MONTHS from the date of execution hereof or from
//               the date of providing the first data whichever is later & can be
//               extended for the period as mutually agreed upon, for the purpose
//               <br />
//               <br />
//               {/* <p color="red" fontSize={{ base: "1rem", md: "1rem" }}>
//                 NOW THIS AGREEMENT WITNESSETH AS FOLLOWS: BOTH PARTIES ARE
//                 MUTUALLY AGREE FOR THE FOLLOWING POINTS.
//               </p> */}
//              <>
//               NOW THIS AGREEMENT WITNESSETH AS FOLLOWS: BOTH PARTIES ARE
//                 MUTUALLY AGREE FOR THE FOLLOWING POINTS.

//               <br />
//               1. Main Purpose: The Original data will be available online on
//               website provided by Cropton Enterprise at the time of signup. You are
//               required to feed the provided data field wise online as per the
//               guidelines. Data supply and preservation of the output file is done
//               online on real time basis.
//               <br />
//               <br /> 2. Compensation: For the Form Filling services rendered by
//               the Business Associate, they shall be entitled for payment of price
//               38 RS (INR) per form (if you achieved cut-off above 450) The
//               Business Associate shall raise invoice after completion of work with
//               the data. The Invoice can be raised through email. Q.C. report will
//               be provided in 72 Hrs. International Working Days from the date of
//               submission.
//               <br />
//               <br />
//               3. Payouts: Client will provide workload of 480 FORMS 5 Days. This
//               MOU has been signed for 1 system.
//               <br />
//               <br />
//               4. SERVICES: - Business Associate will get single id to work on and
//               business associate can work 24X7 on this id.
//               <br />
//               <br />
//               5. Time Period for work completion: you have 5 days (include
//               holidays) to complete the New work and Second Party has to send it
//               to First Party. The First Party shall give an accuracy report within
//               72 hrs. For the New Work, after submissions as per technical
//               specifications which are included in this agreement with accuracy
//               parameters
//               <br />
//               <br /> 6. Client agrees to provide formats and other information for
//               processing the job to Business Associate at the time of providing
//               the data.
//               <br />
//               <br />
//               7. Telecommunication cost applicable at each end shall be borne by
//               the respective parties. 8. Business Associate will execute the data
//               processing work provided by Client through experienced persons in
//               such manner so as to carry out the work efficiently at minimum of
//               90% accuracy for out files.
//               <br />
//               <br />
//               <p
//                 style={{
//                   color: "red",
//                 }}
//               >
//                 If you want Extra days to complete the project than you need to
//                 pay extension charges to the company.
//               </p>
//               {/* ... (rest of the Background section) */}
//             </p>
//             <p>
//               <br />
//               9. This agreement represents the business Agreement and operational
//               understandings between the parties and shall remain in effect for a
//               period of Eleven months from the date of execution hereof. The
//               clients' specifications in terms of quality and other parameters
//               that shall be issued by the Client/their principals from time to
//               time and acknowledged by the Business Associate shall be read with
//               this agreement.
//               <br />
//               <br />
//               10. Termination Clauses: - If you fail to submit data on time or, If
//               fails to give accuracy in output files. Company reserves the right
//               to terminate the agreement with immediate effect. And PEXIV will not
//               be responsible for any further data and payment to the Business
//               Associate.
//               <br />
//               <br />- If company found that there are multiple logins of a single
//               I.D., The company will not be responsible for the corruption of the
//               data in both online and offline modules. And your I.D. will get
//               terminated without any intimation. If we find any 2 login/ logout
//               together, 2 IP address without login/ logout, browser upgrade/
//               degrade without login / logout then ID will be terminate without any
//               prior intimation.
//               <br />
//               <br />- If any kind of malfunctioning found in the work then company
//               reserved right to take trail of your work for a day.
//               <br />
//               <br />- If you break the company rules & regulations means your id
//               is get terminate, company will not do any financial transaction with
//               you.
//               <br />
//               <br />
//               11. No modification of the terms of this AGREEMENT shall be valid
//               unless it is in writing and signed by all the parties.
//               <br />
//               <br />
//               12. Force Majeure: If the rendition of the Form Filling Services is
//               hampered due to earthquake, flood, tempest, civil riotsor Act of God
//               then the Business Associate shall be absolved of its obligations
//               hereunder till normalcy is restored after the cessation of the
//               aforementioned contingencies. The Business Associate shall likewise
//               be absolved if rendition of the services is hampered due to a strike
//               called by the date entry operators engaged by the Business
//               Associate, violence or political turbulence or for any other reason
//               of a similar nature, which is beyond the control of the Business
//               Associate.
//               <br />
//               <br />
//               13. Severability: Unenforceability of any provision of this
//               Agreement shall not affect any other provisions herein contained;
//               instead, this Agreement shall be construed as if such unenforceable
//               provision had not been contained herein.
//               <br />
//               <br />
//               14. Variation: Except as otherwise expressly provided in this
//               Agreement, this Agreement may not be changed or modified in any way
//               after it has been signed, except in writing signed by or on behalf
//               of both of the parties.
//               <br />
//               <br />
//               15. Dispute Resolution & Jurisdiction: In the event of any dispute
//               or difference arising between the parties hereto relating to or
//               arising out of this Agreement, including the implementation,
//               execution, interpretation, rectification, validity, enforceability,
//               termination or rescission thereof, including the rights, obligations
//               or liabilities of the parties hereto, the same will be adjudicated
//               and determined by arbitration. The Indian Arbitration & Conciliation
//               Act, 1996 or any statutory amendment or re-enactment thereof in
//               force in India, shall govern the reference. Both parties shall
//               appoint their respective arbitrator, and both arbitrators thus
//               appointed should appoint the third Arbitrator who shall function as
//               the presiding Arbitrator. The venue of arbitration shall be Udaipur,
//               Rajasthan. The Courts in the city of Rajasthan shall have exclusive
//               jurisdiction to entertain try and determine the same.
//               <br />
//               <br /> 16. Both the parties hereby agree neither to Circumvent or
//               nor to disclose the identities, Information as well as the essence
//               of the project etc of each other's/Principals, clients etc. to any
//               other Third party and neither of us will approach each otherâ€™s
//               contracts as identified from time to time.

//             </p>
//           </div>

//           {/* Commencement Date and Term Section */}
//           <div>
//             <h1>

//               PRIMARY NOTE
//             </h1>
//             <p>

//               (A) In the matter of fact failure, not submitted or succeed company
//               is entitled to receive amount by any cost. If you achieve the
//               accuracy which mentioned above, then Utility charges will be deduct
//               from your work payment and if you fail to achieve accuracy in given
//               timeline, then also you have to pay as a liability which describe
//               above.
//               <br />
//               <br />
//               (B) This charges related to service, development and maintenance
//               cost of the platform where you working online.
//               <br />
//               <br /> (c) If you deny paying the said amount then company will take
//               this matter legally & all the legal expenses will be clear by your
//               side, company is not liable for the same.
//             </p>
//           </div>

//           <div>
//              <h1>

//               Required Accuracy by the company:
//             </h1>
//             <p>
//               You must have to provide 90% accuracy in form filling work (480
//               Forms) in 5 Days. if you are fail to provide 90% accuracy, you must
//               have to pay registration amount
//               <br />
//               <br /> Registration Amount :  5500 (Per Month Basis) INR. Reg. Amount
//               Will Deduct From Your Salary per month Salary (Weekly) : 18240
//               INR
//               <br />
//               <br />
//               <p style={{ color: "red" }}>
//                 Below cut off - you are not qualified for payment & id will be
//                 terminating by server side.
//               </p>

//             </p>
//           </div>

//           <div>
//           <p
//               style={{
//                 fontWeight: "bold", // Add this line to make the text more bold
//               }}
//             >
//               IN WITNESS WHEREOF
//             </p>
//             <p>
//               the parties hereto have executed these presents on the date
//               hereinbefore written:
//             </p>
//             <p
//               style={{
//                 fontWeight: "bold",
//               }}
//             >
//               testing I hereby affirm by my signature that I have read this Work
//               from Home Agreement, and understand and agree to all of its
//               provisions. The Work from Home Agreement itself is not a contract of
//               employment and may not be construed as one. I understand that I am
//               accountable to all previous confidentiality agreements, policies and
//               procedures of the company. I have read a copy of the Work from Home
//               Policy. I understand all the rules & regulations which are mentioned
//               in agreement and I am ready to do work with Cropton Enterprise.
//             </p>
//           </div>

//           <div>
//           <p>
//               Employer : -
//             </p>
//             <p>
//               Name : Cropton Service <br />
//               Email : helplinezxservicewww@gmail.comhelplinessrvice156@gmail.com <br />
//               Address :  block number: 23 Hanuman Nagar Ajmer Road S.O, Jaipur, 302006
//             </p>
//           </div>
//           <div
//              >

//                 <p fontSize="md">Email: {inputField.email}</p>

//                 <p fontSize="md">Start-Date: {inputField.startdate}</p>

//               </div>

//           {/* <Box width={["200px", "400px"]}>
//             <Image src={sign} alt="Stamp" />
//           </Box>

//             <Box>

//               <Table
//               bg="red"
//               mt={"1rem"}   w={["350px", "700px"]} >
//                 <Tr>
//                   <Td>
//                     <Box onChange={handleSignatureChange}>
//                       <Text mb={"10px"}>Signature</Text>
//                       {signaturePreview && (
//                         <Image
//                           src={signaturePreview}
//                           alt="Signature Preview"
//                           w="25%"
//                         />
//                       )}
//                     </Box>
//                   </Td>
//                   <Td>
//                     <Box  onChange={handlePhotoChange}>
//                       <Text mb={"10px"}>Photo</Text>
//                       {photoPreview && (
//                         <Image src={photoPreview} alt="Photo Preview" w="20%" />
//                       )}
//                     </Box>
//                   </Td>
//                 </Tr>
//               </Table>
//             </Box> */}
//             <div >
//                   <div

//                  >
//                       {/* <Image src={sign} alt="Stamp" /> */}
//                   </div>
//                   <div display="flex" flexDirection="row">
//                   <div onChange={handleSignatureChange}>
//                           <p mb={"10px"}>Signature</p>
//                           {/* <input type="file" onChange={handleSignatureChange} /> */}
//                           {signaturePreview && (
//                               <Image src={signaturePreview} alt="Signature Preview" />
//                           )}
//                       </div>
//                       <div  onChange={handlePhotoChange}>
//                           <p mb={"10px"}>Photo</p>

//                           {photoPreview && (
//                               <Image src={photoPreview} alt="Photo Preview"/>
//                           )}
//                       </div>
//                   </div>
//               </div>
//           </div>
//           <div>
//             {/* <Button

//             //    onClick={() => downloadPDF()}
//             // onClick={() => toPDF()}
//             onClick={downloadPDF}
//               //downlodePDF(photoPreview, signaturePreview)}
//               colorScheme="teal"
//               variant="solid"
//               mt="4"
//               mb="1rem"
//             >
//               Download
//             </Button> */}
//                 <Button
//               marginBottom={"1rem"}
//               onClick={() => downlodePDF(photoPreview, signaturePreview)}
//               disabled={!(loader === false)}
//               mt={"1rem"}
//               ml={"1.6rem"}
//               bg={"lightgreen"}
//               _hover={{ background: "gray", color: "white" }}
//             >
//               {loader ? (
//                 <span>Downloading</span>
//               ) : (
//                 <span>Download Your Agreement</span>
//               )}
//             </Button>
//           </div>
//         </div>
//       </>
//     );
//   };

//   export default StampPaperViewTesting;

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";

const StampPaperViewTesting = () => {
  const { id } = useParams();
  console.log(id, "userId");
  const appUrl = import.meta.env.VITE_APP_API_URL;
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    startdate: "",
    address: "",
    photo: "",
    signature: "",
  });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [loader, setLoader] = useState(false);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhotoPreview(URL.createObjectURL(selectedPhoto));
  };

  const handleSignatureChange = (e) => {
    const selectedSignature = e.target.files[0];
    setSignaturePreview(URL.createObjectURL(selectedSignature));
  };

  const downlodePDF = async (photoPreview, signaturePreview) => {
    const capture = document.querySelector(".downLodeBox");
    setLoader(true);

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [canvas.width, canvas.height],
        marginLeft: 0,
        marginRight: 0,
      });

      const marginLeft = 0;
      const marginTop = 0;
      const contentWidth = doc.internal.pageSize.getWidth() - 2 * marginLeft;
      const contentHeight = doc.internal.pageSize.getHeight() - 2 * marginTop;

      const aspectRatio = canvas.width / canvas.height;

      let imgWidth = contentWidth;

      const viewportWidth = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      if (viewportWidth < contentWidth) {
        imgWidth = viewportWidth;
      }

      let imgHeight = imgWidth / aspectRatio;

      if (imgHeight > contentHeight) {
        imgHeight = contentHeight;
        imgWidth = contentHeight * aspectRatio;
      }

      const imgX = marginLeft + (contentWidth - imgWidth) / 2;
      const imgY = marginTop + (contentHeight - imgHeight) / 2;

      doc.addImage(imgData, "PNG", imgX, imgY, imgWidth, imgHeight);

      const photoX = marginLeft + 120;
      const photoY = doc.internal.pageSize.getHeight() - 180;
      const signatureX = marginLeft + 550;
      const signatureY = doc.internal.pageSize.getHeight() - 180;

      if (photoPreview) {
        doc.addImage(photoPreview, "JPEG", photoX, photoY, 270, 345);
      }
      if (signaturePreview) {
        doc.addImage(signaturePreview, "PNG", signatureX, signatureY, 270, 345);
      }

      setLoader(false);
      doc.save("Agreement.pdf");
    });
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post(
          `https://zemixbe.onrender.com/api/aggriment/getaggrimentdetails`,
          {
            email: id,
          }
        );
        const data = response.data;
        const startDate = response.data.data?.startdate
          ? new Date(response.data.data.startdate).toLocaleDateString()
          : "";
        setInputField({
          name: response.data.data?.name,
          email: response.data.data?.email,
          startdate: startDate,
          address: response.data.data?.address,
          signature: response.data.data?.signature,
          photo: response.data.data?.photo,
        });
        setPhotoPreview(response.data.data.photo);
        setSignaturePreview(response.data.data?.signature);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id]);

  return (
    <>
      <div className="downLodeBox">
        <div>{/* Content goes here */}</div>

        <div>
          <div>
            <div>
              {/* Signature and Photo selection */}
              <div>
                <label htmlFor="signature">Signature</label>
                <input id="signature" onChange={handleSignatureChange} />
                {signaturePreview && (
                  <img src={signaturePreview} alt="Signature Preview" />
                )}
              </div>
              <div>
                <label htmlFor="photo">Photo</label>
                <input id="photo" onChange={handlePhotoChange} />
                {photoPreview && <img src={photoPreview} alt="Photo Preview" />}
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => downlodePDF(photoPreview, signaturePreview)}
              disabled={loader}
            >
              {loader ? "Downloading" : "Download Your Agreement"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StampPaperViewTesting;
