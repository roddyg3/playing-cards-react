import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class ShowHands extends Component {
  constructor(props){
    super(props);
    this.players = props.players;
    this.deck = props.deck;
    this.state = {showHands: false}
  }

  handleClick = () => {
		this.setState((prevState) => {
			return {showHands: !prevState.showHands};
		});
	}

  renderHands = () => {
    let hands = [];
    this.players.forEach((player) => {
      if (player.hand.length > 0) {
        hands.push(<p>{`${player.name}'s hand: ${player.hand.map(e => `${e.icon}`).join(', ')}`}</p>);
      } else {
        hands.push(<p>{`${player.name}'s hand is empty!`}</p>);
      }
    });

    return(<div className="players-hands">{hands}</div>);
  }

  renderDeck = () => {
    let deckRender = <p>{`Deck contents: ${this.deck.cards.map(e => `${e.icon}`).join(', ')}`}</p>
    return(<div className="playing-deck">{deckRender}</div>);
  }

  render(){
    return(
      <div className="show-hands">
      <p className="show-hands-toggle">
        <Button variant="raised"
          onClick={() => this.handleClick()}
        >Show Hands</Button>
      </p>
        {this.state.showHands ? this.renderHands() : null}
        {this.state.showHands ? this.renderDeck() : null}
      </div>
    );
  }
}

export default ShowHands;