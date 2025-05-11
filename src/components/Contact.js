import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log("Form submitted:", { name, email, message });
    // Reset form fields after submission (optional)
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="center">
      <div className="row">
        <div className="col-sm-4">

        </div>
        <div className="col-sm-4">
        <form>
        <div class="form-group">
         
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          
        </div>
        <div class="form-group mt-3">
         
          <textarea
            
            class="form-control"
            id="msg"
            placeholder="Message"
          />
        </div>
        <div class="form-group mt-3">
         
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
        </div>

      </div>
      
    </div>
  );
};

export default ContactForm;
