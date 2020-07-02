<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [JavaScript directory](#javascript-directory)
  - [Breakpoints](#breakpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# JavaScript directory

This directory should contain JavaScript utilities and logic required in other parts of the site. No file in this directory should correspond to one specific component or entry point. Those files should be located in `client/src/components` and `client/src/entries` respectively.

## Breakpoints

The `utils/breakpoints.js` helper collects [MediaQueryLists](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) based on the values in `client/config/breakpoints.json`.

Example usage:

```javascript
import breakpoints from 'utils/breakpoints';

// Listen for breakpoint changes.
breakpoints.lgMin.addListener(() => {
  // The screen size was adjusted across the lg-min breakpoint.

  if (breakpoints.lgMin.matches) {
    // Make large-screen changes here.
  } else {
    // Make small screen changes.
  }
});
```
