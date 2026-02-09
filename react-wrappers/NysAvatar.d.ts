import React from "react";
import { NysAvatar as NysAvatarElement } from "../../../dist/nysds.es.js";

export type { NysAvatarElement };

export interface NysAvatarProps
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
  interactive?: boolean;

  /** undefined */
  disabled?: boolean;

  /** undefined */
  lazy?: boolean;

  /** undefined */
  id?: NysAvatarElement["id"];

  /** undefined */
  ariaLabel?: NysAvatarElement["ariaLabel"];

  /** undefined */
  image?: NysAvatarElement["image"];

  /** undefined */
  initials?: NysAvatarElement["initials"];

  /** undefined */
  icon?: NysAvatarElement["icon"];

  /** undefined */
  color?: NysAvatarElement["color"];

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
 * `<nys-avatar>` displays a user avatar which can be an image, initials, or icon.
 *
 * Features:
 * - Supports interactive avatars with button role
 * - Automatic contrast calculation for initials or icons based on background color
 * - Lazy loading for images
 * - Fallback to icon when no image or initials are provided
 * ---
 *
 */
export const NysAvatar: React.ForwardRefExoticComponent<NysAvatarProps>;
