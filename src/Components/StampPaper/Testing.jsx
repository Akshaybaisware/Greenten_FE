// import { useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
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

// function Testing() {
//   const [loader, setLoader] = useState(false);

//   const downloadPDF = () => {
//     const capture = document.querySelector('.actual-receipt');
//     setLoader(true);
//     html2canvas(capture).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png'); // 'img/png' should be 'image/png'
//       const doc = new jsPDF('p', 'mm', 'a4');
//       const componentWidth = doc.internal.pageSize.getWidth();
//       const componentHeight = doc.internal.pageSize.getHeight();
//       doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
//       setLoader(false);
//       doc.save('receipt.pdf');
//     });
//   };

//   return (
// //     <Box 
        
          
// //     //   ref={targetRef}
    
// //       >
// //       <Box>
// //         {/* <Box
        
// //         >
// //           <Image src={frontpage} alt="Description of the image" />
// //         </Box> */}
// //       </Box>

// //       <Box>
// //     <Text>

// //           meaningfully described in the column Scope of Work, through their
// //           principals. AND WHEREAS the Business Associate is engaged inter
// //           alias, in the business of providing a wide Spectrum of online form
// //           filling & services. The Business Associate has acquired the
// //           necessary expertise and developed the requisite skill base and
// //           infrastructure for successful execution of Form Filling Projects.
// //           This Agreement represents the business Agreement and operational
// //           understandings between the parties and shall remain in effect for a
// //           period of ELEVEN MONTHS from the date of execution hereof or from
// //           the date of providing the first data whichever is later & can be
// //           extended for the period as mutually agreed upon, for the purpose
// //           <br />
// //           <br />
// //           {/* <p color="red" fontSize={{ base: "1rem", md: "1rem" }}>
// //             NOW THIS AGREEMENT WITNESSETH AS FOLLOWS: BOTH PARTIES ARE
// //             MUTUALLY AGREE FOR THE FOLLOWING POINTS.
// //           </p> */}
// //          <Text>
// //           NOW THIS AGREEMENT WITNESSETH AS FOLLOWS: BOTH PARTIES ARE
// //             MUTUALLY AGREE FOR THE FOLLOWING POINTS.
// // </Text>
// //           <br />
// //           1. Main Purpose: The Original data will be available online on
// //           website provided by Cropton Enterprise at the time of signup. You are
// //           required to feed the provided data field wise online as per the
// //           guidelines. Data supply and preservation of the output file is done
// //           online on real time basis.
// //           <br />
// //           <br /> 2. Compensation: For the Form Filling services rendered by
// //           the Business Associate, they shall be entitled for payment of price
// //           38 RS (INR) per form (if you achieved cut-off above 450) The
// //           Business Associate shall raise invoice after completion of work with
// //           the data. The Invoice can be raised through email. Q.C. report will
// //           be provided in 72 Hrs. International Working Days from the date of
// //           submission.
// //           <br />
// //           <br />
// //           3. Payouts: Client will provide workload of 480 FORMS 5 Days. This
// //           MOU has been signed for 1 system.
// //           <br />
// //           <br />
// //           4. SERVICES: - Business Associate will get single id to work on and
// //           business associate can work 24X7 on this id.
// //           <br />
// //           <br />
// //           5. Time Period for work completion: you have 5 days (include
// //           holidays) to complete the New work and Second Party has to send it
// //           to First Party. The First Party shall give an accuracy report within
// //           72 hrs. For the New Work, after submissions as per technical
// //           specifications which are included in this agreement with accuracy
// //           parameters
// //           <br />
// //           <br /> 6. Client agrees to provide formats and other information for
// //           processing the job to Business Associate at the time of providing
// //           the data.
// //           <br />
// //           <br />
// //           7. Telecommunication cost applicable at each end shall be borne by
// //           the respective parties. 8. Business Associate will execute the data
// //           processing work provided by Client through experienced persons in
// //           such manner so as to carry out the work efficiently at minimum of
// //           90% accuracy for out files.
// //           <br />
// //           <br />
// //           <p
// //             style={{
// //               color: "red",
// //             }}
// //           >
// //             If you want Extra days to complete the project than you need to
// //             pay extension charges to the company.
// //           </p>
// //           {/* ... (rest of the Background section) */}
// //         </Text>
// //         <Text>
// //           <br />
// //           9. This agreement represents the business Agreement and operational
// //           understandings between the parties and shall remain in effect for a
// //           period of Eleven months from the date of execution hereof. The
// //           clients' specifications in terms of quality and other parameters
// //           that shall be issued by the Client/their principals from time to
// //           time and acknowledged by the Business Associate shall be read with
// //           this agreement.
// //           <br />
// //           <br />
// //           10. Termination Clauses: - If you fail to submit data on time or, If
// //           fails to give accuracy in output files. Company reserves the right
// //           to terminate the agreement with immediate effect. And PEXIV will not
// //           be responsible for any further data and payment to the Business
// //           Associate.
// //           <br />
// //           <br />- If company found that there are multiple logins of a single
// //           I.D., The company will not be responsible for the corruption of the
// //           data in both online and offline modules. And your I.D. will get
// //           terminated without any intimation. If we find any 2 login/ logout
// //           together, 2 IP address without login/ logout, browser upgrade/
// //           degrade without login / logout then ID will be terminate without any
// //           prior intimation.
// //           <br />
// //           <br />- If any kind of malfunctioning found in the work then company
// //           reserved right to take trail of your work for a day.
// //           <br />
// //           <br />- If you break the company rules & regulations means your id
// //           is get terminate, company will not do any financial transaction with
// //           you.
// //           <br />
// //           <br />
// //           11. No modification of the terms of this AGREEMENT shall be valid
// //           unless it is in writing and signed by all the parties.
// //           <br />
// //           <br />
// //           12. Force Majeure: If the rendition of the Form Filling Services is
// //           hampered due to earthquake, flood, tempest, civil riotsor Act of God
// //           then the Business Associate shall be absolved of its obligations
// //           hereunder till normalcy is restored after the cessation of the
// //           aforementioned contingencies. The Business Associate shall likewise
// //           be absolved if rendition of the services is hampered due to a strike
// //           called by the date entry operators engaged by the Business
// //           Associate, violence or political turbulence or for any other reason
// //           of a similar nature, which is beyond the control of the Business
// //           Associate.
// //           <br />
// //           <br />
// //           13. Severability: Unenforceability of any provision of this
// //           Agreement shall not affect any other provisions herein contained;
// //           instead, this Agreement shall be construed as if such unenforceable
// //           provision had not been contained herein.
// //           <br />
// //           <br />
// //           14. Variation: Except as otherwise expressly provided in this
// //           Agreement, this Agreement may not be changed or modified in any way
// //           after it has been signed, except in writing signed by or on behalf
// //           of both of the parties.
// //           <br />
// //           <br />
// //           15. Dispute Resolution & Jurisdiction: In the event of any dispute
// //           or difference arising between the parties hereto relating to or
// //           arising out of this Agreement, including the implementation,
// //           execution, interpretation, rectification, validity, enforceability,
// //           termination or rescission thereof, including the rights, obligations
// //           or liabilities of the parties hereto, the same will be adjudicated
// //           and determined by arbitration. The Indian Arbitration & Conciliation
// //           Act, 1996 or any statutory amendment or re-enactment thereof in
// //           force in India, shall govern the reference. Both parties shall
// //           appoint their respective arbitrator, and both arbitrators thus
// //           appointed should appoint the third Arbitrator who shall function as
// //           the presiding Arbitrator. The venue of arbitration shall be Udaipur,
// //           Rajasthan. The Courts in the city of Rajasthan shall have exclusive
// //           jurisdiction to entertain try and determine the same.
// //           <br />
// //           <br /> 16. Both the parties hereby agree neither to Circumvent or
// //           nor to disclose the identities, Information as well as the essence
// //           of the project etc of each other's/Principals, clients etc. to any
// //           other Third party and neither of us will approach each otherâ€™s
// //           contracts as identified from time to time.
      
         
// //         </Text>
// //       </Box>

