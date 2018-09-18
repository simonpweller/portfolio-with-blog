import React from 'react';
import PropTypes from 'prop-types';
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
            image={data.pinterest.publicURL}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Pinterest%20Clone"
            url="https://infinite-headland-31227.herokuapp.com/"
            github="https://github.com/faktotum85/pinterest-clone"
          />
          <Project
            name="Stockmarket watch with websockets"
            image={data.stocks.publicURL}
            brief="https://www.freecodecamp.org/challenges/Chart%20the%20Stock%20Market"
            url="https://fcc-stockwatch.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-stockwatch"
          />
          <Project
            name="Nightlife coordination with Yelp API"
            image={data.nightlife.publicURL}
            brief="https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app"
            url="https://fcc-nl-app.herokuapp.com/search?location=Berlin"
            github="https://github.com/faktotum85/fcc-nightlife"
          />
          <Project
            name="Game of Life in React"
            image={data.gol.publicURL}
            brief="https://www.freecodecamp.org/challenges/Build%20the%20Game%20of%20Life"
            url="https://fcc-gol.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-game-of-life"
          />
          <Project
            name="Book Trading Club with Google Books API"
            image={data.btc.publicURL}
            brief="https://www.freecodecamp.org/challenges/Manage%20a%20Book%20Trading%20Club"
            url="https://my-fcc-bookclub.herokuapp.com/"
            github="https://github.com/faktotum85/fcc-bookclub"
          />
        </div>
        <h3>Data Visualizations (with D3.js)</h3>
        <div styleName="portfolio">
          <Project
            name="Bar Chart"
            image={data.bar.publicURL}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Bar%20Chart"
            url="https://d3-chart-demos.herokuapp.com/bar.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Heatmap Chart"
            image={data.heatmap.publicURL}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Heat%20Map"
            url="https://d3-chart-demos.herokuapp.com/heatmap.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Force-directed Visualization"
            image={data.force.publicURL}
            brief="https://www.freecodecamp.org/challenges/Show%20National%20Contiguity%20with%20a%20Force%20Directed%20Graph"
            url="https://d3-chart-demos.herokuapp.com/force-directed.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Map Visualization of Meteor Strikes"
            image={data.map.publicURL}
            brief="https://www.freecodecamp.org/challenges/Map%20Data%20Across%20the%20Globe"
            url="https://d3-chart-demos.herokuapp.com/map.html"
            github="https://github.com/faktotum85/d3-demos"
          />
          <Project
            name="Scatter Chart"
            image={data.scatter.publicURL}
            brief="https://www.freecodecamp.org/challenges/Visualize%20Data%20with%20a%20Scatterplot%20Graph"
            url="https://d3-chart-demos.herokuapp.com/scatter.html"
            github="https://github.com/faktotum85/d3-demos"
          />
        </div>
        <h3>Javascript Applets</h3>
        <div styleName="portfolio">
          <Project
            name="Javascript Calculator"
            image={data.calculator.publicURL}
            brief="https://www.freecodecamp.org/challenges/build-a-javascript-calculator"
            url="https://codepen.io/faktotum85/pen/LjxYYX"
            onCodepen
            background="rgb(153, 153, 153)"
          />
          <Project
            name="Game of Simon"
            image={data.simon.publicURL}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Simon%20Game"
            url="https://codepen.io/faktotum85/pen/wqJmGw"
            onCodepen
          />
          <Project
            name="Quote Generator"
            image={data.quote.publicURL}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Random%20Quote%20Machine"
            url="https://codepen.io/faktotum85/pen/oexRVg"
            onCodepen
            background="#FB6964"
          />
          <Project
            name="Tic Tac Toe with AI opponent"
            image={data.ttt.publicURL}
            brief="https://www.freecodecamp.org/challenges/Build%20a%20Tic%20Tac%20Toe%20Game"
            url="https://codepen.io/faktotum85/pen/zdNXqb"
            onCodepen
          />
          <Project
            name="Pomodoro Clock"
            image={data.pomodoro.publicURL}
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
