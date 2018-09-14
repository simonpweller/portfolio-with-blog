import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import TopNav from '../components/topnav/topnav';
import Hero from '../components/hero/hero';
import './index.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <TopNav />
    <Hero image={data.file.childImageSharp} />
    <main>
      {children()}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "images/janko-ferlic-174927-unsplash.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
