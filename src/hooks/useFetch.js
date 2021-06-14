import { useEffect, useState, useRef } from "react";
import firebase from "../firebase";

const useFetch = (collection) => {
    const [tickets, setTickets] = useState([]);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

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
            }
        }, (error) => {
            console.log(error.message);
        });

        return () => subscribe.current = false;
    }, [collection]);

    return { tickets };
}

export default useFetch;
