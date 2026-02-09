import React from "react";
import { NysBadge as NysBadgeElement } from "../../../dist/nysds.es.js";

export type { NysBadgeElement };

export interface NysBadgeProps
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
  prefixIcon?: string | boolean;

  /** undefined */
  suffixIcon?: string | boolean;

  /** undefined */
  id?: NysBadgeElement["id"];

  /** undefined */
  name?: NysBadgeElement["name"];

  /** undefined */
  size?: NysBadgeElement["size"];

  /** undefined */
  intent?: NysBadgeElement["intent"];

  /** undefined */
  prefixLabel?: NysBadgeElement["prefixLabel"];

  /** undefined */
  label?: NysBadgeElement["label"];

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
 * `<nys-badge>` displays a badge element with optional prefix/suffix icons
 * and labels. The badge can convey an intent (neutral, error, success, warning)
 * which affects default icons and styling.
 * ---
 *
 */
export const NysBadge: React.ForwardRefExoticComponent<NysBadgeProps>;
