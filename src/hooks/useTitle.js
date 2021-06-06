import { useState, useEffect } from "react";

const useTitle = (component) => {
    const [title, setTitle] = useState("TICKET APP");

    useEffect(() => {
        setTitle(component);
    }, [component]);

    document.title = title;
}

export default useTitle;