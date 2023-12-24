import React from 'react';

function HelloWorld(props) {
    return (
        <div className='App-Body'>
            Hello {props.name}!
        </div>
    );
}


export default HelloWorld;