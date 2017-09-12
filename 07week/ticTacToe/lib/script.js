'use strict';

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerTurn: 'X'
    };
    this.makeMove = this.makeMove.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.click = this.click.bind(this);
  }

  render() {
    return React.createElement('div', null, React.createElement('div', { className: 'row' }, React.createElement('div', { 'data-cell': '0', onClick: this.click }), React.createElement('div', { 'data-cell': '1', onClick: this.click }), React.createElement('div', { 'data-cell': '2', onClick: this.click })), React.createElement('div', { className: 'row' }, React.createElement('div', { 'data-cell': '3', onClick: this.click }), React.createElement('div', { 'data-cell': '4', onClick: this.click }), React.createElement('div', { 'data-cell': '5', onClick: this.click })), React.createElement('div', { className: 'row' }, React.createElement('div', { 'data-cell': '6', onClick: this.click }), React.createElement('div', { 'data-cell': '7', onClick: this.click }), React.createElement('div', { 'data-cell': '8', onClick: this.click })));
  }

  makeMove(e) {

    e.target.innerHTML = this.state.playerTurn;
    winArr[e.target.attributes[0].value] = this.state.playerTurn;
    this.setState(oldState => {
      return oldState.playerTurn = oldState.playerTurn === 'X' ? 'O' : 'X';
    });
  }
  checkForWin() {
    if (diagWin()) {
      alert('Diagonal Winner: Player ' + this.state.playerTurn);
    } else if (horWin()) {
      alert('Horizontal Winner: Player ' + this.state.playerTurn);
    } else if (vertWin()) {
      alert('Vertial Winner: Player ' + this.state.playerTurn);
    }
  }

  click(e) {
    this.makeMove(e);
    this.checkForWin();
  }
}
ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById('tic-tac-toe'));