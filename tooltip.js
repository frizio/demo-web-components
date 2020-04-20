/* 
 * Put here all the logic that make up the costum element
 */
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
  }

  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    this.appendChild(tooltipIcon);
  }

}

customElements.define(
  'lrm-tooltip',
  Tooltip
);

