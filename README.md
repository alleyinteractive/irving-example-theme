# Irving Example Theme
## Description
The **Irving Example Theme**'s purpose is to demo Irving and WordPress working together, and offer concrete examples to developers looking to learn Irving's patterns and architecture.
 
It primarily contains examples of how to structure components in templates and template parts.

## Demo
[See the theme in action](https://irving-production.herokuapp.com/).
*(server may need to boot up, refresh if you see an error)*

## Templates
The templates in this theme use [WP Irving](https://github.com/alleyinteractive/wp-irving)'s implementation of the [Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/). In a nutshell, files in `/templates/{template-name}.json` will be automatically loaded following the Template Hierarchy for a given WordPress route.

Visit the [Irving docs (WIP)](http://storybook.irvingjs.com) for a more in-depth look at templating.

**404.json**
Page not found template.

**archive.json**
Displays a grid of posts in reverse chronology and pagination to navigate.

**author.json**
Displays a grid of posts in reverse chronology and pagination to navigate, limited to content by a specific author.

**defaults.json**
The defaults.json layout is used by Irving core as a "global" layout. This includes the top-level head, header, body, and footer wrappers.

**index.json**
The homepage displays a reverse chronology of the most recent 12 posts.

**page.json**
A single page. Supports title and Gutenberg-driven content.

**search.json**
Displays a search input, meta info about the results, a grid of posts in reverse chronology, and pagination to navigate.

**single.json**
A single post. Supports title, excerpt, featured image, social share links, and Gutenberg-driven content.

## Components
Visit the [Irving docs (WIP)](http://storybook.irvingjs.com) for a more in-depth look at components.

## Installation
To install this theme, upload the zip or clone the repo into your `/wp-content/themes/` directory and activate from the admin.

Visit the Irving [Quick Start Guide (WIP)](http://storybook.irvingjs.com) to setup an Irving frontend that works with this example theme.

## Development
### Branch Workflow
All features should be branched off master with a pull request.

### Running Tests
Run `phpunit` in the root of the theme.

### PHPCS
* Run `composer install` in the theme root to install PHPCS requirements.
* Run `composer phpcs` (same location).
