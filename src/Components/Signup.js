import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
// import {validateEmail} from './helper'

export default function Singup({onData,setData}) {
    const [name, setUserName] =useState()
    const [email, setEmail] =useState()
    const [password, setPassword] =useState()
    const [address, setAddress] =useState()

    const [wrongCred, setWrongCred] = useState(false)
    const [signed, setSigned] = useState(true)
    const [disable, setDisable] = useState('')
 

    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable('')
    const newUser={
        name,
        email,
        password,
        address
    }
   

    const emailCheck = onData.filter(onData => onData.email.toLowerCase().includes(email.toLowerCase()));
     

    if(emailCheck!='')
    {
        setWrongCred(true)
     
        
    }else{
        setWrongCred(false)
        setSigned(true)
        setData([...onData,newUser])
        setUserName('')
        setEmail('')
        setPassword('')
        setAddress('')
      
    }

       };

    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <br /><br /><br /><br />
                            <img src="https://img.freepik.com/premium-vector/man-makes-appointment-mobile-chat-illustration-concept_106954-1215.jpg" alt="signup" className="img-fluid " />
                        </div>
                        <div className="col-md-6 contents">
                            <br /><br />

                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                {
                                   wrongCred && <div class="alert alert-danger" style={{display:disable}}  role="alert">
                                   <button type="button" class="btn-close"  aria-label="Close " onClick={()=>{setDisable("none")}}></button>
                                   <span className="pl-3">Email Already Taken</span>

                                </div>
                               }
                                {
                                   signed && <div class="alert alert-success" style={{display:disable}}  role="alert">
                                   <button type="button" class="btn-close"  aria-label="Close " onClick={()=>{setDisable("none")}}></button>
                                   <span className="pl-3">Account Created Successfully. <Link to="/">Login</Link></span>

                                </div>
                               }
                                    <div className="mb-4">
                                        <h3>Sign Up</h3>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group first">
                                            <label >Username</label>
                                            <input type="text" value={name} required className="form-control" id="username" onChange={(e)=>{setUserName(e.target.value)}} />

                                        </div>
                                        <div className="form-group first">
                                            <label >Email</label>
                                            <input type="email" value={email} required className="form-control" id="email" onChange={(e)=>{setEmail(e.target.value)}} />

                                        </div>
                                        <div className="form-group last mb-4">
                                            <label >Password</label>
                                            <input type="password" value={password} required className="form-control" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>

                                        </div>
                                        <div className="form-group last mb-4">
                                            <label >Address</label>
                                            <input type="text" value={address} className="form-control" id="address" onChange={(e)=>{setAddress(e.target.value)}}/>

                                        </div>



                                        <input type="submit" value="Log In" className="btn btn-block brand-btn" />
                                        <div className="d-flex mb-0 align-items-center">

                                            <label className="control control--checkbox mb-4 text-primary"> <Link to="/" className="caption">Already have an account</Link>
                                                <div className="control__indicator"></div>
                                            </label>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
