/* 
 * Put here all the logic that make up the costum element
 */
class Tooltip extends HTMLElement {
  
  constructor() {
    super();
    console.log('It is working!');
  }

}

customElements.define(
  'lrm-tooltip',
  Tooltip
);

