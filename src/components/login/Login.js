import { useForm } from "react-hook-form";
import useHighlight from "../../hooks/useHighlight";
import useTitle from "../../hooks/useTitle";
import Back from "../Back";
import app from "../../firebase";
import { useState } from "react";
import { Redirect } from "react-router";

const Login = () => {
    useTitle("TICKET APP - LOGIN");
    const { highlight } = useHighlight("login");

    if(highlight !== null && highlight === "login"){
        document.querySelector("#signup-btn").classList.remove("bg-green-200");
        document.querySelector("#login-btn").classList.add("bg-green-200");
    }

    const { register, handleSubmit, formState:{ errors } }  = useForm();
    const [redirect, setRedirect] = useState(false);
    const [firebaseError, setFirebaseError] = useState(null);

    const login = (data, event) => {
        event.preventDefault();

        app.auth().signInWithEmailAndPassword(data.email, data.password)
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
                    <p className="text-3xl">LOGIN TO YOUR ACCOUNT</p>
                    <form onSubmit={handleSubmit((data, event) => login(data, event)) }>
                        <div className="mt-3">
                            <label className="block">EMAIL:</label>
                            <input type="email" className="input"
                                {...register("email", { required: { value: true, message: "This is a required field" } }) }
                            />
                            { errors.email && <p className="errors">{ errors.email.message }</p> }
                        </div>
                        <div className="mt-3">
                            <label className="block">PASSWORD:</label>
                            <input type="password" className="input" 
                                {...register("password", { required: { value: true, message: "This is a required field" } })}
                            />
                            { errors.password && <p className="errors">{ errors.password.message }</p> }
                        </div>
                        <div className="mt-3">
                            <button className="btn">LOGIN</button>
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

export default Login;