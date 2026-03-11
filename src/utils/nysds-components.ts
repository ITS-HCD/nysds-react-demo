/**
 * ⚠️ As of Version @nysds/components@1.16.0-alpha-1",
 * The use of manual React wrapping is no longer needed. See README.md Step 2 for more details.
 * Huzzah!
 *  /\
 *  /\
 * .∧＿∧
 * ( ･ω･｡)つ━☆・*。
 * ⊂   ノ     ・゜+.
 * しーＪ     °。+ *´¨)
 *              .· ´¸.·*´¨) ¸.·¨)
 *                  (¸.·´ (¸.·’ ☆
 */

// import { createComponent } from "@lit/react";

// // Import the components so that the custom elements are registered (below are some examples we will use in this demo)
// import {
//   NysAccordion,
//   NysAccordionItem,
//   NysAlert,
//   NysAvatar,
//   NysBacktotop,
//   NysBadge,
//   NysButton,
//   NysCheckbox,
//   NysCheckboxgroup,
//   NysCombobox,
//   NysDivider,
//   NysDatepicker,
//   NysDropdownMenu,
//   NysDropdownMenuItem,
//   NysFileinput,
//   NysGlobalFooter,
//   NysGlobalHeader,
//   NysIcon,
//   NysModal,
//   NysPagination,
//   NysRadiobutton,
//   NysRadiogroup,
//   NysSelect,
//   NysSkipnav,
//   NysStepper,
//   NysStep,
//   NysTable,
//   NysTextarea,
//   NysTextinput,
//   NysToggle,
//   NysTooltip,
//   NysUnavFooter,
//   NysUnavHeader,
// } from "@nysds/components";
// import * as React from "react";

// /***** Further instruction on why we do this can be found on: https://lit.dev/docs/frameworks/react/ *****/
// // Wrap components
// export const NysAccordionComponent = createComponent({
//   react: React,
//   tagName: "nys-accordion",
//   elementClass: NysAccordion,
// });

// export const NysAccordionItemComponent = createComponent({
//   react: React,
//   tagName: "nys-accordionitem",
//   elementClass: NysAccordionItem,
//   events: {
//     onNysAccordionItemToggle: "nys-accordionitem-toggle",
//   },
// });

// export const NysAlertComponent = createComponent({
//   react: React,
//   tagName: "nys-alert",
//   elementClass: NysAlert,
//   events: {
//     onNysAlertClosed: "nys-close",
//   },
// });

// export const NysAvatarComponent = createComponent({
//   react: React,
//   tagName: "nys-avatar",
//   elementClass: NysAvatar,
// });

// export const NysBacktotopComponent = createComponent({
//   react: React,
//   tagName: "nys-backtotop",
//   elementClass: NysBacktotop,
//   events: {
//     onNysClick: "nys-click",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysBadgeComponent = createComponent({
//   react: React,
//   tagName: "nys-badge",
//   elementClass: NysBadge,
// });

// export const NysButtonComponent = createComponent({
//   react: React,
//   tagName: "nys-button",
//   elementClass: NysButton,
//   events: {
//     onNysClick: "nys-click",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysCheckboxComponent = createComponent({
//   react: React,
//   tagName: "nys-checkbox",
//   elementClass: NysCheckbox,
//   events: {
//     onNysChange: "nys-change",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysCheckboxgroupComponent = createComponent({
//   react: React,
//   tagName: "nys-checkboxgroup",
//   elementClass: NysCheckboxgroup,
// });

// export const NysComboboxComponent = createComponent({
//   react: React,
//   tagName: "nys-combobox",
//   elementClass: NysCombobox,
//   events: {
//     onNysChange: "nys-change",
//     onNysInput: "nys-input",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysDatepickerComponent = createComponent({
//   react: React,
//   tagName: "nys-datepicker",
//   elementClass: NysDatepicker,
// });

// export const NysDividerComponent = createComponent({
//   react: React,
//   tagName: "nys-divider",
//   elementClass: NysDivider,
// });

