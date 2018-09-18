import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import TopNav from '../components/topnav/topnav';
import Hero from '../components/hero/hero';
import './index.css';
import favicon from '../images/favicon.ico';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="icon" href={favicon} sizes="16x16" />
    </Helmet>
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
  query LayoutQuery {
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
