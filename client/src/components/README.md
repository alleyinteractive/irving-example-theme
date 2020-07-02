<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Components Directory](#components-directory)
  - [Component JavaScript](#component-javascript)
  - [Component stylesheets](#component-stylesheets)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Components Directory

This directory should contain subdirectories for each reusable component existing on the site. Within the subdirectories you can include assets (JS or CSS) related to that component.

## Component JavaScript

JS in this project is written at the component level. Each component with JS logic should use the component class framework detailed in [client/components/framework.md]. However, components both with and without JS logic should use a JS file to `import` SCSS for that component. For example:

```javascript
// in component-without-js.js

import './my-component.scss';
```

## Component stylesheets

SCSS in this project is written into stylesheets at the component level. Components should be organized by component in each component's subdirectory. If a component's stylesheet starts getting unwieldy, that component's styles can be broken up into a series of selectors pertaining to the component. For example:

```css
/* In component-1.scss */
@import '../core/loader'; /* Loads core vars and mixins */
@import './component-1';
@import './component-1__element';
@import './component-2';
```
```scss
/* In component-1.scss */
.component-1 {
	/* Styles */
}
```
```scss
/* In component-1__element.scss */
.component-1__element {
	/* Styles */
}

.component-1__element--modifier {
	/* Styles */
}
```
