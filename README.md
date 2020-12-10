# glimmerx-router
Declarative routing for glimmerx (WIP)


## Install
```
yarn add glimmerx-router
```

## Usage
```js
import Component, { hbs } from '@glimmerx/component';
import Router from './Router.js';
import Route from './Route.js';
import Link from './Link.js';
import About from './About.js';
import Contact from './Contact.js';

export default class App extends Component {
  About = About;
  Contact = Contact;

  static template = hbs`
    <div id="intro">
      <h1>hello, glimmerx!</h1>
      <Router>
        <nav>
          <ul>
            <li><Link @to="/about">About</Link></li>
            <li><Link @to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Route @path="/about" @component={{this.About}}/>
        <Route @path="/contact" @component={{this.Contact}}/>
      </Router>
    </div>
  `;
}
```
