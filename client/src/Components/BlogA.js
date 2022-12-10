import React, {Component} from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container, Row, Image, Carousel, Col, Form,Button, Dropdown } from "react-bootstrap";
import { HashRouter, Route } from "react-router-dom";
import TodoByUser from "./TodoByUser";
import TodoServices from '../services/todos.services';
import './blogsWrite.scss'
import Advertisements from "./Advertisements";

class BlogA extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            rowLength:2,
            heading:'',
            content:'',
            userName: localStorage.getItem("user") !== null && localStorage.getItem("user") !== undefined
            ? JSON.parse(localStorage.getItem("user")).userName
            : ''
        }
    }

    render(){

        const formSubmit = (e) =>{
            e.preventDefault()
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;

            TodoServices.addTodo(
                this.state.heading,
                this.state.content,
                today,
                this.state.userName
                ).then( ()=>{
                    window.location.reload();
                },
                error =>{
                    console.log('error.respons')
                })

            const todo={ //add user id
                head:this.state.heading,
                content:this.state.content, 
            }
            this.props.writeBlog(todo)
            this.setState({rowLength:3,heading:'Title',content:'Write about your task',color:'grey'})

        }
        console.log(this.state)
        

        return(
            <Container>
                <Row >
                    <h2 className="d-flex justify-content-center">
                        Create your To-Do List
                    </h2>
                </Row>
                <Row>
                   
                    <Col xs={12} >
                        <Form.Label><h5>To-Do</h5></Form.Label>
                    </Col>
                    
                </Row>
                <Row>
                    
                    <Col xs={12} md={8}>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            style={{backgroundColor:'##FFFFFF', color:'##FFFFFF', border: '0.5px solid #002934'}}
                            as="textarea" rows={1}
                            placeholder='Task Heading'
                            value={this.state.heading}
                            onChange={(e)=> {this.setState({heading:e.target.value})}}
                            />
                        </Form.Group>
                        </Form>
                    </Col>
                    
                </Row>
                <Row className="last-row">
                   
                    <Col xs={12} md={8}>
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Control as="textarea" 
                            style={{backgroundColor:'#FFFFFF', color:'#000000', border: '0.5px solid #002934'}}
                            rows={this.state.rowLength}
                            placeholder='Write about your Task'
                            value={this.state.content}
                            onClick={(e)=>{this.setState({rowLength:10})}} 
                            onChange={(e)=> {this.setState({content:e.target.value})}}/>
                        </Form.Group>
                        {
                            this.state.heading !== '' && this.state.content !==''
                            ?<Button className="btn-post" variant="primary" type="submit">Post</Button>
                            :<Button className="btn-post" variant="primary" type="submit" disabled>Post</Button>
                        }
                    </Form>
                    </Col >
                    
                    
                </Row>
                <Row>
                  
                    <Col xs={12} md={8} className="user-blogs">
                        <TodoByUser userName={this.state.userName}/>
                    </Col>


                </Row>
                
            </Container>
        )
    }
}

export default BlogA;