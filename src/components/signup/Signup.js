import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useHighlight from "../../hooks/useHighlight";
import useTitle from "../../hooks/useTitle";
import Back from "../Back";
import app from "../../firebase";
import { Redirect } from "react-router";

const Signup = () => {
    useTitle("TICKET APP - SIGNUP");
    const { highlight } = useHighlight("signup");

    if(highlight !== null && highlight === "signup"){
        document.querySelector("#signup-btn").classList.add("bg-green-200");
        document.querySelector("#login-btn").classList.remove("bg-green-200");
    }

    const { register, handleSubmit, formState: { errors }, watch} = useForm();
    const password = useRef(null);
    password.current = watch("password", "");

    const [redirect, setRedirect] = useState(false);
    const [firebaseError, setFirebaseError] = useState(null);

    const signUp = (data, event) => {
        event.preventDefault();

        app.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((user) => {
            setRedirect(true);
        })
        .catch((error) => {
            setFirebaseError(error.message);
        })
    } 

    return (
        <div className="py-20 grid grid-cols-12">
            { redirect && <Redirect to="/dashboard" /> }

            <div className="col-span-1">
                <Back />
            </div>
            <div className="col-span-10 flex justify-center">
                <div className="card">
                    <p className="text-3xl">CREATE ACCOUNT</p>
                    <form onSubmit={handleSubmit((data, event) => signUp(data, event))}>
                        <div className="mt-3">
                            <label className="block">EMAIL:</label>
                            <input type="email" className="input"
                                {...register("email", { required: { value: true, message: "This is a required field" } } )}
                            />
                            { errors.email && <p className="errors">{ errors.email.message }</p> }
                        </div>
                        <div className="mt-3">
                            <label className="block">PASSWORD:</label>
                            <input type="password" className="input" 
                                {...register("password", { 
                                                            required: { value: true, message: "This is a required field" },
                                                            minLength: { value: 8, message: "Please enter at least 8 characters" } 
                                                         } )}
                            />
                            { errors.password && <p className="errors">{ errors.password.message }</p> }
                        </div>
                        <div className="mt-3">
                            <label className="block">CONFIRM PASSWORD:</label>
                            <input type="password" className="input" 
                                {...register("confirmPassword", {
                                                                    required: { value: true, message: "This is a required field" },
                                                                    validate: value => value === password.current || "The password don't match" 
                                                                 } )}
                            />
                            { errors.confirmPassword && <p className="errors">{ errors.confirmPassword.message }</p> }
                        </div>
                        <div className="mt-3">
                            <button className="btn">SIGN UP</button>
                        </div>
                    </form>

                    { firebaseError && <p className="errors">{ firebaseError }</p> }
                </div>
            </div>
            <div className="col-span-1">

            </div>
        </div>
    )
}

export default Signup;
