import {useFormik} from "formik";
import * as Yup from 'yup';
// 1.
const initialValues={
    name : "",
    email : "",
    phoneNumber : "",
    password : "",
    passwordConfirm : "",
    gender : ""
    }

// 2. 
const onSubmit = (values) => {
}  

// 3. validat  => Yup(validationSchema)
// const validate = (values) => {
//     let errors = {};
//     if(!values.name) {
//         errors.name = "Name is Required"
//     }
//     if(!values.email) {
//         errors.email = "Email is Required"
//     }
//     if(!values.password) {
//         errors.password = "Password is Required"
//     }
//     return errors
// }
const validationSchema = Yup.object({
    name : Yup.string()
        .required("Name is required"),
    email : Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phoneNumber : Yup.string()
        .matches(/^[0-9]{11}$/, "Invalid Phone number") 
        .required("Phone Number is required")
        .nullable(),  
    password : Yup.string()
        .required("Password is required"),
    passwordConfirm : Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Password is required"),
    gender : Yup.string()
        .required("Gender is required"),
})

const SingUpForm = () => {
    const formik = useFormik({
        initialValues ,
        onSubmit ,
        validationSchema,
        validateOnMount: true
    });
    // console.log("errors", formik.errors)
    // console.log("visited fields", formik.touched)
    console.log(formik)    

    return ( 
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="formControl">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && 
                     formik.touched.name && 
                     (<div className="error">{formik.errors.name}</div>)
                    }
                </div>
                <div className="formControl">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email && 
                     formik.touched.email && 
                     (<div className="error">{formik.errors.email}</div>)
                    }
                </div>
                <div className="formControl">
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input
                        id="phoneNum"
                        type="number"
                        name="phoneNumber"
                        {...formik.getFieldProps("phoneNumber")}
                    />
                    {formik.errors.phoneNumber && 
                     formik.touched.phoneNumber && 
                     (<div className="error">{formik.errors.phoneNumber}</div>)
                    }
                </div>
                <div className="formControl">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password && 
                     formik.touched.password && 
                     (<div className="error">{formik.errors.password}</div>)
                    }
                </div>
                <div className="formControl">
                    <label htmlFor="passConfirm">Password Confirmation</label>
                    <input
                        id="passConfirm"
                        type="password"
                        name="passwordConfirm"
                        {...formik.getFieldProps("passwordConfirm")}
                    />
                    {formik.errors.passwordConfirm && 
                     formik.touched.passwordConfirm && 
                     (<div className="error">{formik.errors.passwordConfirm}</div>)
                    }
                </div>
                <div className="formControl">
                    <input 
                        type="radio" 
                        id="0" 
                        value="0" 
                        name="gender" 
                        onChange={formik.handleChange}
                        checked={formik.values.gender === "0"}
                    />
                    <label htmlFor="0">Male</label>

                    <input 
                        type="radio" 
                        id="1" 
                        value="1" 
                        name="gender" 
                        onChange={formik.handleChange}
                        checked={formik.values.gender === "1"}
                    />
                    <label htmlFor="1">Female</label>                  
                </div>
                
                <button type="submit" disabled={!formik.isValid}>
                    Sing Up
                </button>
            </form>
        </div>
     );
}
 
export default SingUpForm;

// 3 steps in all forms:
// 1. managing state (changeHandler)
// 2. handling form submission (submitHandler)
// 3. validation - error message (by formik lib)

// **
// value={formik.values.name}
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}      => {...formik.getFieldProps("name")}