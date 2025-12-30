import { FormEvent, useState, useRef } from 'react';
import '../styles/App.css';
import '../styles/BasicForm.css';
// Add any new imports from the nysds-components.ts file below 
import { NysIconComponent, NysAlertComponent, NysButtonComponent, NysCheckboxComponent, NysCheckboxgroupComponent, NysDatepickerComponent, NysFileinputComponent, NysModalComponent, NysRadiobuttonComponent, NysRadioGroupComponent, NysSelectComponent, NysTextInputComponent, NysTextareaComponent, NysToggleComponent, NysTooltipComponent} from "../utils/nysds-components";
import { NysModal } from "@nysds/components"; // this is used to define type on the useRef()

const BasicForm = () => {
  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState<Record<string, unknown> | null>(null);
  // Makes a reference to the <nys-modal>
  const modalRef = useRef<NysModal>(null);

  /**
   * This function is meant to demonstrate the handling of form submission with NYSDS components.
   * Note how we perform serializeFormData() to get all the details from the FormData
   * @param e 
   */
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = serializeFormData(e.target as HTMLFormElement);
    alert('Form Data:\n' + JSON.stringify(data, null, 2));
    setSubmittedData(data);
  };

  const serializeFormData = (form: HTMLFormElement) => {
    const data: Record<string, unknown> = {};
    const formData = new FormData(form);

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
    return data;
  };


  /**
   * Below are the functions for opening, closing, and saving with the <nys-modal>
   * Note how we perform serializeFormData() to get all the details from the FormData
   */
  const openModal = () => {
    // Note: we use ref instead of document.getElementById like native JS for React access to web component
    if(modalRef.current) {
      modalRef.current.open = true;
    }
  }
  
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.open = false;
    }
  }

  const saveChanges = () => {
    // Perform any save logic
    alert("*Slaps face* >:[ \n WE WILL ASK THE QUESTIONS!!  \n \n (The Office: Season 5, Episode 19) ")
    closeModal();
  }

  return (
    <div className='main-content'>
        <h1 className='appTitle'>Vite + React + NYSDS</h1>
        <NysAlertComponent 
          type="info"
          heading="Using NYSDS Components in Forms"
          text="The form below shows how NYSDS form components can be used inside a standard HTML form. Each of our web components work with normal form submission and validation, allowing you to collect and process data through formData just like native controls."
          primaryLabel="Learn more about NYSDS on our reference site"
          primaryAction="https://designsystem.ny.gov/"
          dismissible
        />

        <form
          id="myForm"
          className="nys-newsletter-form"
          method="POST"
          onSubmit={handleSubmit}
        >       
          <NysDatepickerComponent required id="datepicker1" name="datepicker1" type="date" label="Date of birth" description="Enter in MM/DD/YYYY format" />
          <NysTooltipComponent for="my-textinput" text="I am a tooltip, used for hints."></NysTooltipComponent>
          <NysTextInputComponent id="my-textinput" name='fullName' label="Full name" description='Enter your full legal name' 
            onNysBlur={(e) => {
              console.log('nys-blur event received 🔥', e);
            }}
            />
          <NysTextInputComponent name='email' label="Email" type="email" />
          <NysTextareaComponent id="my-textarea" name='quote' label="Enter your favorite quote:" value="Majorities, of course, start with minorities." />

          {/* Note: when wrapping components within a component, you will need a closing tag (e.g. select, radiogroup, checkboxgroup, slot wrappings for inner HTML elements) */}
          <NysSelectComponent name="newsletter_topic" label="Select your preferred newsletter topic" id="newsletter-topic" >
            {/* <option value="">--Please choose an option--</option> */}
            <option value="government_updates" label="Government Updates" />
            <option value="community_events" label="Community Events" />
            <option value="public_services" label="Public Services & Resources" />
            <option value="transportation_news" label="Transportation & Infrastructure" />
            <option value="environment" label="Environment & Sustainability" />      
          </NysSelectComponent>

          <NysFileinputComponent id="my-fileinput" name="uploadImg" label="Upload a file" description="Accepted file types: .jpg, .png, .pdf" accept="image/png, image/jpeg, .pdf" multiple dropzone />

          <NysRadioGroupComponent
            id="my-radiogroup"
            label="How often do you want updates?"
            description="These updates will be sent directly to your email."
            size="md"
            
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
            
          />


          <NysCheckboxgroupComponent
            id="my-checkboxgroup"
            label="Select your favorite New York landmarks"
            description="Choose from the options below"
            
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
            value="dark_mode_on"><p slot="description">Toggle switch is usually NOT recommended for forms (use checkboxes instead).</p>
          </NysToggleComponent>

          <NysButtonComponent
            type="submit"
            fullWidth
            label="Subscribe"
          />
        </form>
<br>        
</br>
        {submittedData && (
          <NysAlertComponent
            type="success"
            heading="Form submitted successfully"
            text={`${submittedData ? "\n\nSubmitted Data:\n" + JSON.stringify(submittedData, null, 2) : ""}`}
            dismissible
          />
        )}

        {/* MODAL SHOWCASE */}
        <NysButtonComponent type="button" label="Knock Knock (Show Modal)" onNysClick={openModal} variant="outline"></NysButtonComponent>
        <NysModalComponent ref={modalRef} id="myModal" heading="Who's there?" subheading='KGB...'>
          <p>Ipsum Lorem. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <div slot="actions">
            <NysButtonComponent
              label="Don't answer"
              variant="outline"
              onNysClick={closeModal}
            ></NysButtonComponent>
            <NysButtonComponent label="KGB who?" onNysClick={saveChanges}></NysButtonComponent>
          </div>
        </NysModalComponent>
    </div>
  );
};

export default BasicForm;