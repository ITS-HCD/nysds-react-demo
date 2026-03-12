import { FormEvent, useState } from 'react';
import './App.css';
// Add any new imports from the utils/nysds-components.ts file below 
import { NysAlert, NysBacktotop, NysButton, NysCheckbox, NysCheckboxgroup, NysFileinput, NysGlobalFooter, NysGlobalHeader, NysRadiobutton, NysRadiogroup, NysSelect, NysSkipnav, NysTextinput, NysTextarea, NysToggle, NysTooltip, NysUnavFooter, NysUnavHeader} from "@nysds/components/react";

function App() {
  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState<Record<string, unknown> | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Convert FormData to a plain object
    const data: Record<string, unknown> = {};

    for (const [key, value] of formData.entries()) {
      const allValues = formData.getAll(key);

      // If multiple values under the same key
      if (allValues.length > 1) {
        data[key] = allValues.map((value) => value instanceof File ? {fileName: value.name, fileType: value.type} : value)
      } else {
        data[key] = value instanceof File
          ? { name: value.name, type: value.type, size: value.size }
          : value;
      }
    }

    alert('Form Data:\n' + JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  return (
    <>
      <NysSkipnav />
      <NysUnavHeader />
      <NysGlobalHeader appName="React Demo Form" agencyName="Office of Information Technology Services" />
      
      <main id='main-content'>
        <h1 className='appTitle'>Vite + React + NYSDS</h1>
        <NysAlert 
          type="info"
          heading="NYSDS Components"
          text="We make use of form-related NYSDS components in the native HTML form below."
          primaryLabel="Learn more on NYSDS reference site"
          primaryAction="https://designsystem.ny.gov/"
          dismissible
        />

        <form
          id="myForm"
          className="nys-newsletter-form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <NysTextinput name='fullName' label="Full name" required 
            onNysBlur={(e: Event) => {
              console.log('nys-blur event received 🔥', e);
            }}
            />
          <NysTextinput name='email' label="Email" type="email" required/>
          <NysTextarea name='quote' label="Enter your favorite quote:" value="Majorities, of course, start with minorities." required/>
          
          {/* Note: when wrapping components within a component, you will need a closing tag (e.g. select, radiogroup, checkboxgroup, slot wrappings for inner HTML elements) */}
          <NysSelect name="newsletter_topic" label="Select your preferred newsletter topic" id="newsletter-topic" required>
            <option value="government_updates" label="Government Updates" />
            <option value="community_events" label="Community Events" />
            <option value="public_services" label="Public Services & Resources" />
            <option value="transportation_news" label="Transportation & Infrastructure" />
            <option value="environment" label="Environment & Sustainability" />      
          </NysSelect>

          <NysFileinput name="uploadImg" label="Upload a file" description="Accepted file types: .jpg, .png, .pdf" accept="image/png, image/jpeg, .pdf" multiple dropzone required/>
          <NysTextinput name='test' label="test" type="text" required/>

          <NysRadiogroup
            label="How often do you want updates?"
            description="These updates will be sent directly to your email."
            size="md"
            required
          >
            <NysRadiobutton
              name="frequency"
              label="Weekly"
              value="weekly"
            />
            <NysRadiobutton
              name="frequency"
              label="Monthly"
              value="monthly"
            />
          </NysRadiogroup>

          <NysCheckbox
            label="Subscribe to NYS Government Updates"
            description="Get notified via email about important updates and services."
            id="subscribe-checkbox-disabled-checked"
            name="subscribe"
            value="email-updates"
            required
          />

          <NysCheckboxgroup
            label="Select your favorite New York landmarks"
            description="Choose from the options below"
            required
          >
            <NysCheckbox name="landmarks" label="Adirondacks" value="adirondacks" />
            <NysCheckbox name="landmarks" value="finger-lakes" label="Finger Lakes" />
            <NysCheckbox name="landmarks" value="catskills" label="Catskills" />
            <NysCheckbox name="landmarks" value="niagara-falls" label="Niagara Falls"/>
            <NysCheckbox name="landmarks" value="coney-island" label="Coney Island"/>
          </NysCheckboxgroup>

          <NysToggle
            label="Dark Mode"
            name="toggle-switch"
            value="access"><p slot="description">Toggle switch is usually NOT recommended for forms (use checkboxes instead).</p>
          </NysToggle>

          <NysTooltip text="Hello" position="bottom">
            <NysButton
              type="submit"
              fullWidth
              label="Subscribe"
            />
          </NysTooltip>
        </form>
        <br></br>
        {submittedData && (
          <NysAlert
            type="success"
            heading="Form submitted successfully"
            text={`${submittedData ? "\n\nSubmitted Data:\n" + JSON.stringify(submittedData, null, 2) : ""}`}
            dismissible
          />
        )}
      </main>

      <NysGlobalFooter agencyName="Office of Information Technology Services">
        <ul>
          <li><a href="https://its.ny.gov">ITS Home</a></li>
          <li><a href="https://its.ny.gov/about">About ITS</a></li>
        </ul>
      </NysGlobalFooter>
      <NysUnavFooter />
      <NysBacktotop />
    </>
  );
}

export default App;
