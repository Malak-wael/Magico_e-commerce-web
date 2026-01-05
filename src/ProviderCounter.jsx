import React, { createContext, useState } from 'react'
export const CounterContext = createContext()
export default function ProviderCounter({ children }) {
    const [count, setcount] =useState (0)
    // const increment= ()=> increment(count + 1)
    const increment = () => {setcount(prev => prev + 1);};
    const decrement=() => {setcount(prev => prev - 1);}
    // const reset = reset(0)
    const value = {count, increment, decrement}
    return (
        <CounterContext.Provider value={value}>
            {children }
        </CounterContext.Provider>
    )
}
