import React, {Component} from 'react';

class ListPlayers extends Component {
  constructor(props){
    super(props);
    this.players = props.players;
  }
  render() {
    return (
      <div className="list-players">
        <p>Players:</p>
        <p>
          {this.players.map(e => `${e.name}`).join(', ')}
        </p>
      </div>
    );
  };
}

export default ListPlayers;