// //       {/* Commencement Date and Term Section */}
// //       <Box>
// //         <Heading 
        
// //         padding={["1rem" , "3rem"]} as="h2" mb={4}>
       
// //           PRIMARY NOTE
// //         </Heading>
// //         <Text>
         
       
// //           (A) In the matter of fact failure, not submitted or succeed company
// //           is entitled to receive amount by any cost. If you achieve the
// //           accuracy which mentioned above, then Utility charges will be deduct
// //           from your work payment and if you fail to achieve accuracy in given
// //           timeline, then also you have to pay as a liability which describe
// //           above.
// //           <br />
// //           <br />
// //           (B) This charges related to service, development and maintenance
// //           cost of the platform where you working online.
// //           <br />
// //           <br /> (c) If you deny paying the said amount then company will take
// //           this matter legally & all the legal expenses will be clear by your
// //           side, company is not liable for the same.
// //         </Text>
// //       </Box>

// //       <Box>
// //          <Heading>
         
// //           Required Accuracy by the company:
// //         </Heading>
// //         <Text>
// //           You must have to provide 90% accuracy in form filling work (480
// //           Forms) in 5 Days. if you are fail to provide 90% accuracy, you must
// //           have to pay registration amount
// //           <br />
// //           <br /> Registration Amount :  5500 (Per Month Basis) INR. Reg. Amount
// //           Will Deduct From Your Salary per month Salary (Weekly) : 18240
// //           INR
// //           <br />
// //           <br />
// //           <p style={{ color: "red" }}>
// //             Below cut off - you are not qualified for payment & id will be
// //             terminating by server side.
// //           </p>
         
     
// //         </Text>
// //       </Box>

