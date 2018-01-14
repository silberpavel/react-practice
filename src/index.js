// console.log('I\'m web developer!!!');
import React from 'react';
import ReactDOM from 'react-dom';


// Создаем React компонент (посути это обычный JavaScript класс)

class App extends React.Component{

    static propTypes = {
        btnText: React.PropTypes.string.isRequired,
        h1Text: React.PropTypes.string.isRequired
    };

    btnOnClick(event) {
        console.log('Button clicked', event.target);
    }

    render() {
        return (
            <div className="test">
                <h1> { this.props.h1Text } </h1>
                <p>what's up world?!</p>
                <button onClick={this.btnOnClick}>{ this.props.btnText  || "Default text"}</button>
            </div>
        );
    }
}

ReactDOM.render( 
    <App btnText="Click on me!" h1Text="This is h1 text" />,
    document.getElementById('app')
);