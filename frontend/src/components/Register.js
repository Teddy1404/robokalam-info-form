import React, { useState } from "react";
import axios from "axios";
import './register.css';



const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
 
  //form function 
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name,email,password,phone,answer,address});
      if(res && res.data.success){
     alert("Submitted")
     window.location.reload();
      }else{
     alert("error")
      }
    } catch (err) {
      console.log(err);
   alert("not register cousrs is error")
    }
  };
  
   
       

  return (
    <div title="Information Form">
      <div className=" info-box form-container" style={{ minHeight: "90vh" }}>
        <h2>Information Form</h2>
        <form onSubmit={handleSubmit}>
    <div className="user-box">
    <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
            
    </div>

    <div className="user-box">
    <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email "
              required
            />
            
    </div>
    <div className="user-box">
    <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
           
    </div>
    <div className="user-box">
    <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
           
    </div>
        
    <div className="user-box">
    <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
        
    </div>
    <div className="user-box">
    <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              placeholder="What is Your Favorite sports"
              required
            />
          
    </div>
    <a>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button type="submit" className="btn btn-primary">
            Submit
          </button>
    </a>   
   
          
        </form>
      </div>
    </div>
  );
};

export default Register;