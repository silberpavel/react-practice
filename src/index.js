// console.log('I\'m web developer!!!');
import React from 'react';
import ReactDOM from 'react-dom';


// Создаем React компонент (посути это обычный JavaScript класс)

class App extends React.Component{

    btnOnClick(event) {
        console.log('Button clicked', event.target);
    }

    render() {
        return (
            <div className="test">
                <h1>App works!</h1>
                <p>what's up world?!</p>
                <button onClick={this.btnOnClick}>{ this.props.btnText }</button>
            </div>
        );
    }
}

ReactDOM.render( 
    <App btnText="Click on me!" />,
    document.getElementById('app')
);