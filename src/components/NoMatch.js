import React from 'react';
import {Link} from 'react-router-dom'

const NoMatch = () =>{
    return(
        <h1>Page not found, return <Link to="/">home</Link></h1>
    )
};

export default NoMatch;