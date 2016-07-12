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
          <List key={listName} title={listName} cards={['Card1']} 
          onAddClick={this._handleButton} onAddInputChanged={this._handleInput}/>
          )
      })
      
      return (
        <div className='board' style={boardStyle}>
        <p>Board: {this.props.title}</p>
        {lists}
        </div>
        )
  }

  _handleButton() {
      console.log('Clicked')
  }

  _handleInput() {
      console.log('Writing')
  }

  }

  ReactDOM.render(<Board title='Test' lists={['List1']}/>, document.getElementById('app'))