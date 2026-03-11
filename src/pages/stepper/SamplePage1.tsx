import { 
  NysTextinput, 
} from "@nysds/components/react";

const SamplePage1 = () => {
  return (
    <div className="main-content stepper-content nys-display-flex nys-flex-column nys-flex-justify">
      <h1>Personal Details (Sample 1)</h1>
      <p>
        This is the form to enter your personal information. Fill in your name,
        address, and contact details here.
      </p>
      <NysTextinput name="fullName" label="Full Name" required />

      <NysTextinput
        name="email"
        label="Email Address"
        type="email"
        required
      />

      <NysTextinput name="phone" label="Phone Number" type="tel" />

      <NysTextinput name="address" label="Street Address" />
    </div>
  );
};

export default SamplePage1;
