import React from 'react';
import './about.css';

const About = () => (
  <div id="about">
    <h2>About this site</h2>
    <p>
      This website was created to demonstrate
      just one way that micro frontends can be implemented.
    </p>
    <p>
      Micro frontends is an architectural style where independently deliverable
      frontend applications are composed into a greater whole. It's useful for
      breaking up monolithic frontend codebases into smaller, simpler
      applications that can be delivered to production by multiple teams
      independently.
    </p>
  </div>
);

export default About;
