import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    // los useEffect no pueden ser async
    // ya que esperan evento sincronos
    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 1500);
            })
    }, [category]);

    return state;
}