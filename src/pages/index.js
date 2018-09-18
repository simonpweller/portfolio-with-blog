import React from 'react';
import PropTypes from 'prop-types';
import GatsbyImage from '../propTypes/gatsby-image';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import Project from '../components/project/project';
import './index.module.css';

const IndexPage = ({ data }) => (
  <div>
    <Skills id="about" />
    <section id="portfolio" className="section--alt">
      <div className="wrapper fw">
        <h2>Things I have built</h2>
        <h3>Web Applications</h3>
        <div styleName="portfolio">
          <Project
            name="Pinterest Clone with masonry.js"
            image={data.pinterest.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Pinterest%20Clone"
            url="https://infinite-headland-31227.herokuapp.com/"
            github="https://github.com/faktotum85/pinterest-clone"
          />
          <Project
            name="Stockmarket watch with websockets"
            image={data.stocks.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Chart%20the%20Stock%20Market"
            url="https://fcc-stockwatch.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-stockwatch"
          />
          <Project
            name="Nightlife coordination with Yelp API"
            image={data.nightlife.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app"
            url="https://fcc-nl-app.herokuapp.com/search?location=Berlin"
            github="https://github.com/faktotum85/fcc-nightlife"
          />
          <Project
            name="Game of Life in React"
            image={data.gol.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20the%20Game%20of%20Life"
            url="https://fcc-gol.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-game-of-life"
          />
          <Project
            name="Book Trading Club with Google Books API"
            image={data.btc.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Manage%20a%20Book%20Trading%20Club"
            url="https://my-fcc-bookclub.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-bookclub"
          />
        </div>
        <h3>Data Visualizations (with D3.js)</h3>
        <div styleName="portfolio">
          <Project
            name="Bar Chart"
            image={data.bar.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Bar%20Chart"
            url="https://d3-chart-demos.herokuapp.com/bar.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Heatmap Chart"
            image={data.heatmap.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Heat%20Map"
            url="https://d3-chart-demos.herokuapp.com/heatmap.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Force-directed Visualization"
            image={data.force.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Show%20National%20Contiguity%20with%20a%20Force%20Directed%20Graph"
            url="https://d3-chart-demos.herokuapp.com/force-directed.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Map Visualization of Meteor Strikes"
            image={data.map.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Map%20Data%20Across%20the%20Globe"
            url="https://d3-chart-demos.herokuapp.com/map.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Scatter Chart"
            image={data.scatter.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Scatterplot%20Graph"
            url="https://d3-chart-demos.herokuapp.com/scatter.html"
            github="https://github.com/faktotum85/d3-demos"
          />
        </div>
        <h3>Javascript Applets</h3>
        <div styleName="portfolio">
          <Project
            name="Javascript Calculator"
            image={data.calculator.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/build-a-javascript-calculator"
            url="https://codepen.io/faktotum85/pen/LjxYYX"
            onCodepen
            background="rgb(153, 153, 153)"
          />
          <Project
            name="Game of Simon"
            image={data.simon.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Simon%20Game"
            url="https://codepen.io/faktotum85/pen/wqJmGw"
            onCodepen
          />
          <Project
            name="Quote Generator"
            image={data.quote.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Random%20Quote%20Machine"
            url="https://codepen.io/faktotum85/pen/oexRVg"
            onCodepen
            background="#FB6964"
          />
          <Project
            name="Tic Tac Toe with AI opponent"
            image={data.ttt.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Tic%20Tac%20Toe%20Game"
            url="https://codepen.io/faktotum85/pen/zdNXqb"
            onCodepen
          />
          <Project
            name="Pomodoro Clock"
            image={data.pomodoro.childImageSharp}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Pomodoro%20Clock"
            url="https://codepen.io/faktotum85/pen/qXRmgY"
            onCodepen
            background="rgb(51, 51, 51)"
          />
        </div>
      </div>
    </section>
    <Contact />
  </div>
);

export default IndexPage;

export const query = graphql`
  query ProjectImages {
    pinterest: file(relativePath: {eq: "images/portfolio/pinterest-clone.png"}) {
      ...projectImage
    }
    stocks: file(relativePath: {eq: "images/portfolio/stockmarket-watch.png"}) {
      ...projectImage
    }
    nightlife: file(relativePath: {eq: "images/portfolio/nightlife-coordination.png"}) {
      ...projectImage
    }
    gol: file(relativePath: {eq: "images/portfolio/game-of-life.png"}) {
      ...projectImage
    }
    btc: file(relativePath: {eq: "images/portfolio/book-trading-club.png"}) {
      ...projectImage
    }
    bar: file(relativePath: {eq: "images/portfolio/bar-chart.png"}) {
      ...projectImage
    }
    heatmap: file(relativePath: {eq: "images/portfolio/heatmap-chart.png"}) {
      ...projectImage
    }
    force: file(relativePath: {eq: "images/portfolio/force-directed-chart.png"}) {
      ...projectImage
    }
    map: file(relativePath: {eq: "images/portfolio/map-chart.png"}) {
      ...projectImage
    }
    scatter: file(relativePath: {eq: "images/portfolio/scatter-chart.png"}) {
      ...projectImage
    }
    calculator: file(relativePath: {eq: "images/portfolio/javascript-calculator.png"}) {
      ...projectImage
    }
    simon: file(relativePath: {eq: "images/portfolio/simon.png"}) {
      ...projectImage
    }
    quote: file(relativePath: {eq: "images/portfolio/quote-generator.png"}) {
      ...projectImage
    }
    ttt: file(relativePath: {eq: "images/portfolio/tic-tac-toe.png"}) {
      ...projectImage
    }
    pomodoro: file(relativePath: {eq: "images/portfolio/pomodoro-clock.png"}) {
      ...projectImage
    }
  }

  fragment projectImage on File {
    childImageSharp {
      resolutions {
        ...GatsbyImageSharpResolutions
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
