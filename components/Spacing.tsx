import React from "react";

const Spacing: React.FC<{space: number, className?: string}> = ({space, className}) => {
    return <div className={`w-full bg-inherit block h-${space} ${className}`}></div>
}

export default Spacing;