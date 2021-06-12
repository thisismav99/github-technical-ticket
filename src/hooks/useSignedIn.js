import { useState, useEffect, useRef } from "react";
import app from "../firebase";

const useSignedIn = (component) => {
    const [signedIn, setSignedIn] = useState(false);
    const [email, setEmail] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        app.auth().onAuthStateChanged((user) => {
            if(user){
                if(subscribe.current){
                    setSignedIn(true);
                    setEmail(user.email);
                }
            }
            else{
                if(subscribe.current){
                    setSignedIn(false);
                    setEmail(null);
                }
            }
        });

        return () => subscribe.current = false;
    }, [component]);

    return { signedIn, email };
}

export default useSignedIn;
