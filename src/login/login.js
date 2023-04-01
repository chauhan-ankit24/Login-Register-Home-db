import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:4000/login", user)
            .then(res => {
                alert(res.data.message)
                // setUser(res.data.user)
                if (res.data.user) {
                    navigate("/homepage")
                }
            })
    }
    return (
        <MDBContainer fluid className="p-3 my-5 h-auto w-auto">
            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sampleimage" />
                </MDBCol>

                <MDBCol col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating size='md' tag='a' className='me-2'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                    </div>

                    <div className="divider align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <MDBInput wrapperClass='mb-4' label='Email address' name="email" value={user.email} onChange={handleChange} type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' name='password' value={user.password} onChange={handleChange} type='password' size="lg" />

                    <div className="d-flex justify-content-between mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <MDBBtn className="mb-0 px-5" size='lg' onClick={login}>Login</MDBBtn>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?  <MDBBtn className="mb-0 px-5" size='lg' onClick={() => navigate("/register")}>register</MDBBtn></p>
                    </div>

                </MDBCol>

            </MDBRow>

            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                <div className="text-white mb-3 mb-md-0">
                    Copyright © 2020. All rights reserved.
                </div>

                <div>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='facebook-f' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='twitter' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='google' size="md" />
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
                        <MDBIcon fab icon='linkedin-in' size="md" />
                    </MDBBtn>

                </div>

            </div>

        </MDBContainer>
    );
}

export default App;
