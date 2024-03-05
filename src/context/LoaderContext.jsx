import { createContext, useState } from "react";
import Loader from "../components/atoms/Loader";

const LoaderContext = createContext();

const LoaderContextProvider = ({children})=>{

    const [loader, innerSetLoader] = useState(false);

    return (
        <LoaderContext.Provider value={{loader, innerSetLoader}}>
            {children}
            {loader && <Loader />}
        </LoaderContext.Provider>
    )
}

export {LoaderContext, LoaderContextProvider};