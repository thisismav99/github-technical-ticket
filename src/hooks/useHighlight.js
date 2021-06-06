import { useState, useEffect } from 'react';

const useHighlight = (component) => {
    const [highlight, setHighlight] = useState(null);

    useEffect(() => {
        setHighlight(component);
    }, [component]);

    return { highlight };
}

export default useHighlight;
