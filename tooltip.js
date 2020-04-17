/* 
 * Put here all the logic that make up the costum element
 */
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
    /*
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    this.appendChild();
    this.append(tooltipIcon);
    */
  }

  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
  }

  disconnectedCallback() {
    console.log('Element detaached from DOM: Cleanup Work.');
  }

  attributeChangedCallback() {
    console.log('Observed attribute updated: Update Data + DOM.');
  }

}

customElements.define(
  'lrm-tooltip',
  Tooltip
);

