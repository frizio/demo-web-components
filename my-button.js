console.log('my-button script loaded');

class MyButton extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
  }
  
  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
  }
  

}

customElements.define(
  'lrm-mybutton',
  MyButton
);




/*
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('Element created: Basic Initialization.');
    this._tooltipContainer;
    this._tooltipText = 'Dummy tooltip default text';
    this.attachShadow(
      { mode: 'open' }
    );
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: green;
          color: white;
          position: absolute;
          zIndex: 10;
        }
      </style>
      <slot>Some default text</slot>
      <span> (??)</span>
    `
  }
  
  connectedCallback() {
    console.log('Element attached to DOM: DOM Initializations.');
    if ( this.hasAttribute('text') ) {
      this._tooltipText = this.getAttribute('text');
    }
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = 'relative'
  }
  
  _showTooltip() {
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = this._tooltipText;
    
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }

}

customElements.define(
  'lrm-tooltip',
  Tooltip
);
*/
