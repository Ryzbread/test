import React from 'react'
import HelloWorld from './HelloWorld'
import CounterExample from './CounterHook';

function Home(props) {
    return (
        <body>
            <HelloWorld name="Ryan"/>
            <CounterExample/>
        </body>
    );
}

export default Home