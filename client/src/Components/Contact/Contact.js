import "./Contact.css";
import React from "react";

function onClickButton(event) {
  event.preventDefault();
  const form = document.getElementById('my_form');
  form.reset();
}

function Contact() {
  return (
    <>

      <div className="bck-image">
      
      <div className="contact-container contact-div">

      <div className="my-5">
        <h1 className="center-text">CONTACT</h1>
      </div>

      <div className="text">
      <h4>Hello there! We welcome your suggestions and ideas on how we can improve, and of course always love a friendly hello if you see us doing something you like. You can reach us anytime by emailing us at <a href="hello@travellingspoon.com">hello@travellingspoon.com</a> or filling out the form below.</h4>
      </div>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form id="my_form">
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+1-999-888-7766"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Comments
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  SUBMIT
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;