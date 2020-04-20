/* 
 * Put here all the logic that make up the costum element
 */
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
    this._tooltipContainer;
  }

  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is the tooltip text!!!';
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }


}

customElements.define(
  'lrm-tooltip',
  Tooltip
);

