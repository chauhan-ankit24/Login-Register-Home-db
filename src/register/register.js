import React, { useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && reEnterPassword) {
            if (password !== reEnterPassword) {
                alert("Both Password should be same");
            } else {
                // alert("posted");
                axios.post("http://localhost:4000/register", user)
                    .then(res => alert(res.data.message));
                    navigate("/login")
            }
        } else {
            alert("No feild should be empty");
        }
    }

    return (
        <MDBContainer fluid className="p-3 my-5 w-75">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phoneimage" />
                </MDBCol>

                <MDBCol col='4' md='6'>
                    <MDBInput wrapperClass='mb-4' label='Name' name="name" value={user.name} onChange={handleChange} type='name' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Email address' name="email" value={user.email} onChange={handleChange} type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' name='password' value={user.password} onChange={handleChange} type='password' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Re-enter Password' name='reEnterPassword' value={user.reEnterPassword} onChange={handleChange} type='reEnterPassword' size="lg" />

                    <MDBBtn className="mb-4 w-100" size="lg" onClick={register}>Register</MDBBtn>

                    <div className="divider align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" onClick={() => navigate("/login")} style={{ backgroundColor: '#3b5998' }}>
                        login
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="google" className="mx-2" />
                        Continue with google
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer >
    );
}

export default App;