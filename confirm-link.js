class ConfirmLink extends HTMLAnchorElement {

  connectedCallback() {
    this.addEventListener(
      'click',
      (event) => {
        if ( !confirm('Do you want follow the link??') ) {
          event.preventDefault()
        }
      }
    );
  }

}


customElements.define(
  'lrm-confirm-link',
  ConfirmLink,
  {
    extends: 'a'
  }
);