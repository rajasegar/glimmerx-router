import Component, { hbs } from '@glimmerx/component';

export default class Route extends Component {
  constructor() {
    super(...arguments);
    const route = {
      path: this.args.path,
      component: this.args.component,
    };
    window.routerRegistry.push(route);
  }

  static template = hbs`{{yield}}`;
}
