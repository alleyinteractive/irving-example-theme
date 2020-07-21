# Irving Example Theme
## Description
The **Irving Example Theme**'s purpose is to demo Irving and WordPress working together, and offer concrete examples to developers looking to learn Irving's patterns and architecture.
 
It primarily contains examples of how to structure components in templates and template parts.

## Demo
[See the theme in action](https://irving-production.herokuapp.com/).
*(server may need to boot up, refresh if you see an error)*

## Templates
[Documentation on templating with WP Irving](http://storybook.irvingjs.com).

**404.json**
Page not found template.

**archive.json**
Displays a grid of posts in reverse chronology and pagination to navigate.

**author.json**
Same as archive.json.

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
[Full documentation on components in Irving and WP Irving](http://storybook.irvingjs.com).

## Installation
To install this theme, upload the zip or clone the repo into your `/wp-content/themes/` directory and activate from the admin.

See the [Quick Start documentation](http://storybook.irvingjs.com) on how to work with the Irving Core frontend.

## Development
### Branch Workflow
All features should be branched off master with a pull request.

### Running Tests
Run `phpunit` in the root of the theme.

### PHPCS
* Run `composer install` in the theme root to install PHPCS requirements.
* Run `composer phpcs` (same location).
