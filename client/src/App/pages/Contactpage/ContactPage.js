import React,{useEffect, useState} from 'react'
import Card from "../../components/Card";

function Contact() {
    useEffect( ()=> {

      fetchItems();

    }, []);

    const[items, setItems] = useState([]);

    const fetchItems = async() => {

        const data = await fetch('http://localhost:9002/user/getAll'); 
        const items = await data.json();
        setItems(items);


    };

  return (
   <div>
    <div className="wrapper">
    <div className="contactHead">
      <h1>Welcome to Contact page</h1>
     
    <h2>Users registered so far:</h2>
      <div>
    {

           items.map(item => (
            <div>
              <p> {item.name} </p>
            </div>
           ))

    }
     </div>
    </div>
  </div>

  </div> 
  )
}

export default Contact;