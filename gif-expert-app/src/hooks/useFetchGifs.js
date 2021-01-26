import { useState } from "react";

export const useFetchGifs = () => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    setTimeout(()=>{
        setState({
            data: [1,2,3,4,5,6],
            loading: false
        })
    }, 3000);
    // state { data:[], loading: true }
    return state;
}