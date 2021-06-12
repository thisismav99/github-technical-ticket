import { useState, useEffect, useRef } from 'react';

const useHighlight = (component) => {
    const [highlight, setHighlight] = useState(null);
    const subscribe = useRef(false);

    useEffect(() => {
        subscribe.current = true;

        if(subscribe.current){
            setHighlight(component);
        }

        return () => subscribe.current = false;
    }, [component]);

    return { highlight };
}

export default useHighlight;