// //       <Box>
// //       <Text
// //           style={{
// //             fontWeight: "bold", // Add this line to make the text more bold
// //           }}
// //         >
// //           IN WITNESS WHEREOF
// //         </Text>
// //         <Text>
// //           the parties hereto have executed these presents on the date
// //           hereinbefore written:
// //         </Text>
// //         <Text
// //           style={{
// //             fontWeight: "bold",
// //           }}
// //         >
// //           testing I hereby affirm by my signature that I have read this Work
// //           from Home Agreement, and understand and agree to all of its
// //           provisions. The Work from Home Agreement itself is not a contract of
// //           employment and may not be construed as one. I understand that I am
// //           accountable to all previous confidentiality agreements, policies and
// //           procedures of the company. I have read a copy of the Work from Home
// //           Policy. I understand all the rules & regulations which are mentioned
// //           in agreement and I am ready to do work with Cropton Enterprise.
// //         </Text>
// //       </Box>

// //       <Box>
// //       <Text>
// //           Employer : -
// //         </Text>
// //         <Text>
// //           Name : Cropton Service <br />
// //           Email : helplinezxservicewww@gmail.comhelplinessrvice156@gmail.com <br />
// //           Address :  block number: 23 Hanuman Nagar Ajmer Road S.O, Jaipur, 302006
// //         </Text>
// //       </Box>
// //       <Box
// //          >
// //           {/* <FormControl   >
// //             <Text fontSize="md">Email: {inputField.email}</Text>
// //           </FormControl>
// //           <FormControl >
// //             <Text fontSize="md">Start-Date: {inputField.startdate}</Text>
// //           </FormControl> */}
// //           </Box>

// //       {/* <Box width={["200px", "400px"]}>
// //         <Image src={sign} alt="Stamp" />
// //       </Box>
     

// //         <Box>
      

// //           <Table 
// //           bg="red"
// //           mt={"1rem"}   w={["350px", "700px"]} >
// //             <Tr>
// //               <Td>
// //                 <Box onChange={handleSignatureChange}>
// //                   <Text mb={"10px"}>Signature</Text>
// //                   {signaturePreview && (
// //                     <Image
// //                       src={signaturePreview}
// //                       alt="Signature Preview"
// //                       w="25%"
// //                     />
// //                   )}
// //                 </Box>
// //               </Td>
// //               <Td>
// //                 <Box  onChange={handlePhotoChange}>
// //                   <Text mb={"10px"}>Photo</Text>
// //                   {photoPreview && (
// //                     <Image src={photoPreview} alt="Photo Preview" w="20%" />
// //                   )}
// //                 </Box>
// //               </Td>
// //             </Tr>
// //           </Table>
// //         </Box> */}
// //         <Button
  
                          
// //   //    onClick={() => downloadPDF()}
// //   // onClick={() => toPDF()}
// //   onClick={downloadPDF}
// //     //downlodePDF(photoPreview, signaturePreview)}
// //     colorScheme="teal"
// //     variant="solid"
// //     mt="4"
// //     mb="1rem"
// //   >
// //     Download
// //   </Button>
     
