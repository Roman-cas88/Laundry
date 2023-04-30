import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { Container, Button } from "react-bootstrap/";
import Form from 'react-bootstrap/Form';
import style from "./Login.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelectorUsers } from "../../store/slices/storageSlice"

const userLocaleStorage = localStorage.getItem('user');
const localeEmail = userLocaleStorage ? JSON.parse(userLocaleStorage).email : "@";
const localePass = userLocaleStorage ? JSON.parse(userLocaleStorage).password : "";

export const Login = () => {
    const storage = useSelectorUsers();
    console.log("login: ", storage )
    const navigate = useNavigate();

    const onSubmit = (data) => {
        let isAuth = storage.find(e => (e.email === data.email && e.password === data.password))   //  checking login in store 
        if (isAuth)         {
            alert (`${data.email}  is in the store`)
            return navigate("/main");
        }   
        alert (`Login or password is incorrect. Please enter correct or register`)
    };

const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
} = useForm(
    {
    defaultValues: {
        email: localeEmail,
        password: localePass
    }
}
);
const password = useRef({});
password.current = watch("password", "");

return (
    <Container style={{maxWidth: '500px'}}>
    <Form className='border p-3 mb-5 ' onSubmit={handleSubmit(onSubmit)} >
        <h3 >Login</h3>
        <Form.Group className="mb-3" controlid="email">
            <Form.Control
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Please enter a valid email"
                    }
                })}
            />
            {errors.email && <p className={style.errorMsg}>{errors.email.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlid="password">
            <Form.Control
                type="password"
                placeholder="Your password"
                autoComplete="on"
                {...register("password", {
                    required: "Password is required.",
                    minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters"
                    }
                })}
            />
            {errors.password && (
                <p className={style.errorMsg}>{errors.password.message}</p>
            )}
        </Form.Group>
            <Form.Check className="mb-3" controlid="rememberme"
            type = "checkbox"
            id= ""
            label = "Remember me"
            />
        <Button className="mb-3 w-100" variant="primary" type="submit"> Log in </ Button >
        <div>
            <Link to="/registration">
            <Button className="mb-3 w-100" variant="outline-primary"> Register now </ Button >
            </Link>
        </div>
        </Form>
    </ Container>
)
}