import React,{useState ,useContext} from "react";
import { AuthContext } from "./AuthContext";
export default function Login(){
    const [email,setEmail]= useState('');
    const [password,setpassword]=useState('');
    const authContext=useContext(AuthContext)
    function login(e){
         e.preventDefault(); 
         if (password==='123'){
             const token ='abc';
             localStorage.setItem('token',token);
             localStorage.setItem('email',email);
             authContext.setAuth({token,email})
         }
    }
    return(
        <form>
            <h1>Login</h1>
            <input type="email" className="form-control" placeholder="email" onChange={e=>setEmail(e.target.value)} value={email}/>
            
            <br/>
            <input type="password" className="form-control" placeholder="password" onChange={e=>setpassword(e.target.value)} value={password} />
            <br/>
            <button className="btn btn-primary" onClick={login}>Send</button>
        </form>
    );
}