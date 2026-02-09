import React from "react";
import { NysRadiogroup as NysRadiogroupElement } from "../../../dist/nysds.es.js";

export type { NysRadiogroupElement };

export interface NysRadiogroupProps
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
  required?: boolean;

  /** undefined */
  optional?: boolean;

  /** undefined */
  showError?: boolean;

  /** undefined */
  tile?: boolean;

  /** undefined */
  inverted?: boolean;

  /** undefined */
  id?: NysRadiogroupElement["id"];

  /** undefined */
  name?: NysRadiogroupElement["name"];

  /** undefined */
  errorMessage?: NysRadiogroupElement["errorMessage"];

  /** undefined */
  label?: NysRadiogroupElement["label"];

  /** undefined */
  description?: NysRadiogroupElement["description"];

  /** undefined */
  tooltip?: NysRadiogroupElement["tooltip"];

  /** undefined */
  form?: NysRadiogroupElement["form"];

  /** undefined */
  size?: NysRadiogroupElement["size"];

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
}

/**
 * `NysRadiogroup` manages a group of
 * `<nys-radiobutton>` elements. It enforces single selection, handles
 * keyboard navigation, accessibility, and form integration with validation.
 * ---
 *
 */
export const NysRadiogroup: React.ForwardRefExoticComponent<NysRadiogroupProps>;
