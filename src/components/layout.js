import React from 'react'
import SEO from '../components/seo'
import './layout.css';

const Layout = ({ children }) => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div id='main'>
      { children }
    </div>
  </>
);


export default Layout;