// export const NysDropdownMenuComponent = createComponent({
//   react: React,
//   tagName: "nys-dropdownmenu",
//   elementClass: NysDropdownMenu,
// });

// export const NysDropdownMenuItemComponent = createComponent({
//   react: React,
//   tagName: "nys-dropdownmenuitem",
//   elementClass: NysDropdownMenuItem,
//     events: {
//     onNysClick: "nys-click",
//   },
// });

// export const NysFileinputComponent = createComponent({
//   react: React,
//   tagName: "nys-fileinput",
//   elementClass: NysFileinput,
//   events: {
//     onNysFileChange: "nys-change",
//   },
// });

// export const NysGlobalFooterComponent = createComponent({
//   react: React,
//   tagName: "nys-globalfooter",
//   elementClass: NysGlobalFooter,
// });

// export const NysGlobalHeaderComponent = createComponent({
//   react: React,
//   tagName: "nys-globalheader",
//   elementClass: NysGlobalHeader,
// });

// export const NysIconComponent = createComponent({
//   react: React,
//   tagName: "nys-icon",
//   elementClass: NysIcon,
// });

// export const NysModalComponent = createComponent({
//   react: React,
//   tagName: "nys-modal",
//   elementClass: NysModal,
//   events: {
//     onNysOpen: "nys-open",
//     onNysClose: "nys-close",
//   },
// });

// export const NysPaginationComponent = createComponent({
//   react: React,
//   tagName: "nys-pagination",
//   elementClass: NysPagination,
//   events: {
//     onNysChange: "nys-change",
//   },
// });

// export const NysRadiobuttonComponent = createComponent({
//   react: React,
//   tagName: "nys-radiobutton",
//   elementClass: NysRadiobutton,
//   events: {
//     onNysChange: "nys-change",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysRadioGroupComponent = createComponent({
//   react: React,
//   tagName: "nys-radiogroup",
//   elementClass: NysRadiogroup,
// });

// export const NysSelectComponent = createComponent({
//   react: React,
//   tagName: "nys-select",
//   elementClass: NysSelect,
//   events: {
//     onNysChange: "nys-change",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysSkipnavComponent = createComponent({
//   react: React,
//   tagName: "nys-skipnav",
//   elementClass: NysSkipnav,
// });

// export const NysStepperComponent = createComponent({
//   react: React,
//   tagName: "nys-stepper",
//   elementClass: NysStepper,
//   events: {
//     onNysStepClick: "nys-step-click",
//   },
// });

// export const NysStepComponent = createComponent({
//   react: React,
//   tagName: "nys-step",
//   elementClass: NysStep,
// });

// export const NysTableComponent = createComponent({
//   react: React,
//   tagName: "nys-table",
//   elementClass: NysTable,
// });

// export const NysTextInputComponent = createComponent({
//   react: React,
//   tagName: "nys-textinput",
//   elementClass: NysTextinput,
//   events: {
//     onNysInput: "nys-input",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysTextareaComponent = createComponent({
//   react: React,
//   tagName: "nys-textarea",
//   elementClass: NysTextarea,
//   events: {
//     onNysInput: "nys-input",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//     onNysSelect: "nys-select",
//   },
// });

// export const NysToggleComponent = createComponent({
//   react: React,
//   tagName: "nys-toggle",
//   elementClass: NysToggle,
//   events: {
//     onNysChange: "nys-change",
//     onNysFocus: "nys-focus",
//     onNysBlur: "nys-blur",
//   },
// });

// export const NysTooltipComponent = createComponent({
//   react: React,
//   tagName: "nys-tooltip",
//   elementClass: NysTooltip,
// });

// export const NysUnavFooterComponent = createComponent({
//   react: React,
//   tagName: "nys-unavfooter",
//   elementClass: NysUnavFooter,
// });

// export const NysUnavHeaderComponent = createComponent({
//   react: React,
//   tagName: "nys-unavheader",
//   elementClass: NysUnavHeader,
// });
