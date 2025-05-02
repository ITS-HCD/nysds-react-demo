import { createComponent } from "@lit/react";

// Import the components so that the custom elements are registered (below are some examples we will use in this demo)
import {
   NysAlert,
   NysButton,
   NysCheckbox,
   NysCheckboxgroup,
   NysGlobalFooter,
   NysGlobalHeader,
   NysOption,
   NysRadiobutton,
   NysRadiogroup,
   NysSelect,
   NysTextarea,
   NysTextinput,
   NysToggle,
	NysUnavFooter,
   NysUnavHeader,
   NysSkipnav,
} from "@nysds/components";
import * as React from "react";

/***** Further instruction on why we do this can be found on: https://lit.dev/docs/frameworks/react/ *****/
// Wrap components
export const NysAlertComponent = createComponent({
	react: React,
	tagName: "nys-alert",
	elementClass: NysAlert,
});

export const NysButtonComponent = createComponent({
	react: React,
	tagName: "nys-button",
	elementClass: NysButton,
});

export const NysCheckboxComponent = createComponent({
	react: React,
	tagName: "nys-checkbox",
	elementClass: NysCheckbox,
});

export const NysCheckboxgroupComponent = createComponent({
	react: React,
	tagName: "nys-checkboxgroup",
	elementClass: NysCheckboxgroup,
});

export const NysGlobalFooterComponent = createComponent({
	react: React,
	tagName: "nys-globalfooter",
	elementClass: NysGlobalFooter,
});

export const NysGlobalHeaderComponent = createComponent({
	react: React,
	tagName: "nys-globalheader",
	elementClass: NysGlobalHeader,
});

export const NysOptionComponent = createComponent({
	react: React,
	tagName: "nys-option",
	elementClass: NysOption,
});

export const NysRadiobuttonComponent = createComponent({
	react: React,
	tagName: "nys-radiobutton",
	elementClass: NysRadiobutton,
});

export const NysRadioGroupComponent = createComponent({
	react: React,
	tagName: "nys-radiogroup",
	elementClass: NysRadiogroup,
});

export const NysSelectComponent = createComponent({
	react: React,
	tagName: "nys-select",
	elementClass: NysSelect,
});

export const NysSkipnavComponent = createComponent({
	react: React,
	tagName: "nys-skipnav",
	elementClass: NysSkipnav,
});

export const NysTextInputComponent = createComponent({
	react: React,
	tagName: "nys-textinput",
	elementClass: NysTextinput,
});

export const NysTextareaComponent = createComponent({
	react: React,
	tagName: "nys-textarea",
	elementClass: NysTextarea,
});

export const NysToggleComponent = createComponent({
	react: React,
	tagName: "nys-toggle",
	elementClass: NysToggle,
});

export const NysUnavFooterComponent = createComponent({
	react: React,
	tagName: "nys-unavfooter",
	elementClass: NysUnavFooter,
});

export const NysUnavHeaderComponent = createComponent({
	react: React,
	tagName: "nys-unavheader",
	elementClass: NysUnavHeader,
});