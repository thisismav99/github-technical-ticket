import { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import useTitle from "../../hooks/useTitle";
import firebase from "../../firebase";

const Solve = ({ email }) => {
    useTitle("TICKET APP - SOLVING...");
    const { id } = useParams();
    const { tickets } = useFetch(id);
    
    const { register, handleSubmit, formState:{ errors }, reset } = useForm();
    const [redirect, setRedirect] = useState(false);

    const solveIssue = (data, event) => {
        event.preventDefault();

        firebase.firestore().collection("tickets")
        .doc(id)
        .set({isDone: true}, { merge: true })
        .then(() => {
            firebase.firestore().collection("solved")
            .add({
                ticketId: id,
                action: data.action,
                technician: email
            })
            .then(() => {
                reset({ action: null }, { keepErrors: false });
                setRedirect(true);
            })
            .catch((error) => {
                console.log(error);
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="flex flex-wrap justify-center">
            { redirect && <Redirect to="/dashboard" /> }

            <div className="card">
                <p className="text-3xl">SOLVE THIS ISSUE</p>
                <form onSubmit={handleSubmit((data, event) => solveIssue(data, event))}>
                    <div className="mt-3">
                        <label className="block">ISSUE:</label>
                        <p className="italic underline text-sm">
                            { tickets && 
                             tickets.map((ticket) => (
                             <span key={ticket.id}>
                                {ticket.description}
                             </span>
                            ))}
                        </p>
                    </div>
                    <div className="mt-3">
                        <label className="block">ACTION TAKEN:</label>
                        <textarea className="input w-full"
                            {...register("action", { required: { value: true, message: "This is a required field" },
                                                     minLength: { value: 8, message: "Please enter at least 8 characters" }})}
                        ></textarea>
                        { errors.action && <p className="errors">{ errors.action.message }</p> }
                    </div>
                    <div className="mt-3">
                        <button className="btn">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Solve;
