import React, { useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { Container, Button } from "react-bootstrap/";
import Form from 'react-bootstrap/Form';
import style from "./Login.module.css"


export const Registration = () => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
} = useForm(
    {
    defaultValues: {
        email: "@"
    }
}
);
const password = useRef({});
password.current = watch("password", "");
const onSubmit = data => console.log(data);

return (
    <Container style={{maxWidth: '500px'}}>
    <Form className='border p-3 mb-5 ' onSubmit={handleSubmit(onSubmit)} >
        <h3 >Login</h3>
        <Form.Group className="mb-3" id="firstName">
            <Form.Control
                type="text"
                placeholder="First name"
                {...register("firstName", {
                    required: "Please enter your First name",
                    pattern: {
                        value: /^[^0-9]/,
                        message: "Please enter a valid name"
                    }
                })}
            />
            {errors.firstName && (
                <p className={style.errorMsg}>{errors.firstName.message}</p> 
            )}
        </Form.Group>
        <Form.Group className="mb-3" id="lastName">
            <Form.Control
                type="text"
                placeholder="Last name"
                {...register("lastName", {
                    required: "Please enter your Last name",
                    pattern: {
                        value: /^[^0-9]/,
                        message: "Please enter a valid name"
                    }
                })}
            />
            {errors.lastName && (
                <p className={style.errorMsg}>{errors.lastName.message}</p> 
            )}
        </Form.Group>
        <Form.Group className="mb-3" id="appartmentNum">
            <Form.Control
                type="number"
                placeholder="Appartment number"
                {...register("appartmentNum", {
                    required: "Please enter your appartment number."
                })}
            />
            {errors.appartmentNum && (
                <p className={style.errorMsg}>{errors.appartmentNum.message}</p>  
            )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
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
        <Form.Group className="mb-3" controlId="password">
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
        <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Re-enter your password"
                        autoComplete="on"
                        {...register("confirmPassword", {
                            validate: (value) =>
                                value === password.current || "The passwords do not match"
                        })}
                    />
                    <Form.Text className="text-muted">
                        Your password must contain at least 6 characters. <br />
                    </Form.Text>
                    {errors.confirmPassword && (
                        <p className={style.errorMsg}>{errors.confirmPassword.message}</p>
                    )}
        </Form.Group>
        <Button variant="primary" type="submit"> Register now </ Button >
        </Form>
    </ Container>
)
}