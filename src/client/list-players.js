import React, {Component} from 'react';

class ListPlayers extends Component {
  constructor(props){
    super(props);
    this.players = props.players;
  }
  render() {
    return (<p>{this.players.map(e => `${e.name}`).join(', ')}</p>);
  };
}

export default ListPlayers;
