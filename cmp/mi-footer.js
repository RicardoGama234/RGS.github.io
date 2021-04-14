class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Gama Salgado Ricardo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
