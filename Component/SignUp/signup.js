import './signup.css';
import {AiOutlineEye} from 'react-icons/ai';
import {useState} from "react";

import axios from "axios"
import { useHistory } from "react-router-dom"

const SignUp = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    const [state, setState] = useState(false);
    const toggleBtn = () => {
        setState(prevState => !prevState);
    }

    return ( 
        <div className = "App" >
            <form className="form" >
                <div class="logo"></div>
                <image class="img" src="mk.png"/>
                <h6 class="text"> ubiquitous.co </h6> 
                <h6 class="text2"> Login </h6> 
                <h6 class="text3"> Please login to continue</h6>
                <div>
 
                        <input type="text" name="name" value={user.name} onChange={handleChange} class="form__Name" placeholder="Enter Your User Name" />
                        <label class=" Name" for="Name">User Name</label> 
                </div>
                <div>
                <label class="Email" for="Email">Email</label>
                <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
                </div>
                <div class="input-element-wrapper">
                    <label class="Password" for="Password">Password</label>
                    <input  name="password" value={user.password} class="form__password" type={state ? "text" : "password"} onChange={ handleChange } placeholder="Enter Your Password" />
                    <button class="btn" onClick={toggleBtn}> <AiOutlineEye /> </button>
                </div>
                <button class="sign_in" ocClick={signup} > sign in </button> 
                <h6 class="text4"> Not registered yet ? Sign up <span> Here </span>.</h6>
            </form> 
        </div>
    );
}

export default SignUp;