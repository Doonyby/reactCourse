var React = require('react');
var ReactDOM = require('react-dom');
import { List } from './list'

export class ListContainer extends React.Component {

	constructor() {
		super()
		this.state = {text: [], cards: ['Card1'], input: "Introduce a Text"}
	}

	render () {

		var ListContainerStyle = {
      background: "#A9E2F3",
      height: 800,
      width: 800
    }

		var lists = this.props.lists.map(listName => {
        return (
          <List key={listName} title={listName} cards={this.state.cards} inputText={this.state.input} 
          onAddClick={this._handleButton.bind(this)} onAddInputChanged={this._handleInput.bind(this)}/>
          )
      })

		return (
        <div className='ListContainer' style={ListContainerStyle}>
        {lists}
        </div>
    )
	}


  _handleButton(event) {
      this.setState ({cards: this.state.cards.concat(this.state.text)})
      console.log('Text: ', this.state.text)
      console.log('Cards: ', this.state.cards)
      
  }

  _handleInput(event) {
      this.setState({text: event.target.value, input: event.target.value})
      console.log(this.state.input)
  }

}