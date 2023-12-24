import React from 'react'
import TestExample from './ClassExample';
import HelloWorld from './HelloWorld'
import CounterExample from './CounterHook';
import Filler from './BodyFiller';

function Home(props) {
    return (
        <body>
            <HelloWorld name="Ryan"/>
            <TestExample name = "Lacy"/>
            <CounterExample/>
            <Filler/>
        </body>
    );
}

export default Home