import React from 'react';

import Navbar from './nav/Navbar';
import Landing from './landing/Landing';
import About from './about/About';
import Tracks from './tracks/Tracks';
import Schedule from './schedule/Schedule';
import Campfire from './campfire/Campfire';
import FAQs from './faqs/FAQs';
import Sponsors from './sponsors/Sponsors';
import Footer from './footer/Footer';

import './assets/css/app.css';
import './assets/css/fontello.css';

const sections = [
  {
    title: 'Home',
    id: 'landing',
    titleColor: '#5c5299',
    Component: Landing
  },
  {
    title: 'About',
    id: 'about',
    titleColor: '#3a3d6d',
    Component: About
  },
  {
    title: 'Tracks',
    id: 'tracks',
    titleColor: '#5f76cb',
    Component: Tracks
  },
  {
    title: 'Schedule',
    id: 'Schedule',
    titleColor: '#A94A64',
    Component: Schedule
  },
  {
    title: 'Campfire',
    id: 'Campfire',
    titleColor: '#A94A64',
    Component: Campfire
  },
  {
    title: 'FAQs',
    id: 'faqs',
    titleColor: '#f16a43',
    Component: FAQs
  },
  {
    title: 'Sponsors',
    id: 'sponsors',
    titleColor: '#f8aa5b',
    Component: Sponsors
  }
];

export default () => (
  <React.Fragment>
    <Navbar navItems={sections} />
    {sections.map(({ title, id, titleColor, Component }) => (
      <Component id={id} key={id} titleColor={titleColor} />
    ))}
    <Footer />
  </React.Fragment>
);
