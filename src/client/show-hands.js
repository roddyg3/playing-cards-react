import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class ShowHands extends Component {
  constructor(props){
    super(props);
    this.players = props.players;
    this.state = {showHands: false}
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

  render(){
    return(
      <div className="show-hands">
        <Button 
          onClick={() => this.setState({showHands: !this.state.showhands})}
        >Show Hands</Button>
        <p>Player Hand(s):</p><br />
        {this.state.showHands ? this.renderHands() : null}
      </div>
    );
  }
}

export default ShowHands;