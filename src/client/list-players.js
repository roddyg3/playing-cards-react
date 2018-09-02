import React, {Component} from 'react';

class ListPlayers extends Component {
  constructor(props){
    super(props);
    this.players = this.props.players;
  }
  render() {
    return (
      <div className="list-players">
        <p>Players:</p>
        <p className="player-list">
          {this.players.map(e => `${e.name}`).join(', ')}
        </p>
      </div>
    );
  };
}

export default ListPlayers;
