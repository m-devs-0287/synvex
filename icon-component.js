class IconifyMLElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.icons = {}; // Placeholder for package-specific icons
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "name") {
      this.renderIcon(newValue);
    }
  }

  renderIcon(name) {
    const iconSVG = this.icons[name] || "<!-- Icon not found -->";

    this.shadowRoot.innerHTML = `
      <span 
        role="img" 
        aria-label="${name || "icon"}"
        class="icon-container ${this.className}"
        style="display: inline-flex; align-items: center; width: 24px; height: 24px;"
      >
        ${iconSVG}
      </span>
    `;
  }
}

export default IconifyMLElement;
