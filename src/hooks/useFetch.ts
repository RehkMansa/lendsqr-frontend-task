/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useReducer, useRef } from "react";

type State<T> = {
    data?: T;
    error?: Error;
};

type Cache<T> = { [url: string]: T };

type Action<T> =
    | { type: "loading" }
    | { type: "fetched"; payload: T }
    | { type: "error"; payload: Error };

const useFetch = <T = unknown>(url?: string, options?: RequestInit): State<T> => {
    const cache = useRef<Cache<T>>({}); // used to cache the response
    const cancelRequest = useRef<boolean>(false); // to subscribe to the api request

    const initialState: State<T> = {
        error: undefined,
        data: undefined,
    };

    // reducer function to prevent complex state logic
    const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
        switch (action.type) {
            case "loading":
                return { ...initialState };
            case "fetched":
                return { ...initialState, data: action.payload };
            case "error":
                return { ...initialState, error: action.payload };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(() => {
        if (!url) return; // return if url is empty

        cancelRequest.current = false;

        const fetchData = async () => {
            dispatch({ type: "loading" });

            if (cache.current[url]) {
                dispatch({ type: "fetched", payload: cache.current[url] });
                return;
            }

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = (await response.json()) as T;
                cache.current[url] = data;
                if (cancelRequest.current) return;

                dispatch({ type: "fetched", payload: data });
            } catch (error) {
                if (cancelRequest.current) return;

                dispatch({ type: "error", payload: error as Error });
            }
        };

        fetchData();

        return () => {
            cancelRequest.current = true; // prevent the endpoint being called if the dom is unmounted
        };
    }, [url]);

    return state;
};

export default useFetch;

// code is well explained and gotten from: https://usehooks-ts.com/react-hook/use-fetch
