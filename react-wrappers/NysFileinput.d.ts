import React from "react";
import {
  NysFileinput as NysFileinputElement,
  CustomEvent,
} from "../../../dist/nysds.es.js";

export type { NysFileinputElement, CustomEvent };

export interface NysFileinputProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "dir"
    | "hidden"
    | "id"
    | "lang"
    | "slot"
    | "style"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** undefined */
  multiple?: boolean;

  /** undefined */
  disabled?: boolean;

  /** undefined */
  required?: boolean;

  /** undefined */
  optional?: boolean;

  /** undefined */
  showError?: boolean;

  /** undefined */
  dropzone?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  id?: NysFileinputElement["id"];

  /** undefined */
  name?: NysFileinputElement["name"];

  /** undefined */
  label?: NysFileinputElement["label"];

  /** undefined */
  description?: NysFileinputElement["description"];

  /** undefined */
  form?: NysFileinputElement["form"];

  /** undefined */
  tooltip?: NysFileinputElement["tooltip"];

  /** undefined */
  accept?: NysFileinputElement["accept"];

  /** undefined */
  errorMessage?: NysFileinputElement["errorMessage"];

  /** undefined */
  width?: NysFileinputElement["width"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: number;

  /** undefined */
  onNysChange?: (event: CustomEvent) => void;
}

/**
 * `<nys-fileinput>` allows file selection and upload with support for
 * multiple files, drag-and-drop, progress tracking, validation, and form integration.
 * ---
 *
 *
 * ### **Events:**
 *  - **nys-change**
 */
export const NysFileinput: React.ForwardRefExoticComponent<NysFileinputProps>;
