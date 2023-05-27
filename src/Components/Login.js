import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';

export default function Login({users}) {
   

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [wrongCred, setWrongCred] = useState(false)
    const [disable, setDisable] = useState('')

    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        setDisable('')
        const emailCheck = users.filter(user => user.email.toLowerCase().includes(email.toLowerCase()));
        const passwordCheck = users.filter(user => user.password.toLowerCase().includes(password.toLowerCase()));
         if(emailCheck!='' && passwordCheck!='')
        {
            setWrongCred(false)
            history.push('/home')
           
        }else{
            setWrongCred(true)
        }
     
    }
  
 
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://preview.colorlib.com/theme/bootstrap/login-form-07/images/undraw_remotely_2j6y.svg" alt="login" className="img-fluid " />
                        </div>
                        <div className="col-md-6 contents">
                            <br /><br /><br /><br />

                            <div className="row justify-content-center">
                                <div className="col-md-8">

                               {
                                   wrongCred && <div class="alert alert-danger" style={{display:disable}}  role="alert">
                                   <button type="button" class="btn-close"  aria-label="Close " onClick={()=>{setDisable("none")}}></button>
                                   <span className="pl-3">Invalid Email or Password</span>

                                </div>
                               }
                                    

                                    <div className="mb-4">
                                        <h3>Sign In</h3>
                                        <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group first">
                                            <label>Email</label>
                                            <input type="email" className="form-control" id="username" onChange={(e) => { setEmail(e.target.value) }} />

                                        </div>
                                        <div className="form-group last mb-4">
                                            <label >Password</label>
                                            <input type="password" className="form-control" id="password" onChange={(e) => { setPassword(e.target.value) }} />

                                        </div>



                                        <input type="submit" value="Log In" className="btn btn-block brand-btn" />
                                        <div className="d-flex mb-0 align-items-center">

                                            <label className="control control--checkbox mb-4 text-primary"> <Link to="/signup" className="caption">Create New Account</Link>
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
