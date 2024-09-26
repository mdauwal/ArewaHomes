
import React, { useState } from 'react';
import { FaFacebookSquare, FaGoogle} from 'react-icons/fa';
import { IoMdCloseCircleOutline } from "react-icons/io";
import './CreateAccountForm.css';
import { Link, useNavigate } from 'react-router-dom';



const CreateAccountForm = () => {

    const [email, SetEmail] = useState('');
    const navigate = useNavigate();

    const handleEamilChange = (e) =>{
          SetEmail(e.target.value);
    }
    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log('EMAIL:',email);
      navigate("/verifyphone")
    }

    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
      // Simple email validation regex
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
    //   if (!emailRegex.test(email)) {
    //     alert("Please enter a valid email address.");
    //   } else {
    //     console.log('EMAIL:', email);
    //   }
    // };
    
  return (
    <div style={{minHeight:"90vh", display:"flex", alignItems:"center"}}>
      <div className="create-container">
          <button className='btn-close'>Close <span className='icon-close'> <IoMdCloseCircleOutline /> </span></button>
          <br /> <br /> <br /> <br />
          <div className="text-container">
              <div className="account-header">
                <h3>Create an account <br /> with RealHubAfrica</h3>
              </div>
              <div className="log-header">
                  <p>Already have an account?</p>
                  <Link to={"/"}>log in</Link>
              </div>
          </div>
          <div className="social-account">
              <button className="facebook-btn"> <FaFacebookSquare/>Continue with Facebook</button>
              <button className="google-btn"> <FaGoogle/>Continue with Google</button>
          </div>
          <hr />
          <form onSubmit={handleSubmit} className='account-form'>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="email"
                    id='email'
                    value={email} 
                    onChange={handleEamilChange}
                    placeholder='muhammad@gmail.com'
                    required/>
          <button type='submit' className='Btn-login'>Submit and continue</button>

          </form>
          <span className='check-wrap'>
            <input type="checkbox" name="checkbox" id="checkbox" /> Allow RealHubAfrica send you marketing emails.
          </span>
      </div>
    </div>
  )
}

export default CreateAccountForm
