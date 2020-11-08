import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import Header from '../src/Components/Header';
import Contact from '../src/Components/Contact';
import Footer from '../src/Components/Footer';
import HomePage from '../src/Components/HomePage';
import PortfolioPage from '../src/Components/PortfolioPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Bing's Portfolio site",
      headerLinks: [
        {title: "Home", path: "/"},
        {title: "Portfolio", path: "/"},
      ],
      home: {
        title: "Bing Yang",
        subTitle: "I'm a web developer & designer based in Canada",
      },
      portfolio: {
        title: '',
        subTitle: '',
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className='p-0' fluid>
          <Header></Header>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} />} />
          
          <Contact></Contact>
          <Footer></Footer>
        </Container>
      </Router>
      );
  }
  
}

export default App;
