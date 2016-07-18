var React = require('react');
var ReactDOM = require('react-dom');
import { ListContainer } from './listContainer'

class Board extends React.Component {

  constructor (props) {
    super (props)
  }  

  render () {

      var BoardStyle = {
        background: "#A9E2F3",
        height: 800,
        width: 800
      }

      return (
        <div className='board' style={BoardStyle}>
        <p>Board: {this.props.title}</p>
        <ListContainer  lists={['List1', 'List2']}/>
        </div>
        )
  }
}

ReactDOM.render(<Board title='Test'/>, document.getElementById('app'))