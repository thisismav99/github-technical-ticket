import { useState, useEffect } from "react";
import app from "../firebase";

const useSignedIn = (component) => {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if(user){
                setSignedIn(true);
            }
            else{
                setSignedIn(false);
            }
        })
    }, [component]);

    return { signedIn };
}

export default useSignedIn;
