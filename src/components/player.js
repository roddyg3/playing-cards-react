class Player {
  constructor(playerName) {
    this.name = playerName;
    this.hand = [];
  }

  AddToHand(playingCard) {
    this.hand.push(playingCard);
  }
}

export default Player;