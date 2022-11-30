import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ErrorMessage from '../../components/ErrorMessage';
import "./LoginPage.css";


function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("");
  const [success, setSuccess] = useState(false);



  const submitHandler = async (e) => {

    e.preventDefault(); 

     try{
       const requestOptions = {
          method: 'POST',
          headers: {
              "Content-type":"application/json"
          },

          body: JSON.stringify({email,password})

       }


      /*
        const data = await fetch('http://localhost:9000/user/login',requestOptions)
       .then((response)=>response.json())
       .then((data)=>console.log(data));

      */

       const data = await fetch('http://localhost:9002/user/login',requestOptions)
       .then((response)=>response.json())
       .then((data)=>
       {if(data.message ==="Invalid Email or Password!")
         {
              setError(error.response.data.message);


         }

         else
           {
              
              console.log(data);
              setSuccess(true);
              localStorage.setItem('userInfo',JSON.stringify({email})); 



           }
     })

     }catch(error){
         
      alert("Wrong email or password");
      setError(error.response.data.message);

     }
      
  };
/*
    const data = await fetch('http://localhost:9000/user/login',requestOptions)
    .then((response) => response.json())
      .then((data) => {
        if (data.exist == true) {
          setSuccess(true);
        } else {
          alert("Your email or password is not valid");
        }
      }); */
  
       //localStorage.setItem('userInfo',JSON.stringify(data)); 

       //setLoading(false);

    
      



  return (

    <>
    {success ? (
      <div className="panel">
        <h1>Login Success</h1>
        <Card id="Login"></Card>
      </div>
    ) : (
    
     <div className="loginContainer">
    
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        
      <Card>
        <Card.Header className="login" as="h1">LOGIN</Card.Header>
        <Card.Body>
        <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="email">Email address</Form.Label>
        <Form.Control className="inputs" type="email" 
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="password">Password</Form.Label>
        <Form.Control className="inputs"type="password" 
        value={password}
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </Card.Body>
      </Card>
   </div> 
   )}
   </>
  
  );

}
export default LoginPage;
