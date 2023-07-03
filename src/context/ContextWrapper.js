import React, { createContext, useState } from "react"

export const ContextWrapper = ({children}) => {
    
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    return(
        <Context.Provider
            value={{
                data: data,
                setData: setData,
                isLoading: isLoading,
                setIsLoading: setIsLoading
            }}
        >
            {children}
        </Context.Provider>
    )
}

const Context = createContext()

export default Context