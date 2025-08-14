import {
  NysTextInputComponent,
  // NysAccordionComponent,
  // NysAccordiongroupComponent,
  NysButtonComponent,
} from "../../utils/nysds-components";

const SamplePage2 = () => {
  return (
    <div className="main-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Team Information (Sample 2)</h1>
      <p>
        Provide details about your team. Who are you working with? What is your
        role?
      </p>
      <NysTextInputComponent
        name="teamMembers"
        label="Who are you working with?"
        required
      />
      <NysTextInputComponent name="role" label="What is your role?" required />

      {/* <NysAccordiongroupComponent singleSelect bordered>
        <NysAccordionComponent heading="Eligibility Requirements">
          <p>
            You must be a New York State resident and provide valid proof of
            identification. Additional documentation may be required depending
            on the type of service you are applying for.
          </p>
        </NysAccordionComponent>
        <NysAccordionComponent heading="Required Documents">
          <ul>
            <li>Proof of Identity (Driver License, State ID, or Passport)</li>
            <li>Proof of Residency (Utility Bill, Lease Agreement)</li>
            <li>Completed Application Form</li>
          </ul>
        </NysAccordionComponent>
      </NysAccordiongroupComponent> */}

      <div className="button-container nys-display-flex">
        <NysButtonComponent
          label="Previous"
          href="sample1"
        ></NysButtonComponent>
        <NysButtonComponent label="Next" href="sample3"></NysButtonComponent>
      </div>
    </div>
  );
};

export default SamplePage2;
