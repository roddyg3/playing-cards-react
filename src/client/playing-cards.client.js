import React, { Component } from 'react';
import PlayerInput from './player-input';
import ShowHands from './show-hands';
import ListPlayers from './list-players';
import Player from '../components/player';
import Deck from '../components/deck';

class PlayingCardsClient extends Component {
  constructor() {
    super();
    this.state = {numPlayers: 0}
    this.playingDeck = new Deck();
    // 7 is optimal for ripple shuffling
    this.shuffleCount = 7;
    this.players = [];
  }
  
  setupGame = (numPlayers) => {
    this.setState({numPlayers: {numPlayers}});
    this.CreatePlayers(numPlayers);
    this.SetUpDeck();
    this.ShuffleAndDeal(this.shuffleCount, this.players);
  }

  CreatePlayers(numPlayers) {
    this.players.splice(0,this.players.length);
    for (let i = 1; i <= numPlayers; i += 1) {
      this.players.push(new Player(`Player ${i}`));
    }
  }

  SetUpDeck() {
    this.playingDeck.Create();
    console.log('The following deck was created:');
    this.playingDeck.ShowContents();
  }

  ShuffleAndDeal(shuffleCount, players) {
    this.playingDeck.Shuffle(shuffleCount);
    console.log('Shuffle results:');
    this.playingDeck.ShowContents();
    this.playingDeck.Deal(players);
  }

  render() {
    return (
      <div className="playing-cards-client">
        <p className="intro">Playing Cards React</p>
        <PlayerInput retrievePlayers={this.setupGame}/>
        <ListPlayers players = {this.players}/>
        <ShowHands players = {this.players}/>
      </div>
    );
  }
}

export default PlayingCardsClient;
