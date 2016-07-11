var React = require('react');
var ReactDOM = require('react-dom');
import {Card} from './card'

export class List extends React.Component {

    constructor (props) {
        super (props)
    }  

    render () {

    var listStyle = {
      background: "#99ffcc"}

    var card = this.props.cards.map(content => {
      return (
        <Card key={content.id} text={content}/>
      )
    })

        return (
                <div className='card' style={listStyle}>
                    <p>List: {this.props.title}</p>
                    {card}
                </div>
            )
    }
}