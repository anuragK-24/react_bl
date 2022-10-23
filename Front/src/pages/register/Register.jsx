import "./register.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios" 

export default function Register() {
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false)
  

  const handleSubmit = async (e) => {  //we are using async here cz it's just a fun not a useEffect
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register",{
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login")
      //if we don't have any error and if we have any data  it'll redirect to login page
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form  className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput " placeholder="Nam kya h re baba ..."  onChange={e=>setUsername(e.target.value)}/>
        <label>Email</label>
        <input type="text" className="registerInput " placeholder="Chal email bata..." onChange={e=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" className="registerInput " placeholder="Aye tu password dal re..." onChange={e=>setPassword(e.target.value)}/>
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login"> Login </Link>
      </button>
      {error && <span style={{color:"yellow", marginTop:"15px", fontSize:"25px"}}>Garbar h re baba!</span>}
      {/* this'll show when error happens in submitting */}
    </div>
  )
}
