import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ to, ...props }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                className={`md:ml-8 text-xl md:my-0 my-7 py-3 underline-offset-4 ${match? 'underline': 'none'} ${match? 'text-rose-400':'text-black'}`}
                to={to}
                {...props}
            >
                
            </Link>
        </div>
    );
};

export default CustomLink;