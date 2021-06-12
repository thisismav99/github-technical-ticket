import { useState, useEffect } from "react";
import app from "../firebase";

const useSignedIn = (component) => {
    const [signedIn, setSignedIn] = useState(false);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if(user){
                setSignedIn(true);
                setEmail(user.email);
            }
            else{
                setSignedIn(false);
                setEmail(null);
            }
        })
    }, [component]);

    return { signedIn, email };
}

export default useSignedIn;
