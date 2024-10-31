import IconifyMLElement from './../../../icon-component.js';
import searchOutlineThin from "./icons/search-outline-thin.svg";
import searchOutline from "./icons/search-outline.svg";
import searchOutlineBold from "./icons/search-outline-bold.svg";
import searchFilledThin from "./icons/search-filled-thin.svg";
import searchFilled from "./icons/search-filled.svg";
import searchFilledBold from "./icons/search-filled-bold.svg";

// Define the icons specific to this package
const icons = {
  searchOutlineThin,
  searchOutline,
  searchOutlineBold,
  searchFilledThin,
  searchFilled,
  searchFilledBold,
};

// Extend the shared component and attach the icons
class EssentialIcon extends IconifyMLElement {
  constructor() {
    super();
    this.icons = icons;
  }
}

// This defines the custome HTML Tag
customElements.define("svx-icon", EssentialIcon);
