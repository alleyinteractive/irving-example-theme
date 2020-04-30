import App from 'example-components/layouts/app';
import Container from 'example-components/layouts/container';
import Footer from 'example-components/modules/footer';
import Header from 'example-components/modules/header';
import HTML from 'example-components/elements/rawHTML';
import Link from 'example-components/elements/link';
import Stack from 'example-components/layouts/stack';
import PostCard from 'example-components/cards/post';
// import Button from '@wordpress/block-library/src/button/save';
import * as materialComponents from '@material-ui/core';

const mapping = {
  'core/column': Container,
  'core/columns': Container,
  'core/group': Container,
  'core/heading': HTML,
  'core/paragraph': HTML,
  'core/post-content': HTML,
  'irving/admin-bar': Container,
  'irving/body-wrapper': Container,
  'irving/container': Container,
  'irving/footer': Footer,
  'irving/footer-wrapper': Container,
  'irving/head': Container,
  'irving/header': Header,
  'irving/header-wrapper': Container,
  'irving/html': HTML,
  'irving/link': Link,
  'irving/post-card': PostCard,
  'irving/stack': Stack,
  'irving/team-card': Container,
  // 'core/button': Button,
  app: App,
};

Object.keys(materialComponents).forEach((index) => {
  const name = index
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

  mapping[`material/${name}`] = materialComponents[index];
});

export default mapping;
