import React from "react";

export const Heading1:React.FC<{children: string}> = ({children}) => {
    return <h1 className="text-white text-2xl tracking-wider sm:text-3xl sm:tracking-widest font-semibold ">{children}</h1>
}

export const NavBar:React.FC<{children: string}> = ({children}) => {
    return <span className="text-white sm:tracking-wider md:text-lg text-xl font-semibold"></span>
}