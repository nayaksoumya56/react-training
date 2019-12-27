import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getButtonText(){
    return "Click on Me";
}
function getTime() {
    return (new Date()).toLocaleTimeString()
}

const App = () => {

    const buttonText = "CliCk mE";

    return (
        <div>
            <div>
                <label className="label" for="name">Enter Name</label>
             <input id="name" type="text" />
                <button style={{
                    color: 'white',
                    backgroundColor: 'blue',
                    border:'1px solid red',
                    borderRadius: '4px'
                    }}>Submit</button>
                <button className="btn">{ buttonText }</button>
                <button className="btn">{ getButtonText() }</button>
            </div>
            <div>
                <h1>{getTime()}</h1>
            </div>
        </div>
        
    );
};

ReactDOM.render( 
    <App />,
    document.querySelector('#root')
);