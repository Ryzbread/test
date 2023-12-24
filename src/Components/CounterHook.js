import React, { useState } from 'react'

function CounterExample() {
    const [count, setCount] = useState(0)

    return (
        <div className='App-Body'>
            <div>
                Counter: {count}
            </div>

            { /* button that increments count on click */}
            <button className='button' onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
}

export default CounterExample