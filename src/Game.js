const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
    this.gameCards = [];
    this.gameDeck;
  }

  start(gameData) {
    this.gameCards = gameData;
    this.gameDeck = new Deck(gameData);
    this.currentRound = new Round(this.gameDeck);
    this.gameDeck.countCards();
    this.printMessage(this.gameDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;