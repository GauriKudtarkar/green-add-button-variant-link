import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { constrainSlots } from '@sebgroup/green-core/utils/helpers';

@customElement('gds-step-list')
export class GdsStepList extends LitElement {
  static styles = css`
    :host {
      display: block;
    }`;

    render() {
      return html`
        <div role="list">
          <slot gds-allow="gds-step-list-item"></slot>
        </div>
      `;
    }
  }
