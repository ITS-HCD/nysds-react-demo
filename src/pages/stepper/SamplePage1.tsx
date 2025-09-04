import { 
  NysTextInputComponent, 
} from "../../utils/nysds-components";

const SamplePage1 = () => {
  return (
    <div className="main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Personal Details (Sample 1)</h1>
      <p>
        This is the form to enter your personal information. Fill in your name,
        address, and contact details here.
      </p>
      <NysTextInputComponent name="fullName" label="Full Name" required />

      <NysTextInputComponent
        name="email"
        label="Email Address"
        type="email"
        required
      />

      <NysTextInputComponent name="phone" label="Phone Number" type="tel" />

      <NysTextInputComponent name="address" label="Street Address" />
    </div>
  );
};

export default SamplePage1;
