/* 
 * Put here all the logic that make up the costum element
 */
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
    this._tooltipContainer;
    this._tooltipText = 'Dummy tooltip default text';

  }

  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
    
    if ( this.hasAttribute('text') ) {
      this._tooltipText = this.getAttribute('text');
    }

    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
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

