import React, { useState } from 'react'

function CounterExample() {
    const [count, setCount] = useState(0)
    let niceCount

    // Show "Nice." when count is 69
    if(count === 69) {
        niceCount = <div>Nice.</div>
    }
    else {
        niceCount = <br/>
    }

    return (
        <div className='App-Body'>
            <div>
                Counter: {count}
            </div>
            { niceCount }

            { /* button that increments count on click */}
            <button className='button' onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
}

export default CounterExample