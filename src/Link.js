import Component, { hbs } from '@glimmerx/component';

export default class Link extends Component {
  static template = hbs`
  <a href={{@to}} class="glimmer-link">{{yield}}</a>
  `;
}
