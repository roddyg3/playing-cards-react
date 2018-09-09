import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      deckSize: 52,
      numPlayers: 0, 
      cardsPerPlayer: 0      
    };
  }

  deckSize(numCards){
    this.setState({deckSize: numCards});
  }

  buttonClick(){
    if(this.state.numPlayers < 1 || this.state.numPlayers > this.state.deckSize){
      return alert(`Please specify between 1-${this.state.deckSize} players`);
    }
    if(this.state.cardsPerPlayer < 1){
      return alert('Please specify number of cards per player');
    }
    this.props.playerInput(this.state.numPlayers,this.state.cardsPerPlayer);
  }
  
  render(){
    return(
      <div className="player-input">
        <div>
          <p className="player-question">How Many Players?</p>
          <TextField 
            className="input-num-players" 
            defaultValue={this.state.numPlayers}
            onChange={
              (event) => {
                this.setState({numPlayers: event.target.value})
              }              
            }
          />
        </div>
        <div>
          <p className="cpp-question">How Many Cards Per Player?</p>
          <TextField 
            className="input-cpp" 
            defaultValue={this.state.cardsPerPlayer}
            onChange={
              (event) => {
                this.setState({cardsPerPlayer: event.target.value})
              }              
            }
          />
        </div>
        <div>
          <p>
            <Button 
              variant="raised" 
              className="deal-button"
              onClick={() => this.buttonClick()}
              >Deal!
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

export default PlayerInput;
