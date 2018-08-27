import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {numPlayers: 0};
    // this.submit = this.submit.bind(this);
  }

  deckSize(input){

  }

  buttonClick(){
    if(this.state.numPlayers < 1 || this.state.numPlayers > 52){
      return alert('Please specify between 1-52 players');
    }
    this.numPlayers = this.state.numPlayers;
    this.props.retrievePlayers(this.state.numPlayers);
  }
  
  render(){
    return(
      <div className="player-input">
          <label>How Many Players? </label>
          <TextField 
            id="input-num-players" 
            defaultValue={this.state.numPlayers}
            onChange={
                (event) => {
                  this.setState({numPlayers: event.target.value})
                }              
              }
          />
          <Button 
            onClick={() => this.buttonClick()}
          >Deal!</Button>          
      </div>
    );
  }
}

export default PlayerInput;
