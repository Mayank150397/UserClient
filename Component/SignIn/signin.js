import './signin.css';
import {AiOutlineEye} from 'react-icons/ai';
import {useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"

const Signin = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }


    const [state, setState] = useState(false);

    const toggleBtn = () => {
        setState(prevState => !prevState);
    }

    return ( 
        <div className = "App" >
            <form className="form">
                <div class="logo"></div>
                <image class="img" src="mk.png"/>
                <h6 class="text"> ubiquitous.co </h6> 
                <h6 class="text2"> Login </h6> 
                <h6 class="text3"> Please login to continue</h6>
                <div>
 
                        <input name="name" class="form__Name" type="text" placeholder="Enter Your User Name" value={user.name} onChange={handleChange} />
                        <label class=" Name" for="Name">User Name</label> 
                </div>
                <div class="input-element-wrapper">
                    <label class="Password" for="Password">Password</label>
                    <input name="password" class="form__password" type={state ? "text" : "password"} placeholder="Enter Your Password" value={user.password} onChange={handleChange} />
                    <button class="btn" onClick={toggleBtn}> <AiOutlineEye /> </button>
                </div>
                <button class="sign_in" onClick={register}> sign in </button> 
                <h6 class="text4"> Not registered yet ? Sign up <span href=""> Here </span>.</h6>
            </form> 
            
        </div>
    );
}

export default Signin;