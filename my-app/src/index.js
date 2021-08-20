//Import 
import React from 'react';
import ReactDOM from 'react-dom';

//Create react component
const App = () => {
    const buttonText = ['Hi', 'There'];
    return (
        <div>
            <label className = "label" htmlFor="name">Enter Name:</label>
            <input id = "name" type = "text"/>
            <button style = {{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    );
};

//Take the component and render it on the screen.
ReactDOM.render(<App />, document.querySelector('#root'));