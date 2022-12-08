import React, {Component} from 'react'
import { Carousel,Container, Card, Col, Button, Row } from 'react-bootstrap'
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
                      src="images/foodn2.jpg"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>Recipes Around The World</h3>
                      <p>Relish in the world of cuisines! </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/traveln7.jpg "
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Backpackers</h3>
                      <p>Wandering with no destination!</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="images/blogn1.jpg "
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Reviews</h3>
                      <p>Give your feedback to help others</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Container>
                <Row>
                    <Col xs={12} lg={4} md={6}>
                        <Card className="home-cards">
                          <Card.Img className='card-img' variant="top" src="images/foodCard.png" />
                          <Card.Body className='card-body'>
                            <Card.Title>We have all the recipes you would need for Thanksgiving Turkey to Christmas cookies, from sweet to spicy and everything in between! With one click, you can enjoy Italian Pasta, Mexican Burritos, New York Style Pizza and Japanese Ramen. Looking for more recipes? Don't hesitate to contact us!</Card.Title>
                            <Button className="btn-go-to" variant="primary" href="#food">Go to Food</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} md={6}>
                    <Card className="home-cards" >
                          <Card.Img className='card-img' variant="top" src="images/travelCardn4.jpg" />
                          <Card.Body className='card-body'>
                            <Card.Title>Come on board with us if you are tempted by the cuisines and want to take off! Let's discover what your perfect getaway looks like. Travel around the globe with us. Take a romantic walk around Rome and fall in love with the city of love! Athens' streets and Himalayan views will take your breath away.</Card.Title>
                            
                            <Button className="btn-go-to" variant="primary" href="#travel">Go to Travel</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} lg={4} md={6}>
                    <Card className="home-cards" >
                          <Card.Img className='card-img' variant="top" src="images/blogCardn3.jpg" />
                          <Card.Body className='card-body'>
                            <Card.Title> Do you have any travel stories? Let someone know about your travel experience and make their trip more enjoyable! There are several categories where you can post feedbacks and provide assistance to the community. We now allow you to review adventure sports, group trips, and give us your feedback!</Card.Title>
                            
                            <Button className="btn-go-to" variant="primary" href="#blog">Go to Reviews</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default RealHome