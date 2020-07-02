// File for logic corresponding to header component
import { Component } from 'js-component-framework';
import breakpoints from 'utils/breakpoints';
import 'images/alleybot-logo.jpg';
import './header.scss';

/**
 * Component for site header
 */
export default class Header extends Component {
  /**
   * Start the component
   */
  constructor(config) {
    super(config);

    // Other Options
    this.offset = this.options.offset;

    if (breakpoints.lgMin.matches) {
      console.log('Hello from lg-min breakpoint!'); // eslint-disable-line no-console
    }
  }
}
