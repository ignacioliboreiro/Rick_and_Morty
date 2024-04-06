import React, { useEffect, useState } from 'react'
import validation from '../validation'
import "./Form.css"



function Form({login}) {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    }) 

    const [errors, setErrors] = useState({})

    const handelChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name]: evento.target.value
        })
        setErrors(validation(userData))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

    useEffect(() => {
        if(userData.email !== "" || userData.password !== "") {
        const userValidated = validation(userData);
        setErrors(userValidated);
    }
    },[userData])

    return (
        <div className='login-box'>
            <form onSubmit={handleSubmit}>
            <div class="user-box">
                <label htmlFor="email"></label>
                <input
                    type="text"
                    name='email'
                    placeholder='Email:'
                    value={userData.email}
                    onChange={handelChange}
                    />
                    </div>
                    {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                <br />
                <div className="user-box">
                
                <label htmlFor="passsword"></label>
                <input
                    type="password"
                    name='password'
                    placeholder='Password:'
                    value={userData.password}
                    onChange={handelChange}
                    />
                </div>
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form