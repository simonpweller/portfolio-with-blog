import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import TopNav from './topnav/topnav'
import Hero from './hero/hero'
import './layout.css'
import favicon from '../images/favicon.ico'
import { StaticQuery } from 'gatsby'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`query LayoutQuery {
         site {
           siteMetadata {
             title
           }
         }
         file(relativePath: {eq: "images/markus-spiske-763806-unsplash.jpg"}) {
            childImageSharp {
              sizes(maxWidth: 2000) {
                ...GatsbyImageSharpSizes
              }
            }
         }
       }
     `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link rel="icon" href={favicon} sizes="16x16"/>
        </Helmet>
        <TopNav/>
        <Hero image={data.file.childImageSharp}/>
        <main>
          {children}
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout