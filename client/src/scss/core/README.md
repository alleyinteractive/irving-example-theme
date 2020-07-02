<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [core (styles) directory](#core-styles-directory)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# core (styles) directory
This directory should contain SCSS variables, functions and mixins which will be used site wide. If any of the core files are included in the [sassCoreResources.js](client/config/webpack/sassCoreResources.js) file they should not include anything that will be actually rendered in CSS, because it will be added to every imported SASS file. Read more in the tips section of the [`sass-resources-loader` tips section](https://github.com/shakacode/sass-resources-loader#tips).

