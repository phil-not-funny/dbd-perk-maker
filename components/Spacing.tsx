import React from "react";

const Spacing: React.FC<{space: number, className?: string}> = ({space, className}) => {
    return <div className={`w-full bg-inherit pb-${space} ${className}`}></div>
}

export default Spacing;