// //       </Box>
// <>
// <Box>hi</Box>
//         <Button
  
                          
 
//   onClick={downloadPDF}
    
//     colorScheme="teal"
//     variant="solid"
//     mt="4"
//     mb="1rem"
//   >
//     Download
//   </Button>
//   </>
//   );
// }

// export default Testing;



import {useState} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Box,
  Heading,
  Text,
  Image,
  Table,
  Tr,
  Td,
  Input,
  Button,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";


function Testing() {

  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.actual-receipt');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  return (
    <div className="wrapper">
   
      <div className="receipt-box">

          {/* actual receipt */}
          <div className="actual-receipt">
          <Box>hello i am chakra ui</Box>

            {/* organization logo */}
            <div className="receipt-organization-logo">
              {/* <img alt="logo" src={logo} /> */}
            </div>

            {/* organization name */}
            <h5>JS SOLUTIONS</h5>

            {/* street address and unit number */}
            <h6>
              ABC Street
              {' '}
              123
            </h6>

            {/* city province postal code */}
            <h6>
              Karachi
              {' '}
              Sindh
              {' '}
              75050
            </h6>

            {/* email-phone-and-website */}
            <div className="phone-and-website">
              <p>
                <a href={`mailto:anwarhamza919@gmail.com`}>
                  anwarhamza919@gmail.com
                </a>
              </p>
              <p>01234567890</p>
                  
              <p>
                <a
                  href="https://www.youtube.com/@jsSolutions"
                  target="blank"
                >
                  https://www.youtube.com/@jsSolutions
                </a>
              </p>
                  
            </div>

            <div className="colored-row first">
              <span>Payment Method</span>
              <span>Card Number</span>
            </div>

            <div className="data-row">
              <span className="font-weight">CREDIT</span>
              <span>************4444</span>
            </div>

            <div className="colored-row">
              <span>Campaign</span>
              <span>Amount</span>
            </div>

            <div className="data-row">
              <span className="font-weight">Dollar a Day for Sadaqa</span>
              <span>
                $
                {' '}
                50
              </span>
            </div>

            <div className="colored-row">
              <span>Transaction Details - Donations</span>
              <span />
            </div>

            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">
                  MID
                  :
                </span>
                {' '}
                1234567
              </span>
              <span>
                <span className="font-weight">
                  Sequence
                  {' '}
                  #:
                </span>
                {' '}
                SSSSSSSS
              </span>
            </div>

            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">
                  Invoice
                  {' '}
                  #:
                </span>
                {' '}
                AX1234ZVB5671234
              </span>
              <span>
                <span className="font-weight">
                  Created
                  :
                </span>
                {' '}
                2023-02-14 02:21:37
              </span>
            </div>
            <div className="data-row border-bottom">
              <span>
                <span className="font-weight">
                  Authentication
                  {' '}
                  #:
                </span>
                {' '}
                TEST
              </span>
              <span>
                <span className="font-weight">
                  Batch
                  {' '}
                  #:
                </span>
                {' '}
                1234
              </span>
            </div>
            <div className="data-row border-bottom">
              <span className="font-weight">
                Transaction:
                {' '}
                APPROVED - 00
                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

5
	paragraphs
	words
	bytes
	lists
	Start with 'Lorem
ipsum dolor sit amet...'

              </span>
              <span />
            </div>
            <div className="colored-row">
              <span>Thank You For Your Generous Donation</span>
              <span />
            </div>

          </div>
          {/* end of actual receipt */}

          {/* receipt action */}
          <div className="receipt-actions-div">
            <div className="actions-right">
              <button
                className="receipt-modal-download-button"
                onClick={downloadPDF}
                disabled={!(loader===false)}
              >
                {loader?(
                  <span>Downloading</span>
                ):(
                  <span>Download</span>
                )}

              </button> 
            </div>
          </div>

      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      
    </div>
  );
}

export default Testing;