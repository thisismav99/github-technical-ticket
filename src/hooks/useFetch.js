import { useEffect, useState, useRef } from "react";
import firebase from "../firebase";

const useFetch = (collection) => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        if(collection === "tickets"){
            firebase.firestore().collection(collection)
            .where("isDone", "==", false)
            .orderBy("createdAt", "desc")
            .onSnapshot((docs) => {
                let ticketsList = [];
    
                docs.forEach((doc) => {
                    ticketsList.push({...doc.data(), id: doc.id});
                });
                
                if(subscribe.current){
                    setTickets(ticketsList);
                    setLoading(false);
                }
            }, (error) => {
                console.log(error.message);
            });
        }
        else{
            firebase.firestore().collection("tickets")
            .doc(collection)
            .onSnapshot((doc) => {
                let ticket = [];

                ticket.push({...doc.data(), id: doc.id});

                if(subscribe.current){
                    setTickets(ticket);
                    setLoading(false);
                }
            }, (error) => {
                console.log(error.message);
            })
        }

        return () => subscribe.current = false;
    }, [collection]);

    return { tickets, loading };
}

export default useFetch;
