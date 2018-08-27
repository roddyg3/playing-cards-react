import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PlayerInput extends Component {
  constructor(props){
    super(props);
    this.state = {value: 0};
    // this.submit = this.submit.bind(this);
    this.numPlayers = 0;
  }

  deckSize(input){

  }

  buttonClick(){
    if(this.state.value < 1 || this.state.value > 52){
      return alert('Please specify between 1-52 players');
    }    
    this.numPlayers = this.state.value;
    this.props.retrievePlayers(this.state.value);
  }
  
  render(){
    return(
      <div className="player-input">
          <label>How Many Players? </label>
          <TextField 
            id="input-num-players" 
            defaultValue={this.state.value}
            onChange={
                (event) => {
                  this.setState({value: event.target.value})
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
