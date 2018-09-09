import React, { Component } from 'react';
import PlayerInput from './player-input';
import ShowHands from './show-hands';
import ListPlayers from './list-players';
import Player from '../components/player';
import Deck from '../components/deck';

class PlayingCardsClient extends Component {
  constructor() {
    super();
    this.state = {numPlayers: 0, cardsPerPlayer: 0}
    this.playingDeck = new Deck();
    // 7 is optimal for ripple shuffling
    this.shuffleCount = 7;
    this.players = [];
  }
  
  setupGame = (numPlayers, cardsPerPlayer) => {
    this.setState({numPlayers: {numPlayers}, cardsPerPlayer: {cardsPerPlayer}});
    this.CreatePlayers(numPlayers);
    this.SetUpDeck();
    this.ShuffleAndDeal(this.shuffleCount, this.players, cardsPerPlayer);
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

  ShuffleAndDeal(shuffleCount, players, cardsPerPlayer) {
    this.playingDeck.Shuffle(shuffleCount);
    console.log('Shuffle results:');
    this.playingDeck.ShowContents();
    this.playingDeck.Deal(players, cardsPerPlayer);
  }

  render() {
    return (
      <div className="playing-cards-client">
        <p className="title">Playing Cards React</p>
        <PlayerInput playerInput={this.setupGame} />
        {this.players.length > 0 ?
          <ListPlayers players = {this.players}/> : null}
        {this.players.length > 0 ?
          <ShowHands 
            players = {this.players}
            deck = {this.playingDeck}
          /> : null}
      </div>
    );
  }
}

export default PlayingCardsClient;
