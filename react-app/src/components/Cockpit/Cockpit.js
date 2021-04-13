import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>I'm a React App</h1>
            <button style={props.style} onClick={props.click}>Toggle Display</button>
        </div>
  
    )
}

export default cockpit;