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
  useToast,
  Select,
  Center,
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import Front from "../../assets/Frontnew.jpg";
// import frontpage from "../../assets/frontpage.jpg";
// import sign from "../../assets/cropto stamp.svg";
import stamplogo from "../../assets/stamplogo.svg";
// import image from "./SVG STAM.svg";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StampPaper = () => {
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  // const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [signaturePreview, setSignaturePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
    setPhotoPreview(URL.createObjectURL(selectedPhoto));
  };

  const handleSignatureChange = (e) => {
    const selectedSignature = e.target.files[0];
    setSignature(selectedSignature);
    setSignaturePreview(URL.createObjectURL(selectedSignature));
  };

  const today = new Date();
  const todayFormatted = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFormatted = tomorrow.toISOString().split("T")[0]; // Format: YYYY-MM-DD

  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("in try 1");
      // const parts = date.split("/"); // Split the date string by '/'
      // const formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`; // Rearrange the date parts to YYYY-MM-DD format

      // const startDateObj = new Date(formattedDate); // Parse the string into a Date object
      // startDateObj.setDate(startDateObj.getDate() + 5); // Add 5 days to the date
      // const endDate = startDateObj.toISOString().slice(0, 10);

      const formData = new FormData();
      console.log(date, "startdate");

      formData.append("email", email);
      formData.append("signature", signature);
      formData.append("photo", photo);
      formData.append("startdate", date);
      console.log("in try 2");
      // formData.append("enddate", endDate);
      console.log(formData.values, "formdata");

      const config = {
        method: "post",
        url: `https://greentenbe-production.up.railway.app/api/user/add_terms`,
        data: formData,
      };

      const response = await axios(config);
      if (response.status === 200) {
        setLoading(false);
      }
      console.log(response, "resp");
      toast({
        position: "top",
        title: "Form Submitted Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/stampapersucess");
    } catch (error) {
      alert("Email Aredy Exist", error.message);
      setLoading(false);
    }
  };

  return loading ? (
    <Center height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  ) : (
    <>
      <Box>
        <Box display="flex" flexDirection="column" textAlign="center">
          <Box
            mx="auto"
            boxSize={{ base: "100%", md: "auto" }} // Adjusted to "auto" for non-base screen sizes
            objectFit="contain"
            mb={{ base: "2", lg: "0" }}
            maxWidth="100%" // Added maxWidth property
          >
            <Image src={Front} alt="Description of the image" />
          </Box>
        </Box>

        <Box>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["rem", "-1rem"]}
            padding={["1rem", "3rem"]}
          >
            FREELANCING AGREEMENT
            <br />
            <br />
            THIS GENERAL GREENTEN SERVICE AGREEMENT (THE AGREEMENT) DATED THIS
            AS OF GOVERNMENT FOR 2023 To 2024.
            <br />
            <br />
            THE FIRST PART OF THIS AGREEMENT IS Greenten SERVICE. THAT
            REGISTERED AT SHOP NO 168-169 SHAMBHAJI COMPLEX RING ROAD BIKANER
            RAJASTHAN
            <br />
            <br />
            THE SECOND PART OF THIS AGREEMENT IS PRANAV ULHAS CHAUDHRARY THAT
            LIVE AT AS ID PROOF OF THE INDIAN GOVERNMENT (CLIENT ADDRESS) S/O
            ULHAS CHAUDHRARY SOMNIWAS SOCIETY FLAT NO 8 I T COLONY ROAD OPP
            SHIVSENA SHAKHA VADAVALI SECTION AMBEMATH THANE MH-421501
            <br />
            <br />
            <Text fontSize={["0.8rem", "1.5rem"]}>POINT'S TO BE NOTE: -</Text>
            <br />
            * YOUR AGREEMENT IS MADE FOR 11 MONTHS WITH GREENTEN SERVICE
            COMPANY.
            <br />
            <br />
            A) The client thinks that the contractor has the necessary
            qualifications, experience and abilities toprovide service to the
            client.
            <br />
            B) The contractor is agreeable to provide such service to the client
            on the terms and conditions setout in this agreement
            <br />
            <br />
            n consideration of the matters described above and of the mutual
            benefits and obligations outlined in this agreement the receipt and
            sufficiency of which consideration is hereby acknowledged the client
            and the contractor agree as follows.
            <br />
            <br />
            1. Job title and description
            <br />
            1.1 The job duties, the client will be accepted to perform will be
            consisting of filling the forms as perthe data given by the online
            portal.
            <br />
            1.2 The client will perform any duties as requested by the
            contractor that are reasonable and thatare customarily performed by
            a person held in a similar position like this business.
            <br />
            1.3 The client agrees to abide by the contractor's rules and
            regulations, policies including thoseconcerning work schedules.
            <br />
            <br />
            <br />
            2. CLIENT REMUNERATION
            <br />
            <br />
            2.1 REMUNERATION: - - For the form filling service rendered by the
            client. The Clients shall beentitled to payments of price 40Rs.
            (INR) Max perform for the salary may vary from 22500/- INR The
            Client shall raise the invoice within 4 days after the successful
            completion of the project. The contractor will pay each project's
            amount within a maximum of 48 HRS, from the date of issue of the
            quality check report. the invoice can be raised by Email and by a
            report on the working website. Q.C. Report will be provided within
            24-72 Working hours from the date of submission
            <br />
            <br /> 2.2 Billing: - - contractor will provide a workload of
            Question Forms which the client shall complete thework within 4 days
            under the given criteria of this agreement. This Agreement has been
            signed for one system. The contractor will make the payment for the
            billing within 1 INTERNATIONAL
            <br />
            <br /> WORKING DAY from the date of raising the project subject to
            the quality check report.
            <br />
            <br />
            2.3 Accuracy: - contractor will provide Adequate feedback within 4
            Working Days for the date andon completion of quality check shall
            issue a Quality report. Both parties agree to assure the highest
            Quality of End service. Following Cycle for accuracy will be
            followed. cut off - 43 (in total) Above 90% @50/- INR perform. if
            below cut off or id is terminated then the client is supposed to
            clear the Registration Amount (6800/-) to the company.
            <br />
            <br />
            2.4 The Q.C. Department will Check the forms Randomly by the server.
            Until the submitted Slot isrejected above the cut-off criteria if
            the client makes any mistake, (Which includes but is not limited to
            spelling, Punctuation, Extra/Missing space, Extra/ Missing Line,
            skip by time etc. ) in a form that form will be rejected, Likewise
            Client has to maintain cut off or accuracy.
            <br />
            <br />
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-4rem", "-7rem"]}
            padding={["1rem", "3rem"]}
          >
            <br />
            3. Conflict of interest
            <br />
            <br />
            3.1 Application Fee(S): The Registration Amount of 4900/- INR. Will
            be deducted from the salary ifgenerated, and if the salary is not
            generated i.e If the client fails to complete the work. then he/she
            is liable to pay the same registration amount on their own. The
            client has to pay within 3 working days after The Q.C. Report. The
            client must start & complete his/her Work of form - filling Assigned
            to then by the contractor, the date of starting the project
            (selected by the client as per his/her convenience). In case of
            failure in starting of the work number of forms detected or
            incomplete submission of work is defined by the contractor then the
            Application fee(s), and NOC invoice needs to be cleared by the
            client. AS the contractor will have to face the Economic crisis in
            the business in case of failure of this project in any of the per
            this agreement
            <br />
            <br />
            3.2 ID ALLOCATION: - - Client will get a single ID to work on and
            the client can work 24*7 on this ID. If the software portal or the
            server of the company detects that there are multiple login
            Attempts/multiple IP Addresses of the account Modules .and The ID
            will get Terminated Without Any Intimation and the client needs to
            clear the server maintenance charge up to 6800/- INR. (Refundable
            Amount After Successfully done the work**) For That Particular
            Project As Per This Agreement.
            <br />
            <br />
            3.3 TAT (Turn Around Time): The Second Party Has 4 Days (Including
            Holidays) To Complete the New Work and Second Party Has to Send It
            To First Party Shall Give An Accuracy Report Within 1-2 Working days
            For The New Work, After Submission As Per Technical Specification
            Which Is Included In this Agreement With Accuracy Parameters.
            <br />
            <br />
            3.4 Client will Execute The data Processing Work provided by the
            contractor through experiencedpersons in such a manner to carry out
            the work efficiently at a minimum of 90% for our files.
            <br />
            <br />
            3.5 Contractor Agree to provide Formats and Other Information for
            Processing The job To Client Atthe time of Providing the Data and
            The Clint Agree with the format And Other information which is being
            processed to the particular.
            <br />
            <br />
            3.6 Client will Execute The data Processing Work provided by the
            contractor through experiencedpersons in such a manner to carry out
            the work efficiently at a minimum of 90% for our files.
            <br />
            <br />
            3.7 This Agreement Represent The business agreement and operation
            understanding between theparties and shall remain in effect for six
            months for the date of execution hereof the Contractor's
            Specification in terms of quality and other parameters that shall be
            issued by the Contractor. This General Greenten SERVICE Agreement
            Stands and is valid for 11 months, if the client or contractor is
            willing to end this business relationship they need to proceed with
            the termination of this agreement-based contract.
            <br />
          </Text>
        </Box>

        <Box mt={["-1rem", "-5rem"]}>
          <Text fontSize={["1rem", "1.8rem"]} padding={["1rem", "3rem"]} mb={4}>
            4. Termination Employment.
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1.5rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            4.1 Termination: - - If the Client fails to submit data on or If the
            client fails to give Accuracy in the Output file. The client
            reserves the right to terminate the agreement with immediate effect
            and Greenten Service freelancing services will not be responsible
            for any future data and payment to the Client and the Client will be
            liable to pay the maintenance Amount to the client as mentioned in
            "clause-3.1" In this agreement and client will also be liable to pay
            contractors expenses for a legal proceeding. Where there is just
            cause for termination, the Contractor may terminate the client's
            employment without notice as permitted by law.
            <br />
            <br />
            4.2 No modification of the term of this AGREEMENT shall be valid
            unless it is in writing and signedby both parties.
            <br />
            <br />
            4.3 Force majeure: If the rendition of the form filling services is
            humoured.63 due to Earthquake,flood, Tempest, Civil Riots or Act of
            God then the Business Associate shall be absolved of its obligation
            hereunder till normally is restored after the cessation of the
            aforementioned
            <br /> contingencies. the client solves likewise be absolved if a
            rendition of the services is hampered due to a strike called by the
            data entry operators engaged by the client, violence or political
            turbulence or for any other reasons of a similar nature, which is
            beyond the control of the client. If you want to terminate your
            agreement after your first work, you need to pay 6(4900*6) times the
            agreement amount as per company policies.
            <br />
          </Text>
        </Box>

        <Box mt={["-1rem", "1rem"]}>
          <Text
            fontSize={["1rem", "1.8rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            5. Non - Solicitation
            <br />
            <br />
            <p>
              5.1 The client understands and agreement that any attempt on the
              part of the client to induceanother client or contractor to leave
              the contractor employee, or any effort by the client to interfere
              with the contractor's relation with it other client and contractor
              would be harmful and damaging to the contractor.
            </p>
          </Text>
        </Box>

        <Box mt={["-1rem", "-5rem"]}>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            5.2 The client will not in any way, Directly or Indirectly: -
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            5.2.1 Induce or attempt to Induce any client or contractor of the
            Contractor to quit employment orretainer of the contractor.
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            5.2.2 Discuss Employment Opportunities or provide information about
            competitive employment toany of the Contractor's Clients or
            Contractors. This Non - solicitation obligation as described in this
            section will be limited to clients or contractors who were clients
            or contractors of the Contractor During The period that the Client
            was employed by the Contractor.
          </Text>
          <Text
            fontSize={["1rem", "1.8rem"]}
            mt={["-2rem", "-7rem"]}
            padding={["1rem", "3rem"]}
          >
            <br />
            {/* 5.2.2	Discuss Employment Opportunities or provide information about competitive employment toany of the Contractor's Clients or Contractors. This Non - solicitation obligation as described in this section will be limited to clients or contractors who were clients or contractors of the Contractor During The period that the Client was employed by the Contractor. */}
            6. Confidential Information
            <br />
            <br />
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-2rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            6.1 The Client Acknowledges that, in any position the Client may
            hold, in and as a result of theClient's employment which is
            confidential to the Contractor (the confidential information) and
            the confidential information is the exclusive property of the
            Contractor.
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            6.2 The Client agrees and acknowledges that the confidential
            information is of a proprietary andconfidential nature and that any
            disclosure of the confidential information of a proprietary and
            confidential nature and that any disclosure of the confidential
            information to a third party in breach of this agreement cannot be
            reasonably or adequately compensated for in money damages, would
            cause irreparable injury to Contractor, would gravely affect the
            effective and successful conduct of the Contractor's business and
            goodwill and would be a material breach of this agreement.
          </Text>
          <Text
            fontSize={["1rem", "1.8rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            7. Severability
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            7.1 The Contractor and the Client acknowledge that this agreement is
            reasonable, valid andEnforceable .however, if any term, covenant or
            provision of this agreement is held by a court of competent
            jurisdiction to be invalid, void or unenforceable, the party intends
            that such provision be changed in scope by the court by only to the
            extent deemed necessary by that court to render the provision
            reasonable and enforceable and the remainder of the provision of
            this agreement will in no way be affected, impaired or invalidated
            as a result.
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            7.2 Variation: Except as otherwise Expressly Provided in this
            agreement, this agreement may not bechanged or modified in any way
            after it has been signed, except in writing signed by or on behalf
            of both of the parties.
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          ></Text>
          <Text
            fontSize={["1rem", "1.8rem"]}
            mt={["-2rem", "-7rem"]}
            padding={["1rem", "3rem"]}
          >
            LEGAL INFORMATION:-
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            7.3 Dispute resolution & jurisdiction: in the event of any dispute
            or difference arising between theparties hereto relating to or
            arising out of this agreement including the implementation,
            Execution, India, rights, obligations or liabilities of the parties
            hereto, the same will be adjudicated and determined by arbitration &
            conciliation Act, 1996 or any statutory amendment or re-enactment
            thereof in force in India, shall govern the reference. both parties
            shall appoint their respective arbitrator, and both arbitrators thus
            appointed should appoint the third arbitrator echo shall function as
            the presiding arbitrator. the venue of arbitration shall be BIKANER
            RAJASTHAN 422101
          </Text>
          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-5rem"]}
            padding={["1rem", "3rem"]}
          >
            7.4 Both the Parties hereby Agree Neither to circumvent nor disclose
            the identities, information aswell as the Essence Of the project
            Etc. IN WITNESS WHEREOF the Parties hereto Have Executed These
            Presents on The Data Herein Before WrittenA. Contractor: -
          </Text>

          <Text
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-2rem", "-6rem"]}
            fontWeight={"500"}
            padding={["1rem", "3rem"]}
          >
            Note :Extension will be Provided But u Have to Pay the Extension
            Amount 8100/ Correction amount 8100
          </Text>
          <Text
            color={"red"}
            fontSize={["0.8rem", "1.5rem"]}
            mt={["-1rem", "-6rem"]}
            fontWeight={"500"}
            padding={["1rem", "3rem"]}
          >
            The helpline department is available from Monday to Saturday from
            11:00 Am to 5:30 Pm
          </Text>
        </Box>

        <Box>
          <Text ml={["1rem", "3rem"]} fontSize={"1.5rem"} mt="4">
            Employer : -
          </Text>
          <Text ml={["1rem", "3rem"]} fontWeight={"500"}>
            Name : Greenten Service <br />
            Email : helplinessrvice156@gmail.com <br />
            Address : block number: 23 Hanuman Nagar Ajmer Road
            S.O, Jaipur, 302006
          </Text>
        </Box>

        <Box ml={["0.5rem", "2rem"]} width={["200px", "400px"]}>
          <Image src={stamplogo} alt="Stamp" />
        </Box>
        {/* <FormControl w={["350px", "400px"]}>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
            _hover={{ borderColor: "teal.500" }}
          />
        </FormControl> */}
        <FormControl ml={["1rem", "2rem"]} w={["320px", "400px"]}>
          <FormLabel>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Your Email "
            _hover={{ borderColor: "teal.500" }}
          />
        </FormControl>
        <FormControl ml={["1rem", "2rem"]} w={["320px", "400px"]}>
          <FormLabel>Start-Date</FormLabel>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Enter the Date"
            min={todayFormatted}
            max={tomorrowFormatted}
            _hover={{ borderColor: "teal.500" }}
          />
          {/* <Select width={{base:"300px" , md:"400px"}}>
        <option value="">Today</option>
        <option value="option2">Tomorrow</option>
      </Select> */}
        </FormControl>

        {/* <FormControl>
      <FormLabel>Date</FormLabel>
      <Select width={{base:"300px" , md:"400px"}}>
        <option value="">Today</option>
        <option value="option2">Tomorrow</option>
      </Select>
    </FormControl> */}

        {/* Upload Signature and Photo Section */}
        <Table mt={"1rem"} w={["330px", "700px"]}>
          <Tr>
            <Td>Upload Signature</Td>
            <Input onChange={handleSignatureChange} type="file" />
            {signaturePreview && (
              <Image
                width={"4rem"}
                height={"4rem"}
                src={signaturePreview}
                alt="Photo Preview"
              />
            )}
          </Tr>
          <Tr>
            <Td>Upload Your Photo</Td>

            {/* <Input onChange={handleSignatureChange} type="file" />
            {signaturePreview && (
              <Image
                width={"10rem"}
                height={"4rem"}
                src={signaturePreview}
                alt="Photo Preview"
              />
            )} */}
            <Td>
              <Input onChange={handlePhotoChange} type="file" />
              {photoPreview && (
                <Image
                  width={"4rem"}
                  height={"4rem"}
                  src={photoPreview}
                  alt="Photo Preview"
                />
              )}
            </Td>
          </Tr>
        </Table>
        <Button
          onClick={handleSubmit}
          mt={"1rem"}
          ml={"1.6rem"}
          bg={"#DD372D"}
          _hover={{ background: "gray", color: "white" }}
        >
          Submit
        </Button>
        {/* {loading && <Spinner size="xl" color="blue.500" thickness="4px" />}
        {/* Your form and other page content */}
        {/* <Button
            onClick={handleSubmit}
            mt={"1rem"}
            ml={"1.6rem"}
            bg={"#DD372D"}
            _hover={{ background: "gray", color: "white" }}
            disabled={loading} // Disable button while submitting
        >
            {loading ? "Submitting..." : "Submit"}
        </Button> */}
      </Box>
    </>
  );
};

export default StampPaper;
