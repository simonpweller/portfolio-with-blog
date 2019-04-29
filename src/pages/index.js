import React from 'react';
import PropTypes from 'prop-types';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import Project from '../components/project/project';
import './index.module.css';
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <>
      <Skills id="about" />
      <section id="portfolio" className="section--alt">
        <div className="wrapper fw">
          <h2>Portfolio projects</h2>
          <h3>Web Applications</h3>
          <div styleName="portfolio">
            <Project
              name="Pinterest Clone with masonry.js"
              image={data.pinterest.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-pinterest-clone"
              url="https://infinite-headland-31227.herokuapp.com/"
              github="https://github.com/simonpweller/pinterest-clone"
            />
            <Project
              name="Stockmarket watch with websockets"
              image={data.stocks.publicURL}
              brief="https://www.freecodecamp.org/challenges/chart-the-stock-market"
              url="https://fcc-stockwatch.herokuapp.com/"
              github="https://github.com/simonpweller/fcc-stockwatch"
            />
            <Project
              name="Nightlife coordination with Yelp API"
              image={data.nightlife.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app"
              url="https://fcc-nl-app.herokuapp.com/search?location=Berlin"
              github="https://github.com/simonpweller/fcc-nightlife"
            />
            <Project
              name="Game of Life in React"
              image={data.gol.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-the-game-of-life"
              url="https://fcc-gol.herokuapp.com/"
              github="https://github.com/simonpweller/fcc-game-of-life"
            />
            <Project
              name="Book Trading Club with Google Books API"
              image={data.btc.publicURL}
              brief="https://www.freecodecamp.org/challenges/manage-a-book-trading-club"
              url="https://my-fcc-bookclub.herokuapp.com/"
              github="https://github.com/simonpweller/fcc-bookclub"
            />
          </div>
          <h3>Data Visualizations (with D3.js)</h3>
          <div styleName="portfolio">
            <Project
              name="Bar Chart"
              image={data.bar.publicURL}
              brief="https://www.freecodecamp.org/challenges/visualize-data-with-a-bar-chart"
              url="https://d3-chart-demos.herokuapp.com/bar.html"
              github="https://github.com/simonpweller/d3-demos"
            />
            <Project
              name="Heatmap Chart"
              image={data.heatmap.publicURL}
              brief="https://www.freecodecamp.org/challenges/visualize-data-with-a-heat-map"
              url="https://d3-chart-demos.herokuapp.com/heatmap.html"
              github="https://github.com/simonpweller/d3-demos"
            />
            <Project
              name="Force-directed Visualization"
              image={data.force.publicURL}
              brief="https://www.freecodecamp.org/challenges/show-national-contiguity-with-a-force-directed-graph"
              url="https://d3-chart-demos.herokuapp.com/force-directed.html"
              github="https://github.com/simonpweller/d3-demos"
            />
            <Project
              name="Map Visualization of Meteor Strikes"
              image={data.map.publicURL}
              brief="https://www.freecodecamp.org/challenges/map-data-across-the-globe"
              url="https://d3-chart-demos.herokuapp.com/map.html"
              github="https://github.com/simonpweller/d3-demos"
            />
            <Project
              name="Scatter Chart"
              image={data.scatter.publicURL}
              brief="https://www.freecodecamp.org/challenges/visualize-data-with-a-scatterplot-graph"
              url="https://d3-chart-demos.herokuapp.com/scatter.html"
              github="https://github.com/simonpweller/d3-demos"
            />
          </div>
          <h3>Javascript Applets</h3>
          <div styleName="portfolio">
            <Project
              name="Javascript Calculator"
              image={data.calculator.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-javascript-calculator"
              url="https://codepen.io/simonpweller/pen/LjxYYX"
              onCodepen
              background="rgb(153, 153, 153)"
            />
            <Project
              name="Game of Simon"
              image={data.simon.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-simon-game"
              url="https://codepen.io/simonpweller/pen/wqJmGw"
              onCodepen
            />
            <Project
              name="Quote Generator"
              image={data.quote.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-random-quote-machine"
              url="https://codepen.io/simonpweller/pen/oexRVg"
              onCodepen
              background="#FB6964"
            />
            <Project
              name="Tic Tac Toe with AI opponent"
              image={data.ttt.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game"
              url="https://codepen.io/simonpweller/pen/zdNXqb"
              onCodepen
            />
            <Project
              name="Pomodoro Clock"
              image={data.pomodoro.publicURL}
              brief="https://www.freecodecamp.org/challenges/build-a-pomodoro-clock"
              url="https://codepen.io/simonpweller/pen/qXRmgY"
              onCodepen
              background="rgb(51, 51, 51)"
            />
          </div>
        </div>
      </section>
      <Contact />
    </>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query ProjectImages {
    pinterest: file(relativePath: {eq: "images/portfolio/pinterest-clone.png"}) {
      publicURL
    }
    stocks: file(relativePath: {eq: "images/portfolio/stockmarket-watch.png"}) {
      publicURL
    }
    nightlife: file(relativePath: {eq: "images/portfolio/nightlife-coordination.png"}) {
      publicURL
    }
    gol: file(relativePath: {eq: "images/portfolio/game-of-life.png"}) {
      publicURL
    }
    btc: file(relativePath: {eq: "images/portfolio/book-trading-club.png"}) {
      publicURL
    }
    bar: file(relativePath: {eq: "images/portfolio/bar-chart.png"}) {
      publicURL
    }
    heatmap: file(relativePath: {eq: "images/portfolio/heatmap-chart.png"}) {
      publicURL
    }
    force: file(relativePath: {eq: "images/portfolio/force-directed-chart.png"}) {
      publicURL
    }
    map: file(relativePath: {eq: "images/portfolio/map-chart.png"}) {
      publicURL
    }
    scatter: file(relativePath: {eq: "images/portfolio/scatter-chart.png"}) {
      publicURL
    }
    calculator: file(relativePath: {eq: "images/portfolio/javascript-calculator.png"}) {
      publicURL
    }
    simon: file(relativePath: {eq: "images/portfolio/simon.png"}) {
      publicURL
    }
    quote: file(relativePath: {eq: "images/portfolio/quote-generator.png"}) {
      publicURL
    }
    ttt: file(relativePath: {eq: "images/portfolio/tic-tac-toe.png"}) {
      publicURL
    }
    pomodoro: file(relativePath: {eq: "images/portfolio/pomodoro-clock.png"}) {
      publicURL
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
