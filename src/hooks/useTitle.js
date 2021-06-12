import { useState, useEffect, useRef } from "react";

const useTitle = (component) => {
    const [title, setTitle] = useState("TICKET APP");
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        if(subscribe.current){
            setTitle(component);
        }

        return () => subscribe.current = false;
    }, [component]);

    document.title = title;
}

export default useTitle;