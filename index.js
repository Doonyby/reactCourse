var React = require('react');
var ReactDOM = require('react-dom');
import {List} from './list'

class Board extends React.Component {

    constructor (props) {
        super (props)
    }  

    render () {

    var boardStyle = {
      background: "#A9E2F3",
      height: 800,
      width: 800}

    var lists = this.props.lists.map(listName => {
      return (
        <List key={listName.id} title={listName} cards={['Card1', 'Card2', 'Card3']}/>
      )
    })
        return (
                <div className='board' style={boardStyle}>
                    <p>Board: {this.props.title}</p>
                    {lists}
                </div>
            )
    }


}

ReactDOM.render(<Board title='Test' lists={['List1', 'List2']}/>, document.getElementById('app'))