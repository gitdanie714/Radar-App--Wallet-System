import React, { useState } from 'react'
import { MdEmail } from "react-icons/md"; 
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import "../styles/LoginSignup.css"
import InputContent from "../components/InputContent"
import Button from "../components/Button"
import pic from "../Assets/Images/login ui.jpg"
import { apiService } from '../ApiCalls';

function LoginSignup() {
  const navigate = useNavigate();
  
  const[action, setaction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeActionstate = (newaction) => {
    setaction(newaction);
    setError("");
   
  }

  const handleLogin = async () => {
    if(!email || !password  ){
      setError("Email and Password are required");
      return;
    }

    setLoading(true);
    try {
      const response = await apiService.login(email, password)
      const{token} = response.data;
      localStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed. Try again");
    }finally {
      setLoading(false);
    }
      
    }

  
  

  // // Handle Signup
  // const handleSignup = async () => {
  //   if (!fullName || !username || !email || !password) {
  //     setError("All fields are required.");
  //     return;
  //   }

  //   setLoading(true);
  //   try {
  //     const response = await apiService.signup(fullName, username, email, password);
  //     alert("Signup successful! Please login.");
  //     setAction("Login");
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Signup failed. Try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  
  var login = () => {
    return(
      <>
        <InputContent type="email" 
        placeholder="Enter Email Address" 
        icon={<MdEmail className='icon'/>}/>
        
        <InputContent type="password" 
        placeholder="Enter Password"
        icon={<RiLockPasswordFill className='icon'/>}/>
      </>
    );
  };

  var signup =() => {
    return(
      <>
        <InputContent type="email" 
        placeholder="Enter Email Address" 
        icon={<MdEmail className='icon'/>} inputStyle={{ width: "auto"

        }}/>
        
      </>
    )
  }

  return (
    <div className='login-container'>
      
        <div className="overlay">
      <a href='/'>
      <button className="back_button"  href= "/" id="back"style={{marginbottom: 100,marginLeft:25,padding:10,backgroundColor:"#007BFF",
}}>
        &#8592; 
      </button>
        </a>
          <div className='body'>
          <div className='img'>
            <img src={pic} alt="Signup/Login"/>
          </div>
          <div className='logininputcontainer'>
            <div className='signup'>
            <div className="text">{action == "signup" ?"SignUp":"Login"}</div>
            <div className='under'></div>

            {action == "signup"? signup():login()}
          { action == "login" && <div className="forgot-password">
            Forgot Password? <span>Click Here!</span></div>
}
            <div className="submitcontainer">
            <Button className={action === "Login" ?"submit gray" : "submit"} changeAction={()=>{changeActionstate('signup')}} buttonlabel="Signup"/> 
            <Button className={action === "Sign Up"? "sumbit gray":"submit"} changeAction={()=>{changeActionstate('login')}} onClick={() => navigate('/create-pin-modal')}buttonlabel="Login"/>
        </div>
        
        </div>
        </div>
{/* 
         .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
}  */}

          </div>
        
        </div>
        
    </div>
    
  )


};

export default LoginSignup;