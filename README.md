# Irving Example Theme
## Description
The Irving Example Theme is built to demonstrate how Irving and WordPress work together. It features examples of how to implement WP Irving components.

## Demo
[Demo Link](https://irving-production.herokuapp.com/)

## Templates
[Documentation on Templates in WP Irving](http://storybook.irvingjs.com).

**404.json**
Error page for 404 status codes.

**archive.json**
Displays a grid of posts in reverse chronology and pagination to navigate.

**author.json**
Same as archive.json

**defaults.json**
The defaults.json layout is used by Irving core as a "global" layout. This includes the top-level head, header, body, and footer wrappers.

**index.json**
The homepage displays a reverse cron of all the posts.

**page.json**


**search.json**
Displays a search input, info about the results, a grid of posts in reverse chronology, and pagination to navigate.

**single.json**
A single post. Supports title, excerpt, featured image, social share links, and Gutenberg-driven content.

## Components
[Full documentation on Components in WP Irving](http://storybook.irvingjs.com).

## Installation

### Requirements
Irving Example Theme requires :
* Node.js

### Quick Start
See the Quick Start docs at storybook.irvingjs.com


## Development
### Branch Workflow
All features should be branched off master.

### Running Tests
Run `phpunit` in the directory.

### PHPCS
* Run `composer install` in the `/themes/irving-example-theme/` directory to install PHPCS requirements.
* Run `composer phpcs`
