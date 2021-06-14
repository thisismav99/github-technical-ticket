import { useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import { serverTime } from "../../firebase";
import useHighlight from "../../hooks/useHighlight";
import useTitle from "../../hooks/useTitle";

const CreateTicket = ({ email }) => {
    useTitle("TICKET APP - CREATE TICKET");

    const { highlight } = useHighlight("createticket");

    if(highlight !== null && highlight === "createticket"){
        document.querySelector("#home-btn").classList.remove("border-solid", "border-r-4", "border-green-500");
        document.querySelector("#create-ticket-btn").classList.add("border-solid", "border-r-4", "border-green-500");
    }

    const { register, handleSubmit, formState:{ errors }, reset } = useForm();

    const [message, setMessage] = useState(null);

    const createForm = (data, event) => {
        event.preventDefault();

        const createdAt = serverTime();
        const user = email;

        firebase.firestore().collection("tickets")
        .add({
           title: data.title,
           description: data.description,
           user,
           createdAt,
           isDone: false
        })
        .then(() => {
            setMessage("Ticket has been created!");
            reset({email: null, password: null}, {keepErrors: false});
        })
        .catch((error) => {
            setMessage(error);
        });
    }

    return (
        <div className="flex flex-wrap justify-center">
            <div className="card">
                <p className="text-3xl">CREATE TICKET</p>
                <form onSubmit={handleSubmit((data, event) => { createForm(data, event) })}>
                    <div className="mt-3">
                        <label className="block">Title:</label>
                        <input type="text" className="input w-full" 
                         {...register("title", { required: { value: true, message: "This is a required field" },
                                                 minLength: { value: 6, message: "Please enter at least 6 characters" } })}
                        />
                        { errors.title && <p className="errors">{ errors.title.message }</p> }
                    </div>
                    <div className="mt-3">
                        <label className="block">Description:</label>
                        <textarea className="input w-full"
                         {...register("description", {required: {value: true, message: "This is a required field" },
                                                      minLength: {value: 10, message: "Please enter at least 10 characters"} })}
                        ></textarea>
                        { errors.description && <p className="errors">{ errors.description.message }</p> }
                    </div>
                    <div className="mt-3">
                        <button className="btn">SUBMIT</button>
                    </div>

                    { message && <p className="italic mt-3">{ message }</p> }
                </form>
            </div>
        </div>
    )
}

export default CreateTicket;
