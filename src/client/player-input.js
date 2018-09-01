import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {numPlayers: 0};
    this.deckSize = 52;
  }

  deckSize(input){

  }

  buttonClick(){
    if(this.state.numPlayers < 1 || this.state.numPlayers > this.deckSize){
      return alert(`Please specify between 1-${this.deckSize} players`);
    }
    this.numPlayers = this.state.numPlayers;
    this.props.retrievePlayers(this.state.numPlayers);
  }
  
  render(){
    return(
      <div className="player-input">
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
          <Button variant="raised"
            onClick={() => this.buttonClick()}
          >Deal!</Button>          
      </div>
    );
  }
}

export default PlayerInput;
