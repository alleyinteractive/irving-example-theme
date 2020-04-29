import React from 'react';
import { Helmet } from 'react-helmet';
import Link from '../../elements/link';

const Header = () => (
  <header>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="https://irving-dev-wp.alley.test/wp-content/plugins/gutenberg/build/block-library/style.css?ver=1587070486" />
      <link rel="stylesheet" type="text/css" href="https://irving-dev-wp.alley.test/wp-content/plugins/gutenberg/build/block-library/theme.css?ver=1587070486" />
    </Helmet>
    <Link to="/">Home</Link>
    <Link to="/about-us/">About Us</Link>
    <Link to="/yeah/">Yeah</Link>
  </header>
);

export default Header;
