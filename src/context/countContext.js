import React,{useContext, useState } from "react";

const CountContext=React.createContext();

export const CountContextProvider=({children})=>{
    const[count,setCount]=useState(0);
    return(
        <CountContext.Provider value={{count,setCount}}>
        {children}
    </CountContext.Provider>
    )
}

export const useCountContextConsumer=()=>{
    return useContext(CountContext);
}