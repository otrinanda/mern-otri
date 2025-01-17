import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
  
  componentDidMount(){
    window.title="Staycation | Home";
    window.scrollTo(0,0);
  }

  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    console.log(this.props)
    return (
      <>
        <Header {...this.props}/>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories}/> 
        <Testimony data={landingPage.testimonial}/>
        <Footer/>
      </>
    );
  }
}
