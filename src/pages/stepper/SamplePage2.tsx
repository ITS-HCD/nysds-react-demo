import { NysTextInputComponent } from "../../utils/nysds-components";

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
    </div>
  );
};

export default SamplePage2;
