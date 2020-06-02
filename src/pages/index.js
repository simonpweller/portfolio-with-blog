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
          <h2>Demo applets</h2>
          <div styleName="portfolio">
            <Project
              name="Javascript Calculator"
              image={data.calculator.publicURL}
              brief="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
              url="https://codepen.io/simonpweller/pen/LjxYYX"
              onCodepen
              background="rgb(153, 153, 153)"
            />
            <Project
              name="Game of Life in React & Typescript"
              image={data.gol.publicURL}
              brief="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-the-game-of-life"
              url="https://fcc-game-of-life-v2.netlify.com/"
              github="https://github.com/simonpweller/fcc-game-of-life-v2"
            />
            <Project
              name="Quote Generator"
              image={data.quote.publicURL}
              brief="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"
              url="https://codepen.io/simonpweller/pen/gOaGWxB"
              onCodepen
              background="#FB6964"
            />
            <Project
              name="Tic Tac Toe with AI opponent"
              image={data.ttt.publicURL}
              brief="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/build-a-tic-tac-toe-game"
              url="https://codepen.io/simonpweller/pen/zdNXqb"
              onCodepen
            />
            <Project
              name="Pomodoro Clock"
              image={data.pomodoro.publicURL}
              brief="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock"
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
    gol: file(relativePath: {eq: "images/portfolio/game-of-life.png"}) {
      publicURL
    }
    calculator: file(relativePath: {eq: "images/portfolio/javascript-calculator.png"}) {
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
