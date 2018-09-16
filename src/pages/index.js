import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from '../propTypes/gatsby-image';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import Project from '../components/project/project';

const IndexPage = ({ data }) => (
  <div>
    <Skills id="about" />
    <Contact />
    <Project
      image={data.file.childImageSharp}
      name="Bar Chart"
      url="https://d3-chart-demos.herokuapp.com/bar.html"
      github="https://github.com/faktotum85/d3-demos"
    />
  </div>
);

export default IndexPage;

export const query = graphql`
  query ProjectImages {
    file(relativePath: {eq: "images/portfolio/bar-chart.png"}) {
      childImageSharp {
        sizes(maxHeight: 400) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: GatsbyImage.isRequired,
    }),
  }).isRequired,
};
