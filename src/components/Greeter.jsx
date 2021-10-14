import React from 'react';

const Greeter = props => {
    let role = ''

    if (props.admin) {
        role = 'Admin'
    } else {
        role = 'Guest'
    }
    
    return (
        <>
            <h1 className='text-center'><span className='badge bg-success'>{role}</span>{props.number} {props.phrase}, {props.name}!</h1>
        </>
    )
}

export default Greeter