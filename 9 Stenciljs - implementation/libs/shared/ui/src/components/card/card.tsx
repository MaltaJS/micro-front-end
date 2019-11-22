import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';
import { json } from 'body-parser';

@Component({
  tag: 'maltajs-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {
  /**
   * This will be included in the readme.md :)
   */
  @Prop() styles: any;

  render() {
    const cardStyles = JSON.parse(this.styles);

    return (
      <Host style={cardStyles}>
        <slot></slot>
      </Host>
    )
  }
}
