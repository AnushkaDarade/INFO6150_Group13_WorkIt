import React, {Component} from 'react'
import { Accordion, Carousel,Container, Card, Col, Button, Row } from 'react-bootstrap'
import './blogsWrite.scss';
import "./RealHome.css";

class RealHome extends Component{
    render(){
        return(
          <div style={{ 'minHeight': '100vh' }}>
            
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-50"
                      src="images/c1.png"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Stay Grateful!</h3>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/c2.png"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>Backpackers</h3>
                      <p>Wandering with no destination!</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>
                

                <Container>
                
                <Row>
                
                        <Card className="home-cards">
                          {/* <Card.Img className='card-img' variant="top" src="images/foodCard.png" /> */}
                          <Card.Body className='card-body'>
                            <Card.Title>What is Self-care?  Self-care has been defined as the process of establishing behaviors to ensure holistic well-being of oneself, to promote health, and to actively management of illness when it occurs. Individuals engage in some form of self-care daily with food choices, exercise, sleep, and dental care.</Card.Title>
                            <Button className="btn-go-to" variant="primary" href="#food">Go to Selfcare</Button>
                          </Card.Body>
                        </Card>

                        <Card className="home-cards">
                          {/* <Card.Img className='card-img' variant="top" src="images/foodCard.png" /> */}
                          <Card.Body className='card-body'>
                            <Card.Title>Want some inspiration? We have all the positive energy you would need for your life to be amazing, from sweet to spicy and everything in between!! With one click, you can enjoy Italian Pasta, Mexican Burritos, New York Style Pizza and Japanese Ramen. Looking for more recipes? Don't hesitate to go through all of them!</Card.Title>
                            <Button className="btn-go-to" variant="primary" href="#blog">Go to Blogs</Button>
                          </Card.Body>
                        </Card>

                  
                  
                  </Row>
                </Container> 


            </div>
        )
    }
}

export default RealHome