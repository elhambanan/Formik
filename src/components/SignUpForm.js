import { useState } from "react";

const SingUpForm = () => {
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const changeHandler = ({target}) => {
        setUserData({...userData, [target.name]: target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("clicked")
    }

    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <div className="formControl">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className="formControl">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className="formControl">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        value={userData.password}
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit">Sing Up</button>
            </form>
        </div>
     );
}
 
export default SingUpForm;