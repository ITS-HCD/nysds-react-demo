import { createComponent } from "@lit/react";

// Import the components so that the custom elements are registered (below are some examples we will use in this demo)
import {
  // NysAccordion,
  // NysAccordiongroup,
  NysAlert,
  NysAvatar,
  NysBacktotop,
  NysButton,
  NysCheckbox,
  NysCheckboxgroup,
  NysFileinput,
  NysGlobalFooter,
  NysGlobalHeader,
  NysIcon,
  NysOption,
  NysRadiobutton,
  NysRadiogroup,
  NysSelect,
  NysSkipnav,
  NysStepper,
  NysStep,
  NysTextarea,
  NysTextinput,
  NysToggle,
  NysTooltip,
  NysUnavFooter,
  NysUnavHeader,
} from "@nysds/components";
import * as React from "react";

/***** Further instruction on why we do this can be found on: https://lit.dev/docs/frameworks/react/ *****/
// Wrap components
// export const NysAccordiongroupComponent = createComponent({
//   react: React,
//   tagName: "nys-accordiongroup",
//   elementClass: NysAccordiongroup,
// });

// export const NysAccordionComponent = createComponent({
//   react: React,
//   tagName: "nys-accordion",
//   elementClass: NysAccordion,
//   events: {
//     onNysAccordionToggle: "nys-accordionToggle",
//   },
// });

export const NysAlertComponent = createComponent({
  react: React,
  tagName: "nys-alert",
  elementClass: NysAlert,
  events: {
    onNysAlertClosed: "nys-alertClosed",
  },
});

export const NysAvatarComponent = createComponent({
  react: React,
  tagName: "nys-avatar",
  elementClass: NysAvatar,
});

export const NysBacktotopComponent = createComponent({
  react: React,
  tagName: "nys-backtotop",
  elementClass: NysBacktotop,
  events: {
    onNysClick: "nys-click",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysButtonComponent = createComponent({
  react: React,
  tagName: "nys-button",
  elementClass: NysButton,
  events: {
    onNysClick: "nys-click",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysCheckboxComponent = createComponent({
  react: React,
  tagName: "nys-checkbox",
  elementClass: NysCheckbox,
  events: {
    onNysChange: "nys-change",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysCheckboxgroupComponent = createComponent({
  react: React,
  tagName: "nys-checkboxgroup",
  elementClass: NysCheckboxgroup,
});

export const NysFileinputComponent = createComponent({
  react: React,
  tagName: "nys-fileinput",
  elementClass: NysFileinput,
  events: {
    onNysFileChange: "nys-change",
  },
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

export const NysIconComponent = createComponent({
  react: React,
  tagName: "nys-icon",
  elementClass: NysIcon,
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
  events: {
    onNysChange: "nys-change",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
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
  events: {
    onNysChange: "nys-change",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysSkipnavComponent = createComponent({
  react: React,
  tagName: "nys-skipnav",
  elementClass: NysSkipnav,
});

export const NysStepperComponent = createComponent({
  react: React,
  tagName: "nys-stepper",
  elementClass: NysStepper,
  events: {
    onNysStepClick: "nys-step-click",
  }
});

export const NysStepComponent = createComponent({
  react: React,
  tagName: "nys-step",
  elementClass: NysStep,
});

export const NysTextInputComponent = createComponent({
  react: React,
  tagName: "nys-textinput",
  elementClass: NysTextinput,
  events: {
    onNysInput: "nys-input",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysTextareaComponent = createComponent({
  react: React,
  tagName: "nys-textarea",
  elementClass: NysTextarea,
  events: {
    onNysInput: "nys-input",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
    onNysSelect: "nys-select",
  },
});

export const NysToggleComponent = createComponent({
  react: React,
  tagName: "nys-toggle",
  elementClass: NysToggle,
  events: {
    onNysChange: "nys-change",
    onNysFocus: "nys-focus",
    onNysBlur: "nys-blur",
  },
});

export const NysTooltipComponent = createComponent({
  react: React,
  tagName: "nys-tooltip",
  elementClass: NysTooltip,
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
