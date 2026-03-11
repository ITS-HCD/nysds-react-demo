import {
  NysTextinput,
  NysAccordionItem,
  NysAccordion,
} from "@nysds/components/react";

const SamplePage2 = () => {
  return (
    <div className="main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Team Information (Sample 2)</h1>
      <p>
        Provide details about your team. Who are you working with? What is your
        role?
      </p>
      <NysTextinput
        name="teamMembers"
        label="Who are you working with?"
        required
      />
      <NysTextinput name="role" label="What is your role?" required />

      <NysAccordion singleSelect bordered>
        <NysAccordionItem heading="Eligibility Requirements">
          <p>
            You must be a New York State resident and provide valid proof of
            identification. Additional documentation may be required depending
            on the type of service you are applying for.
          </p>
        </NysAccordionItem>
        <NysAccordionItem heading="Required Documents">
          <ul>
            <li>Proof of Identity (Driver License, State ID, or Passport)</li>
            <li>Proof of Residency (Utility Bill, Lease Agreement)</li>
            <li>Completed Application Form</li>
          </ul>
        </NysAccordionItem>
      </NysAccordion>
    </div>
  );
};

export default SamplePage2;
