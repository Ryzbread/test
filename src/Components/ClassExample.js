import React from 'react'

class TestExample extends React.Component {
    render() {
        return (
            <div className='App-Body'>
                Hello {this.props.name}!
            </div>
        );
    }
}

export default TestExample