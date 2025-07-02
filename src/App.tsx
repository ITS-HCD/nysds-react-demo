import { FormEvent, useState } from 'react';
import './App.css';
import { NysAlertComponent, NysButtonComponent, NysCheckboxComponent, NysCheckboxgroupComponent, NysFileinputComponent, NysGlobalFooterComponent, NysGlobalHeaderComponent, NysOptionComponent, NysRadiobuttonComponent, NysRadioGroupComponent, NysSelectComponent, NysSkipnavComponent, NysTextInputComponent, NysTextareaComponent, NysToggleComponent, NysUnavFooterComponent, NysUnavHeaderComponent} from "./utils/nysds-components";


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
      <NysSkipnavComponent />
      <NysUnavHeaderComponent />
      <NysGlobalHeaderComponent appName="React Demo Form" agencyName="Office of Information Technology Services" />
      
      <main id='main-content'>
        <h1 className='appTitle'>Vite + React + NYSDS</h1>
        <NysAlertComponent 
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
          <NysTextInputComponent name='fullName' label="Full name" required 
            onNysBlur={(e) => {
              console.log('nys-blur event received 🔥', e);
            }}
            />
          <NysTextInputComponent name='email' label="Email" type="email" required/>
          <NysTextareaComponent name='quote' label="Enter your favorite quote:" value="Majorities, of course, start with minorities." required/>
          
          {/* Note: when wrapping components within a component, you will need a closing tag (e.g. select, radiogroup, checkboxgroup, slot wrappings for inner HTML elements) */}
          <NysSelectComponent name="newsletter_topic" label="Select your preferred newsletter topic" id="newsletter-topic" required>
            <NysOptionComponent value="government_updates" label="Government Updates" />
            <NysOptionComponent value="community_events" label="Community Events" />
            <NysOptionComponent value="public_services" label="Public Services & Resources" />
            <NysOptionComponent value="transportation_news" label="Transportation & Infrastructure" />
            <NysOptionComponent value="environment" label="Environment & Sustainability" />      
          </NysSelectComponent>

          <NysFileinputComponent name="uploadImg" label="Upload a file" description="Accepted file types: .jpg, .png, .pdf" accept="image/png, image/jpeg, image/*,.pdf" multiple dropzone required/>

          <NysRadioGroupComponent
            label="How often do you want updates?"
            description="These updates will be sent directly to your email."
            size="md"
            required
          >
            <NysRadiobuttonComponent
              name="frequency"
              label="Weekly"
              value="weekly"
            />
            <NysRadiobuttonComponent
              name="frequency"
              label="Monthly"
              value="monthly"
            />
          </NysRadioGroupComponent>

          <NysCheckboxComponent
            label="Subscribe to NYS Government Updates"
            description="Get notified via email about important updates and services."
            id="subscribe-checkbox-disabled-checked"
            name="subscribe"
            value="email-updates"
            required
          />

          <NysCheckboxgroupComponent
            label="Select your favorite New York landmarks"
            description="Choose from the options below"
            required
          >
            <NysCheckboxComponent name="landmarks" label="Adirondacks" value="adirondacks" />
            <NysCheckboxComponent name="landmarks" value="finger-lakes" label="Finger Lakes" />
            <NysCheckboxComponent name="landmarks" value="catskills" label="Catskills" />
            <NysCheckboxComponent name="landmarks" value="niagara-falls" label="Niagara Falls"/>
            <NysCheckboxComponent name="landmarks" value="coney-island" label="Coney Island"/>
          </NysCheckboxgroupComponent>

          <NysToggleComponent
            label="Dark Mode"
            name="toggle-switch"
            value="access"><p slot="description">Toggle switch is usually NOT recommended for forms (use checkboxes instead).</p>
          </NysToggleComponent>

          <NysButtonComponent
            type="submit"
            fullWidth
            label="Subscribe"
          />
        </form>
        <br></br>
        {submittedData && (
          <NysAlertComponent
            type="success"
            heading="Form submitted successfully"
            text={`${submittedData ? "\n\nSubmitted Data:\n" + JSON.stringify(submittedData, null, 2) : ""}`}
            dismissible
          />
        )}
      </main>

      <NysGlobalFooterComponent agencyName="Office of Information Technology Services">
        <ul>
          <li><a href="https://its.ny.gov">ITS Home</a></li>
          <li><a href="https://its.ny.gov/about">About ITS</a></li>
        </ul>
      </NysGlobalFooterComponent>
      <NysUnavFooterComponent />
    </>
  );
}

export default App;
