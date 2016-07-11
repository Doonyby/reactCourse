var React = require('react');
var ReactDOM = require('react-dom');

export class Card extends React.Component {

    constructor () {
        super ()
    }  

    render () {

    var cardsStyle = {
      background: "#ffccff",
      height: 100,
      width: 100,
      marginBottom:50}

        return (
                <div className='input' style={cardsStyle}>
                    <p>{this.props.text}</p>
                </div>
            )
    }


}