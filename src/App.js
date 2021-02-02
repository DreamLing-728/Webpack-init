import React from 'react';
import './App.less';


class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p className="green-black">
                    Hello World!
                </p>
            </div>
        );
    }
}

export default App;