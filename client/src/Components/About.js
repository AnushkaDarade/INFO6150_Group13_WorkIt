import React, { Component } from 'react'
import FoodGif from './Cusines/Food.gif';
import video from './Travel/video.mp4';
import "./About.css";
export class About extends Component {
  render() {
    return (
        <div className='about-page'>
          <div className='about-container'>
          <h1 style={{textAlign:"center"}}>WORK IT!! <img src={FoodGif} height="160px" width="160px"  alt="Food"/></h1>
          <div class="row" style={{marginTop:"25px"}}>
            <div class="small-12 small-centered large-9 columns text-center">
              <h3>What are we?</h3>
              <h5 style={{margin:"40px"}}> <b>WORK IT</b> is like having a friend’s mom cook you a home cooked meal in every country you visit. 
                    Traveling Spoon connects travelers with local, vetted hosts to share the joy of a homemade meal in their home and 
                    learn about their cultural and culinary traditions passed down through generations.</h5>
            </div>
          </div>
          <div class="row">
            <div class="small-12 small-centered large-9 columns text-center">
              <h3>What we offer?</h3>
              <h5 style={{margin:"40px"}}>To help you experience local cuisine while traveling, Traveling Spoon offers in-home meals with our hosts. 
                In addition, we also offer in-home cooking experiences as well as market visits as an add-on to many of the meal experiences. 
                All of our hosts have been vetted to ensure a safe and delightful culinary experience.</h5>
            </div>
          </div>
          <div>
            <h5 style={{width:"10em",height:"150px",width:"500px",marginLeft:"auto",marginRight:"auto"}}>
              <i>"If you spend your vacation days thinking about what you’re going to eat next, you are in the right place. 
              Our mission is to find you the best foodie destinations & tours. Where to eat, what to eat, and some fun things to do when you are not eating!"
              </i>
            </h5>
         
          </div>
          </div>
         

        </div>
    )
  }
}

export default About