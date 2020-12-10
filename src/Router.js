import Component, { hbs, tracked } from '@glimmerx/component';
import { renderComponent } from '@glimmerx/core';

export default class Router extends Component {
  @tracked registry = window.routerRegistry;

  constructor() {
    super(...arguments);
    window.routerRegistry = [];
    document.addEventListener('click', this.route.bind(this));
    window.addEventListener('popstate', this.handlePopState.bind(this));
  }

  renderPage(component) {
    const outlet = document.getElementById('glimmer-router-outlet');
    outlet.innerHTML = '';
    renderComponent(component, outlet);
  }

  route(ev) {
    if (ev.target.classList.contains('glimmer-link')) {
      ev.preventDefault();
      const url = new URL(ev.target.href);
      const [route] = this.registry.filter((r) => r.path === url.pathname);
      if (route) {
        history.pushState({}, '', url);
        this.renderPage(route.component);
      }
    }
  }

  handlePopState(event) {
    const [route] = this.registry.filter((r) => r.path === location.pathname);
    if (route) {
      this.renderPage(route.component);
    }
  }

  willDestroy() {
    document.removeEventListener('click', this.route);
    window.removeEventListener('popstate', this.handlePopState);
  }

  static template = hbs`
   <div>
      {{yield}}
      <div id="glimmer-router-outlet"></div>
   </div>`;
}
